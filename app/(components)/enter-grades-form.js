"use client";

import { useState } from "react";

export default function EnterGradesForm({ userGrades }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [gradeCourseName, setGradeCourseName] = useState("");
    const [gradeMark, setGradeMark] = useState("");
    const [gradeLevelofStudy, setGradeLevelofStudy] = useState("");

    const handleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="w-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl mb-8">
            <form className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl">
                <div className="p-8 text-white flex flex-row gap-6">
                    <div
                        className="flex-grow min-w-60 bg-white rounded-xl text-black p-2 ring-2 ring-gray-500 flex"
                    >
                        <h1 className="text-2xl font-bold">Course Name</h1>
                        <div className="flex-grow"></div>
                        <button className="flex-none px-4 text-black ring-2 ring-gray-500 rounded-xl font-bold py-2 hover:opacity-75" onClick={handleDropdown}>
                            <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </button>

                        <div className={`absolute top-20 right-1/2 w-96 h-96 bg-red-500 ${dropdownOpen ? '' : 'hidden'}`}>

                        </div>
                    </div>
                    <button className="flex-none px-4 bg-green-500 rounded-xl text-white font-bold py-2 hover:opacity-75">
                        Add Course
                    </button>
                    <button className="flex-none px-4 bg-red-500 rounded-xl text-white font-bold py-2 hover:opacity-75">
                        Remove Course
                    </button>
                </div>
            </form>
        </div>
    );
}
