"use client";

import React from "react";

export default function ServiceCenterDetails() {
    return (
        <div className="container mx-auto p-6 bg-blue-50 text-blue-900">
            <h1 className="text-3xl font-bold text-teal-700">Service Center Details</h1>
            <p className="mt-4 text-gray-700">
                Here are the details of our service centers. You can find the location and contact information for each branch.
            </p>
            <table className="min-w-full table-auto border-collapse text-left">
                    <thead>
                        <tr>
                            <th className="border-b px-4 py-2">S.No</th>
                            <th className="border-b px-4 py-2">Branch</th>
                            <th className="border-b px-4 py-2">Name</th>
                            <th className="border-b px-4 py-2">Contact No</th>
                            <th className="border-b px-4 py-2">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b px-4 py-2">1</td>
                            <td className="border-b px-4 py-2">ISB</td>
                            <td className="border-b px-4 py-2">Imran</td>
                            <td className="border-b px-4 py-2">0300-5056354</td>
                            <td className="border-b px-4 py-2">H# 845, near Holy Family Road, Block F Satellite Town, Rawalpindi</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">2</td>
                            <td className="border-b px-4 py-2">MUX</td>
                            <td className="border-b px-4 py-2">Mazher</td>
                            <td className="border-b px-4 py-2">0306-6849255</td>
                            <td className="border-b px-4 py-2">Shop # 383,384,385/A Shams Abad Colony Block A Opposite Jamia Masjid Mehria Multan</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">3</td>
                            <td className="border-b px-4 py-2">LHR</td>
                            <td className="border-b px-4 py-2">Usman</td>
                            <td className="border-b px-4 py-2">0324-4485945</td>
                            <td className="border-b px-4 py-2">Saeed apartments, 33/1 behind Queens Centre, Lahore</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">4</td>
                            <td className="border-b px-4 py-2">FSD</td>
                            <td className="border-b px-4 py-2">Farhan</td>
                            <td className="border-b px-4 py-2">0322-6069657</td>
                            <td className="border-b px-4 py-2">House 178/1, Block A, Opposite Sadiqiya Masjid, Peoples Colony Num 01, Faisalabad.</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">5</td>
                            <td className="border-b px-4 py-2">PSW</td>
                            <td className="border-b px-4 py-2">Babar</td>
                            <td className="border-b px-4 py-2">0313-9509875</td>
                            <td className="border-b px-4 py-2">Hisense service center Muslim town 3 northern bypass Peshawar</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">6</td>
                            <td className="border-b px-4 py-2">SKT</td>
                            <td className="border-b px-4 py-2">Zaigham</td>
                            <td className="border-b px-4 py-2">0336-6102030</td>
                            <td className="border-b px-4 py-2">Taj pura Street Dara Araian Near Multi Cable Office Sialkot</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">7</td>
                            <td className="border-b px-4 py-2">KHI</td>
                            <td className="border-b px-4 py-2">Faizan</td>
                            <td className="border-b px-4 py-2">021-34380492</td>
                            <td className="border-b px-4 py-2">Plot- A/34, Block- 7/8, 4th Floor Hafeez Centre, KCHS Off, Shahrah-e-Faisal, Karachi.</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
}
