// Tao task bang tiptap 
import React from 'react'
import ReactDOM from 'react-dom'
import WorkingLayout from '../layouts/WorkingLayout'
import RichTextEditor from '../components/RichTextEditor'
function CreateTask() 
{
    return (
        <WorkingLayout>
            <div className='w-full h-[720px] '>
                <RichTextEditor />
            </div>
        </WorkingLayout>
    )
}
export default CreateTask