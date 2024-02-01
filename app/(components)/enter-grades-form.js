"use client";

import { useState } from "react";

export default function EnterGradesForm({
    userGrades,
    levelOfStudyData,
    gradeTypeData,
}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [gradeCourseName, setGradeCourseName] = useState("");
    const [gradeMark, setGradeMark] = useState("");
    const [gradeLevelofStudy, setGradeLevelofStudy] = useState("");
    const [gradeGradeType, setGradeGradeType] = useState("");

    const handleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="space-y-1 w-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl mb-8">
            <div className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl">
                <div className="p-8 text-white flex flex-row gap-6">
                    <div className="flex-grow min-w-60 bg-white rounded-xl text-black p-2 ring-2 ring-gray-500 flex">
                        <h1 className="text-2xl font-bold">Select</h1>
                        <div className="flex-grow"></div>
                        <button
                            className="flex-none px-4 text-black ring-2 ring-gray-500 rounded-xl font-bold py-2 hover:opacity-75"
                            onClick={handleDropdown}
                        >
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

                        <div
                            className={`items-center absolute top-20 right-1/2 z-50 flex flex-col p-4 space-y-8 w-1/2 bg-white ring-4 ring-gradient-to-r from-green-400 to-blue-500 ring-thickness ${
                                dropdownOpen ? "" : "hidden"
                            }`}
                        >
                            <div class="w-1/2 mt-2 space-y-3">
                                <label
                                    for="course2"
                                    class="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Grade
                                </label>
                                <div class="mt-2">
                                    <select
                                        id="course-grade"
                                        name="course-grade"
                                        autocomplete="course-grade"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:max-w-xs sm:text-md sm:leading-6"
                                    >
                                        {gradeTypeData.map((grade, index) => {
                                            return (
                                                <optgroup
                                                    id={index}
                                                    label={grade.grade}
                                                >
                                                    {grade.grades.map(
                                                        (grade, index) => {
                                                            return (
                                                                <option
                                                                    id={index}
                                                                >
                                                                    {grade}
                                                                </option>
                                                            );
                                                        }
                                                    )}
                                                </optgroup>
                                            );
                                        })}
                                    </select>
                                </div>

                                <label
                                    for="course3"
                                    class="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Level of Study
                                </label>
                                <div class="mt-2">
                                    <select
                                        id="level-of-study"
                                        name="level-of-study"
                                        autocomplete="level-of-study"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:max-w-xs sm:text-md sm:leading-6"
                                    >
                                        {levelOfStudyData.map(
                                            (level, index) => {
                                                return (
                                                    <optgroup
                                                        id={index}
                                                        label={level.level}
                                                    >
                                                        {level.levels.map(
                                                            (level, index) => {
                                                                return (
                                                                    <option
                                                                        id={index}
                                                                    >
                                                                        {level}
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </optgroup>
                                                );
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="flex-none px-4 bg-green-500 rounded-xl text-white font-bold py-2 hover:opacity-75">
                        Add Course
                    </button>
                    <button className="flex-none px-4 bg-red-500 rounded-xl text-white font-bold py-2 hover:opacity-75">
                        Remove Course
                    </button>
                </div>
            </div>
            <div className="p-8 text-white flex flex-row gap-6">
                <h1 className="text-2xl font-bold">Course's & Grade's</h1>
            </div>
            <form className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl">
                <div className="p-8 text-white flex flex-row gap-6">
                    <h1 className="text-2xl font-bold">
                        Awaiting new entry...
                    </h1>
                </div>
            </form>
        </div>
    );
}
