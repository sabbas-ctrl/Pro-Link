import React from 'react'
import CardEditor from '../components/CardEditor'

export default function EditorPage(){
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Card Editor</h1>
      <CardEditor />
    </div>
  )
}