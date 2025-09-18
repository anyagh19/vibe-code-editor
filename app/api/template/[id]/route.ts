import { db } from "@/lib/db";
import { templatePaths } from "@/lib/template";
import { readTemplateStructureFromJson, saveTemplateStructureToJson } from "@/modules/playground/lib/path-to-json";
import path from "path";
import fs from 'fs'


function validateJsonStructure(data: unknown): boolean {
    try {
        JSON.parse(JSON.stringify(data)); // Ensures it's serializable
        return true;
    } catch (error) {
        console.error("Invalid JSON structure:", error);
        return false;
    }
}


export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    if (!id) {
        return Response.json({ error: "Id missing" }, { status: 400 })
    }

    const playground = await db.playground.findUnique({
        where: {
            id
        }
    })

    if (!playground) {
        return Response.json({ error: "playground missing" }, { status: 400 })
    }

    const templateKey = playground?.template as keyof typeof templatePaths;

    const templatePath = templatePaths[templateKey]

    try {
        const inputPath = path.join(process.cwd(), templatePath)
        const outputFile = path.join(process.cwd(), `output/${templateKey}.json`)

        await saveTemplateStructureToJson(inputPath, outputFile);

        const result = await readTemplateStructureFromJson(outputFile);

        if (!validateJsonStructure(result.items)) {
            return Response.json({ error: "Invalid json format" }, { status: 500 })
        }

        fs.unlink(outputFile, (err) => {
            if (err) console.error(err);
        });


        return Response.json({ success: true, templateJson: result }, { status: 200 })
    } catch (error) {
        console.error(error);
    }
}