import React from 'react'
import HomeIcon from '../assets/components/Navbar/HomeIcon'


const Analysis = () => {
    return (
        <div className="mx-auto shadow-lg overflow-hidden">

            {/* <!-- Header --> */}
            <div class="flex items-center justify-between px-6 py-4 border-b">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                    <HomeIcon />
                    <span class="font-medium text-gray-900">DevOps Engineer</span>
                    <span class="text-gray-400">›</span>
                    <span>Resume Review</span>
                </div>

                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" className=" cursor-pointer w-14 h-8 rounded-full" />

            </div>

            {/* <!-- Main Content --> */}
            <div class="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

                {/* <!-- Resume Preview --> */}
                <div class="lg:col-span-1 bg-[url('./../public/Resume-BG.svg')]! bg-cover from-indigo-100 to-pink-100 rounded-xl p-4">
                    <div class="bg-white rounded-xl p-4 shadow">
                        <h2 class="font-semibold text-gray-900">Daniel Destefanis</h2>
                        <p class="text-xs text-gray-500 mb-4">555-321-1234 · danieldesign</p>

                        <div class="space-y-4 text-sm">
                            <div>
                                <h3 class="font-semibold">Senior Product Designer – Discord</h3>
                                <p class="text-gray-500 text-xs">Jan 2020 – Present</p>
                                <ul class="list-disc ml-4 text-gray-600 text-xs">
                                    <li>Led design for large-scale systems</li>
                                    <li>Collaborated cross-functionally</li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="font-semibold">Product Designer – SteelSeries</h3>
                                <p class="text-gray-500 text-xs">Oct 2018 – Mar 2020</p>
                                <ul class="list-disc ml-4 text-gray-600 text-xs">
                                    <li>Designed new interfaces</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Review Panel --> */}
                <div class="lg:col-span-2 space-y-6">

                    {/* <!-- Score Card --> */}
                    <div class="bg-white rounded-xl shadow p-6">
                        <h2 class="text-lg font-semibold mb-4">Resume Review</h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* <!-- Score --> */}
                            <div class="flex items-center gap-4">
                                <div class="relative w-20 h-20">
                                    <div class="absolute inset-0 rounded-full border-8 border-pink-400"></div>
                                    <div class="absolute inset-0 flex items-center justify-center font-bold">
                                        88/100
                                    </div>
                                </div>
                                <div>
                                    <p class="font-semibold">Your Resume Score</p>
                                    <p class="text-xs text-gray-500">Calculated from factors below</p>
                                </div>
                            </div>

                            {/* <!-- Breakdown --> */}
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Tone & Style</span>
                                    <span class="text-orange-500">55/100</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Content</span>
                                    <span class="text-red-500">25/100</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Structure</span>
                                    <span class="text-green-500">70/100</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Skills</span>
                                    <span class="text-red-500">32/100</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- ATS Score --> */}
                    <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                                ATS Score · 88/100
                            </span>
                        </div>
                        <ul class="text-sm text-gray-700 space-y-1">
                            <li>✔ Clear formatting</li>
                            <li>✔ Keywords relevant to the job</li>
                            <li>✔ No skills section detected</li>
                        </ul>
                    </div>

                    {/* <!-- Expandable Sections --> */}
                    <div class="space-y-3">
                        <details class="bg-white rounded-xl shadow p-4">
                            <summary class="font-semibold cursor-pointer">Tone & Style</summary>
                            <p class="text-sm text-gray-600 mt-2">Improve clarity and consistency.</p>
                        </details>

                        <details class="bg-white rounded-xl shadow p-4">
                            <summary class="font-semibold cursor-pointer">Content</summary>
                            <p class="text-sm text-gray-600 mt-2">Add measurable achievements.</p>
                        </details>

                        <details class="bg-white rounded-xl shadow p-4">
                            <summary class="font-semibold cursor-pointer">Structure</summary>
                            <p class="text-sm text-gray-600 mt-2">Good section spacing.</p>
                        </details>

                        <details class="bg-white rounded-xl shadow p-4">
                            <summary class="font-semibold cursor-pointer">Skills</summary>
                            <p class="text-sm text-gray-600 mt-2">Add a dedicated skills section.</p>
                        </details>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Analysis