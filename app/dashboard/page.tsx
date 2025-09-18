import { deleteProjectById, duplicateProjectById, editProjectById, getAllPlaygroundForUser } from '@/modules/dashboard/actions'
import AddNewButton from '@/modules/dashboard/components/add-new-button'
import AddRepo from '@/modules/dashboard/components/add-repo'
import EmptyState from '@/modules/dashboard/components/empty-state'
import ProjectTable from '@/modules/dashboard/components/project-table'
import React from 'react'

const Page = async() => {
    const playgroundData = await getAllPlaygroundForUser();

  return (
    <div className='flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            <AddNewButton />
            <AddRepo />
        </div>

        <div className='mt-10 flex flex-col items-center justify-center w-full'>
            {playgroundData && playgroundData.length == 0 ? (
                <EmptyState />
            ) : (
                <ProjectTable
                //  @ts-expect-error needed to ignore type mismatch
                projects={playgroundData || []}
                onDeleteProject={deleteProjectById}
                onUpdateProject={editProjectById}
                // @ts-expect-error needed to ignore type mismatch
                onDuplicateProject={duplicateProjectById}
                />
            )}
        </div>
    </div>
  )
}

export default Page