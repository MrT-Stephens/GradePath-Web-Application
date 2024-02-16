"use client";

import { useState } from "react";

export default function EnterGradesForm({
    userGrades,
    levelOfStudyData,
    gradeTypeData,
    fieldsAndCoursesData,
}) {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleGradeChange = (event) => {
        setSelectedGrade(event.target.value);
    };

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };

    const handleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    const handleAddCourse = () => {
        if (
            selectedCourse !== "" &&
            selectedGrade !== "" &&
            selectedLevel !== ""
        ) {
            setSelectedCourse(""); // Clear selected course
            setSelectedGrade(""); // Clear selected grade
            setSelectedLevel(""); // Clear selected level
            setDropdownOpen(false); // Close the dropdown
        }
    };

    const handleRemoveEntry = (id) => {
        
    };

    return (
        <div className="space-y-4 w-1/2 border-2 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] p-1 rounded-xl mb-8">
            <div className="p-8 text-white flex flex-row gap-6 relative">
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
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`absolute top-full right-0 z-50 flex flex-col p-4 space-y-8 w-1/2 bg-white ring-4 ring-gradient-to-r from-green-400 to-blue-500 ring-thickness ${
                        dropdownOpen ? "" : "hidden"
                    }`}
                >
                    <div className="flex flex-col items-center">
                        <label
                            htmlFor="course"
                            className="block text-lg font-medium leading-6 text-gray-900"
                        >
                            Course
                        </label>
                        <select
                            id="course"
                            name="course"
                            value={selectedCourse}
                            onChange={handleCourseChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:max-w-xs sm:text-md sm:leading-6"
                        >
                            <option value="">Select Course</option>
                            {fieldsAndCoursesData.map((field, index) => (
                                <optgroup key={index} label={field.field}>
                                    {field.courses.map((course, index) => (
                                        <option key={index} value={course}>
                                            {course}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>

                        <label
                            htmlFor="grade"
                            className="block text-lg font-medium leading-6 text-gray-900"
                        >
                            Grade
                        </label>
                        <select
                            id="grade"
                            name="grade"
                            value={selectedGrade}
                            onChange={handleGradeChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:max-w-xs sm:text-md sm:leading-6"
                        >
                            <option value="">Select Grade</option>
                            {gradeTypeData.map((grade, index) => (
                                <optgroup key={index} label={grade.grade}>
                                    {grade.grades.map((g, index) => (
                                        <option key={index} value={g}>
                                            {g}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>

                        <label
                            htmlFor="level"
                            className="block text-lg font-medium leading-6 text-gray-900"
                        >
                            Level of Study
                        </label>
                        <select
                            id="level"
                            name="level"
                            value={selectedLevel}
                            onChange={handleLevelChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:max-w-xs sm:text-md sm:leading-6"
                        >
                            <option value="">Select Level</option>
                            {levelOfStudyData.map((level, index) => (
                                <optgroup key={index} label={level.level}>
                                    {level.levels.map((l, index) => (
                                        <option key={index} value={l}>
                                            {l}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <button
                        className="bg-green-500 rounded-xl text-white font-bold py-2 px-4 hover:opacity-75 self-center"
                        onClick={handleAddCourse}
                    >
                        Add Course
                    </button>
                </div>
            </div>
            <div className="p-8 text-white flex flex-row gap-6"></div>
            {userGrades.items.length > 0 && (
                <div className="p-8 text-white">
                    <h1 className="text-2xl font-bold mb-4">
                        Course's & Grade's
                    </h1>
                    <div className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl">
                        <div className="p-8 text-white">
                            {userGrades.items.map((entry) => (
                                <div
                                    key={entry.id}
                                    className="mb-4 border-2 border-gray-400 rounded-xl p-4"
                                >
                                    <div className="mb-2">
                                        {entry.gradeCourseName}
                                    </div>
                                    <div className="mb-2">
                                        {entry.gradeMark}
                                    </div>
                                    <div className="mb-4">
                                        {entry.gradeLevelofStudy}
                                    </div>
                                    <button
                                        className="px-4 bg-red-500 rounded-xl text-white font-bold py-2 hover:opacity-75"
                                        onClick={() =>
                                            handleRemoveEntry(entry.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
