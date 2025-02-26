"use client";

import React from "react";

export default function ServiceCenterDetails() {
    return (
        <div className="container mx-auto p-6 bg-blue-50 text-blue-900">
            <h1 className="text-4xl font-bold text-teal-700 mb-6">Service Center Details</h1>
            
            <p className="text-lg text-gray-700 mb-4">
                Below are the details of our company-owned service centers and authorized workshops. 
                Find the nearest branch for service and support.
            </p>

            {/* Company-Owned Service Centers */}
            <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Company-Owned Service Centers</h2>
            <table className="w-full table-auto border border-gray-300 bg-white shadow-md rounded-lg">
                <thead className="bg-blue-200 text-blue-900">
                    <tr>
                        <th className="border px-4 py-2">S.No</th>
                        <th className="border px-4 py-2">Branch</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Contact No</th>
                        <th className="border px-4 py-2">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { id: 1, branch: "ISB", name: "Imran", contact: "0300-5056354", address: "H# 845, near Holy Family Road, Block F Satellite Town, Rawalpindi" },
                        { id: 2, branch: "MUX", name: "Mazher", contact: "0306-6849255", address: "Shop # 383,384,385/A Shams Abad Colony Block A Opposite Jamia Masjid Mehria Multan" },
                        { id: 3, branch: "LHR", name: "Usman", contact: "0324-4485945", address: "Saeed apartments, 33/1 behind Queens Centre, Lahore" },
                        { id: 4, branch: "FSD", name: "Farhan", contact: "0322-6069657", address: "House 178/1, Block A, Opposite Sadiqiya Masjid, Peoples Colony Num 01, Faisalabad." },
                        { id: 5, branch: "PSW", name: "Babar", contact: "0313-9509875", address: "Hisense service center Muslim town 3 northern bypass Peshawar" },
                        { id: 6, branch: "SKT", name: "Zaigham", contact: "0336-6102030", address: "Taj pura Street Dara Araian Near Multi Cable Office Sialkot" },
                        { id: 7, branch: "KHI", name: "Faizan", contact: "021-34380492", address: "Plot- A/34, Block- 7/8, 4th Floor Hafeez Centre, KCHS Off, Shahrah-e-Faisal, Karachi." },
                    ].map((center) => (
                        <tr key={center.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2 text-center">{center.id}</td>
                            <td className="border px-4 py-2">{center.branch}</td>
                            <td className="border px-4 py-2">{center.name}</td>
                            <td className="border px-4 py-2">{center.contact}</td>
                            <td className="border px-4 py-2">{center.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Authorized Workshops */}
            <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">Authorized Workshops</h2>
            <table className="w-full table-auto border border-gray-300 bg-white shadow-md rounded-lg">
                <thead className="bg-blue-200 text-blue-900">
                    <tr><th className="border px-4 py-2">S.No</th>
                        <th className="border px-4 py-2">Workshop Name</th>
                        <th className="border px-4 py-2">Branch</th>
                        <th className="border px-4 py-2">Contact Person</th>
                        <th className="border px-4 py-2">Contact No</th>
                        <th className="border px-4 py-2">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { id: 1,workshop: "Friends Electronics", branch: "Kamra", person: "Mr. Ahmad", contact: "0301-6792380", address: "Dubai Plaza, Opposite Gate No 3 KAMRA Cantt" },
                        { id: 2,workshop: "Bilal Electronics", branch: "Sahiwal", person: "Aqeel Gujjar", contact: "0347-394114", address: "Liaqat Choke Siddique Tower, Baba Fareed Sound Gali Sahiwal" },
                        { id: 3,workshop: "Digital Electronics", branch: "Quetta", person: "Muhibullah", contact: "0319-7382870", address: "FF-12 Spinzer Plaza Near Paradise Cinema, Angle Road, Quetta" },
                        { id: 4,workshop: "Atif Electronics", branch: "Hyderabad", person: "M. Atif", contact: "0333-2699157", address: "Shop no 4 Nasim Center 2, Ground Floor Foujdari Road Near City Police Station, Hyderabad" },
                        { id: 5,workshop: "China UPS Repairing Service", branch: "Sukkur", person: "Sabir", contact: "0316-3744823", address: "Ghanta Ghar Charee, Sukkur" },
                    ].map((workshop, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border px-4 py-2 text-center">{workshop.id}</td>
                            <td className="border px-4 py-2">{workshop.workshop}</td>
                            <td className="border px-4 py-2">{workshop.branch}</td>
                            <td className="border px-4 py-2">{workshop.person}</td>
                            <td className="border px-4 py-2">{workshop.contact}</td>
                            <td className="border px-4 py-2">{workshop.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
