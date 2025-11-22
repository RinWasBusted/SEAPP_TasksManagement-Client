import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
function MessageLog({
    showLog = false 
}) {
    if (!showLog) return <></>
    return (
        <motion.div
            className='text-white bg-[#202124] w-110 flex items-center justify-start px-4 shadow-2xl rounded-md h-14 font-md fixed left-6 bottom-6 text-lg'
            onClick={(e) => { e.stopPropagation() }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ transition: 'all', ease: 'easeInOut', duration: '0.3' }}
        >Đã sao chép mã tham gia của nhóm

        </motion.div>
    )
}
export default MessageLog