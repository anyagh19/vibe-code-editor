import { handlers } from "@/auth" // Referring to the auth.ts we just created
import {PrismaAdapter } from '@auth/prisma-adapter'

export const { GET, POST } = handlers