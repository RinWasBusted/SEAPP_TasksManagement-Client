import React from 'react'
import ReactDOM from 'react-dom'
import WorkingLayout from '../layouts/WorkingLayout'
import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent } from '@tiptap/react'
import RichTextEditor from './TextEditorComponents/index'
import MenuBar from './TextEditorComponents/Menubar'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import ImageUpload from './TextEditorComponents/ImageUpload'
function CreateTask() {


    //mainEditor
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc ml-4'
                    }
                }, 
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal ml-4'
                    }
                }
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight,  //Khai bao cac extensions, co the search trong tip tap de tim cac extensions va thiet dat vao ben trong 
        ],
        content: '<p>Hello world</p>',
        editorProps: {
            attributes: {
                class: 'w-full h-[500px] border-2 overflow-y-auto rounded-md px-3 bg-slate-50 py-2 text-base border-slate-200  bg-white text-black outline-0'
            }
        }
    })


    



    return (
        <WorkingLayout>
            <div className='w-full h-[840px]  border p-6 rounded-xl border-gray-500 mb-10'>
                {/* Header */}
                <div className='flex items-start justify-start gap-6'>
                    {/* <div className='bg-black rounded-xl w-[210px] h-[210px] mr-2'>

                    </div> */}
                    <ImageUpload /> 
                    <div className='flex-1'>
                        <h2 className='font-semibold text-2xl line-clamp-2 text-black'>Attend Nichlas party</h2>
                        <p className='text-black flex items-center justify-start gap-12 text-base mt-4'>
                            Priority
                            <span>
                                <label htmlFor='Moderate' className='mr-2'>Moderate</label>
                                <input type='radio' name='priority' />
                            </span>
                            <span>
                                <label htmlFor='Moderate' className='mr-2'>Moderate</label>
                                <input type='radio' name='priority' />
                            </span>
                            <span>
                                <label htmlFor='Moderate' className='mr-2'>Moderate</label>
                                <input type='radio' name='priority' />
                            </span>
                        </p>
                        <p className='mt-4 text-black'>Status: <span className='text-(--color-not-started)'>Not started</span></p>
                        <p className='text-sm text-(--color-text-desc) mt-4'>Created On <span></span></p>
                    </div>
                </div>

                {/* MainEditorLayout */}
                <div className='text-lg min-h-[540px] mt-8'>
                    {/* MenuBar */}
                    <MenuBar editor={editor} />
                    {/* RichTextEditor */}
                    <RichTextEditor editor={editor} />
                </div>
            </div>
        </WorkingLayout>
    )
}
export default CreateTask