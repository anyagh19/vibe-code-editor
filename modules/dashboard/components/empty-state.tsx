import React from 'react'

function EmptyState() {
  return (
    <div className='flex items-center justify-center flex-col py-10'>
        <img src="/empty-state.svg" alt="emptyState" className='w-48 h-48 mb-4' />
        <h2 className='text-xl font-semibold text-gray-500'>No Project Found</h2>
        <p className='text-gray-400'>Create a new project to get started</p>
    </div>
  )
}

export default EmptyState