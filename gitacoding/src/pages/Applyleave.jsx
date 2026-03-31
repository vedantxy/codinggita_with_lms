import React from 'react'
import Navbar from '../components/Navbar'

export default function Applyleave() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white pt-20">

            <Navbar />

            <div className='px-6 pb-8 max-w-7xl mx-auto'>

                <div className=''>
                    <h1 className='text-3xl font-bold'>Apply for Leave</h1>
                    <p className='mt-1 text-neutral-400'>Submit your leave application and track your requests</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 '>

                    <div className=' bg-neutral-900 border-neutral-800 border rounded-lg p-4'>
                        <h1 className='font-bold text-2xl'>0</h1>
                        <p className='text-neutral-400'>Total Applications</p>
                    </div>

                    <div className='bg-neutral-900  border-neutral-800 border rounded-lg p-4'>
                        <h1 className='font-bold text-2xl text-amber-300'>0</h1>
                        <p className='text-neutral-400'>Pending Review</p>
                    </div>

                    <div className='bg-neutral-900  border-neutral-800 border rounded-lg p-4 '>
                        <h1 className='font-bold text-2xl text-green-400'>0</h1>
                        <p className='text-neutral-400'>Approved</p>
                    </div>

                    <div className='bg-neutral-900  border-neutral-800 border rounded-lg p-4'>
                        <h1 className='font-bold text-2xl text-red-400'>0</h1>
                        <p className='text-neutral-400'>Rejected</p>
                    </div>

                </div>


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>


                    <div className='border border-neutral-800 bg-neutral-900 rounded-lg p-6'>


                        <div className='flex items-center gap-3 mb-6'>

                            <div className='h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center'>

                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>

                                </svg>

                            </div>

                            <div>
                                <h2 className='font-semibold text-xl'>New Leave Application</h2>
                                <p className='text-neutral-400 text-sm'>Fill out the form to submit your leave request</p>
                            </div>

                        </div>

                        <form className='space-y-6'>

                            <div>
                                <label className='block text-sm font-medium text-neutral-200 mb-2'>Leave Category</label>
                                <select className='w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700  text-neutral-100 '>
                                    <option>Select category</option>
                                    <option value="Personal reasons">Personal reasons</option>
                                    <option value="Festival celebration">Festival celebration</option>
                                    <option value="Hackathon participation">Hackathon participation</option>
                                    <option value="College events (seminars, workshops, competitions, etc.)">College events (seminars, workshops, competitions, etc.)</option>
                                    <option value="Sick leave / medical reasons">Sick leave / medical reasons</option>
                                    <option value="Placement drives">Placement drives</option>
                                    <option value="Company work (official tasks or visits)">Company work (official tasks or visits)</option>
                                    <option value="Interviews">Interviews</option>
                                    <option value="Family functions">Family functions</option>
                                    <option value="Emergency situations">Emergency situations</option>
                                    <option value="Travel-related reasons">Travel-related reasons</option>
                                    <option value="Duty leave">Duty leave</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>


                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium text-neutral-200 mb-2'>From Date</label>
                                    <input type="date" className='w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors ' />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-neutral-200 mb-2'>To Date</label>
                                    <input type="date"  className='w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors '/>    
                                </div>

                            </div>



                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium text-neutral-200 mb-2'>Leave Time</label>
                                    <input type="time"/>
                                </div>
                                <div>

                                </div>
                            </div>


                        </form>





                    </div>















                    <div className='border border-neutral-800 bg-neutral-900 rounded-lg p-6'>

                    </div>


                </div>



            </div>
        </div>
    )
}
