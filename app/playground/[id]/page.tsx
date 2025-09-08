"use client"

import { usePlayground } from '@/modules/playground/hooks/usePlayground'
import { useParams } from 'next/navigation'
import React from 'react'

const PlaygroundPage = () => {
    const {id} = useParams<{id: string}>()

    const {playgroundData , templateData , error , saveTemplateData , isLoading} = usePlayground(id)

    console.log(playgroundData , templateData )

  return (
    <div>PlaygroundPage {id}</div>
  )
}

export default PlaygroundPage