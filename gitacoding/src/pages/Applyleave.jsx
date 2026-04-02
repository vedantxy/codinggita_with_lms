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
                                    <input type="date" className='w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors ' />
                                </div>

                            </div>



                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium text-neutral-200 mb-2'>Leave Time</label>
                                    <input type="time" className='w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors ' />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-neutral-200 mb-2'>return Time</label>
                                    <input type="time" className='w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors ' />
                                </div>
                            </div>



                            <div>

                                <label className='block text-sm font-medium text-neutral-200 mb-2'>Additional Remarks (Optional)</label>
                                <textarea name="remark" placeholder="Any additional information for your mentor or admin" class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 min-h-[90px] transition-colors "></textarea>

                            </div>

                            <button type='submit' disabled className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors">

                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                                </svg>
                                Submit Leave Application
                            </button>


                        </form>





                    </div>






                    <div className='border border-neutral-800 bg-neutral-900 rounded-lg p-6'>

                        <div className='flex items-center gap-3 mb-6'>

                            <div className='h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center'>

                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>


                                </svg>

                            </div>

                            <div>
                                <h2 className='font-semibold text-xl'>My Leave Requests</h2>
                                <p className='text-neutral-400 text-sm'>Track the status of your applications</p>
                            </div>

                        </div>



                        <div className='space-y-4'>
                            <div className='text-center py-12'>


                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="w-12 h-12 text-neutral-600 mx-auto mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
                                </svg>

                                <div className='text-neutral-400'>No leave requests yet</div>
                                <div className='text-sm text-neutral-500 mt-0.5'>Your submitted applications will appear here</div>

                            </div>

                        </div>

                    </div>


                </div>



            </div>
        </div>
    )
}
