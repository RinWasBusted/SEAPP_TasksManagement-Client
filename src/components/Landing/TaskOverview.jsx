import React from 'react'
import ReactDOM from 'react-dom'
function TaskOverview() {
    return (
        <li className='rounded-2xl my-3 w-full py-1 border-2 border-gray-300 h-17 flex px-4 gap-3 items-center justify-between bg-[#f8f9fe]'>
            <div className='flex-1 h-full flex items-center justify-center'>
                <div className='rounded-full w-5 h-5 bg-green-600'>

                </div>
            </div>
            <div className='flex-8 h-full'>
                <h3 className='text-xl text-black '>
                    Landing Page Design
                </h3>
                <div className='flex items-center w-82 justify-between text-gray-400'>
                    <span className='text-gray-500'>Priority: Moderate</span>
                    <span className='text-green-500'>Priority: Moderate</span>
                </div>
            </div>
        </li>
    )
}
export default TaskOverview
