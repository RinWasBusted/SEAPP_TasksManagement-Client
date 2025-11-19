import React from 'react'
import ReactDOM from 'react-dom'
function TaskByGroupLandingHeader() {
    return (
    <div className='h-30 relative text-black flex flex-col items-start justify-end py-2 gap-1 border-b mb-3 border-b-gray-400 w-full'>
            <h2 className=' text-[20px] inline-block font-[Montserrat] font-normal'>Today Progress</h2>
            <h2 className='text-[32px] font-medium'>12 Tasks</h2>
            <div className='rounded-full h-15 w-15 bg-(--color-primary) flex items-center justify-center absolute text-white font-medium right-4 top-7 text-lg'>99%</div>
    </div>
    )
}
export default TaskByGroupLandingHeader