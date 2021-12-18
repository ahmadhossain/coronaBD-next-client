import React from 'react'

function Skeleton(){
    return (
        <div className="max-w-min bg-white shadow-xl rounded-2xl mx-auto">
        <div className="px-5 animate-pulse h-full">
            <div className="space-y-3 py-9 pl-24">
                <div className="ml-8 w-24 bg-gray-300 h-10 md:h-14 rounded-md"></div>
                <div className="w-32 bg-gray-300 h-6 rounded-md"></div>
                <div className="ml-8 w-24 bg-gray-300 h-10 md:h-14 rounded-md"></div>
                <div className="w-32 bg-gray-300 h-6 rounded-md"></div>
            </div>
            <div className="flex space-x-3 pb-7">
                <div className="space-y-3">
                    <div className="w-28 bg-gray-300 h-6 rounded-md"></div>
                    <div className="ml-4 w-24 bg-gray-300 h-6 rounded-md"></div>
                </div>
                <div className="space-y-3">
                    <div className="w-28 bg-gray-300 h-6 rounded-md"></div>
                    <div className="ml-4 w-24 bg-gray-300 h-6 rounded-md"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skeleton
