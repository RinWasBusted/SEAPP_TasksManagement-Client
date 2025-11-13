import React from 'react'
import ReactDOM from 'react-dom'
import HeaderPhase from '../HeaderPhase'
import FeatureCard from './FetureCard'
function Section2() {
    return (
        <div className='landing__section bg-white py-6'>
            <HeaderPhase title={'Features'} />
            <h2 className='mt-10 text-5xl text-black text-center w-full'>
                Every thing you need to
            </h2>
            <h2 className='mt-2 text-5xl text-[#ff6766] text-center w-full'>
                Stay Progress
            </h2>
            <span className='block w-full text-center text-lg mt-6 mb-18'>
                Powerful features designed to help you manage collaborate with teams and achieve more.
            </span>

            <div className='mt-8  px-8 w-full grid min-h-160 items-center justify-center grid-cols-12 gap-y-12 gap-x-10 text-center'>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </div>
    )
}
export default Section2