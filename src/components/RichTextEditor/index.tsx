import React from 'react'
import ReactDOM from 'react-dom'
import { useEditor , EditorContent } from '@tiptap/react' 
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'
function RichTextEditor()
{

    const editor = useEditor({
    extensions: [
        StarterKit, 
        TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ], // define cac extension de su dung 
    content: '<p>Hello world<p>', 
    editorProps: {
        attributes: {
            class: 'h-[156px] overflow-y-auto bg-slate-50 rounded-md py-2 px-3 border text-black'
        }
    }
    })
    const headerEditor = useEditor({
        extensions: [
            StarterKit, 
            Highlight
        ], 
        content: 'Xin chao cac ban', 
        editorProps: {
            attributes: {
                class: 'w-full h-12 text-lg bg-slate-50 border px-3 py-2 rounded-md mb-2'
            }
        }
    })

    return (
        <div>
            <EditorContent editor={headerEditor}/> 
            <MenuBar editor = {editor}/>
            <EditorContent editor={editor} />
        </div>
    )
}
export default RichTextEditor


// extensions

// hoặc content

// hoặc editorProps