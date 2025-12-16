import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute flex flex-col justify-between p-8 top-0 left-0 h-full w-full'>
        <h2 className='bg-white rounded-full h-12 w-12 text-xl font-semibold flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-lg leading-7 text-white mb-14'>{props.intro}</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='px-8 py-2 rounded-full font-medium'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='px-4 py-2 rounded-full font-medium'><ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent