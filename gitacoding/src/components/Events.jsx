import React from 'react'
import Navbar from './Navbar'

export default function Events() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white pt-20">

            < Navbar />


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pt-20">

                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-2xl font-semibold '>Events</h1>
                    <a href="/student-dashboard" className='text-sm hover:underline'>Back to dashboard</a>
                </div>




                <div className='rounded-xl border border-neutral-800 bg-neutral-900 mb-6'>

                    <div className='p-4 border-b border-neutral-800 '>
                        <div class="text-white font-semibold">Ongoing</div>
                    </div>
                    <div className='p-4'>
                        <div className='text-neutral-400 text-sm'>No ongoing events.</div>
                    </div>
                </div>

                <div className='rounded-xl border border-neutral-800 bg-neutral-900 mb-6'>

                    <div className='p-4 border-b border-neutral-800 '>
                        <div class="text-white font-semibold">Upcoming</div>
                    </div>
                    <div className='p-4'>
                        <div className='text-neutral-400 text-sm'>No upcoing events.</div>
                    </div>
                </div>

                <div className='rounded-xl border border-neutral-800 bg-neutral-900 mb-6'>

                    <div className='p-4 border-b border-neutral-800 '>
                        <div class="text-white font-semibold">Past</div>
                    </div>
                    <div className='p-4'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4"></div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
