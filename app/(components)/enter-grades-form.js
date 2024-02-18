"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MessageBox from "@/app/(components)/message-box";

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
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

    const router = useRouter();

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

    const handleAddCourse = async (e) => {
        e.preventDefault();

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

        try {
            const form = {
                gradeCourseName: selectedCourse,
                gradeMark: selectedGrade,
                gradeLevelofStudy: selectedLevel,
            };

            const response = await fetch("/api/grades/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                setError("Failed to add grade");
                setShowError(true);
                return;
            }

            const result = await response.json();

            if (result.id) {
                router.refresh();
                return;
            } else {
                setError("Failed to add grade");
            }
        } catch (err) {
            setError("Failed to add grade");
        }

        setShowError(true);
    };

    const handleRemoveEntry = (id) => {
        const element = document.getElementById(`${id}`);
        const removeButton = element.querySelector("#remove-button");
        const yesButton = element.querySelector("#remove-yes-button");
        const noButton = element.querySelector("#remove-no-button");

        removeButton.className = removeButton.className.replace(
            "bg-red-500",
            "bg-gray-500"
        );
        removeButton.textContent = "Are you sure?";

        yesButton.className = yesButton.className.replace("hidden", "block");
        noButton.className = noButton.className.replace("hidden", "block");

        removeButton.disabled = true;
    };

    const handleRemoveEntryYes = async (id) => {
        try {
            const response = await fetch("/api/grades/remove", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(id),
            });

            if (!response.ok) {
                setError("Failed to remove grade 1");
                setShowError(true);
                return;
            } else {
                router.refresh();
                return;
            }
        } catch (err) {
            setError("Failed to remove grade 3");
        }

        setShowError(true);
    };

    const handleRemoveEntryNo = (id) => {
        const element = document.getElementById(`${id}`);
        const removeButton = element.querySelector("#remove-button");
        const yesButton = element.querySelector("#remove-yes-button");
        const noButton = element.querySelector("#remove-no-button");

        removeButton.className = removeButton.className.replace(
            "bg-gray-500",
            "bg-red-500"
        );
        removeButton.textContent = "Remove";

        yesButton.className = yesButton.className.replace("block", "hidden");
        noButton.className = noButton.className.replace("block", "hidden");

        removeButton.disabled = false;
    };

    return (
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-2xl">
            {showError ? (
                <MessageBox
                    title="Error"
                    message={error}
                    onClose={() => setShowError(false)}
                />
            ) : (
                <></>
            )}

            <div className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-2xl flex flex-col">
                <div className="p-8 text-white flex flex-row gap-6 relative">
                    <div
                        className="group flex-grow min-w-60 bg-white rounded-xl text-black p-2 ring-2 ring-gray-500 flex hover:ring-indigo-600"
                        onClick={handleDropdown}
                    >
                        <h1 className="text-2xl font-bold">
                            Add Course &rarr;
                        </h1>
                        <div className="flex-grow"></div>
                        <button
                            className="group flex-none px-4 text-black ring-2 ring-gray-500 rounded-xl font-bold py-2 hover:opacity-75"
                            onClick={handleDropdown}
                        >
                            <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
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
                        className={`absolute top-20 right-8 z-50 p-1 w-2/3 lg:w-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl ${
                            dropdownOpen ? "" : "hidden"
                        }`}
                    >
                        <div className="bg-white w-full h-full flex flex-col space-y-8 p-2 rounded-2xl">
                            <div className="flex flex-col items-center space-y-2">
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
                                    {fieldsAndCoursesData.map(
                                        (field, index) => (
                                            <optgroup
                                                key={index}
                                                label={field.field}
                                            >
                                                {field.courses.map(
                                                    (course, index) => (
                                                        <option
                                                            key={index}
                                                            value={course}
                                                        >
                                                            {course}
                                                        </option>
                                                    )
                                                )}
                                            </optgroup>
                                        )
                                    )}
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
                                        <optgroup
                                            key={index}
                                            label={grade.grade}
                                        >
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
                                        <optgroup
                                            key={index}
                                            label={level.level}
                                        >
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
                </div>
                <div className="p-8 text-white flex flex-row gap-6"></div>
                <div className="text-white">
                    <h1
                        className={`px-8 text-2xl font-bold mb-4 ${
                            userGrades.items.length > 0 ? "" : "pb-8"
                        }`}
                    >
                        {userGrades.items.length > 0
                            ? "Course's & Grade's"
                            : "No Course's & Grade's Added. Click Add Course to Add One."}
                    </h1>
                    {userGrades.items.length > 0 && (
                        <div className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl">
                            <div className="p-8 text-white flex flex-col space-y-4">
                                {userGrades.items.map((entry, index) => (
                                    <div
                                        id={entry.id}
                                        key={entry.id}
                                        className="bg-gray-500 rounded-xl p-0.5 hover:bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 ease-in-out relative"
                                    >
                                        <div className="p-3 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl">
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex flex-row space-x-4">
                                                    <div>Course Name:</div>
                                                    <div>
                                                        {entry.gradeCourseName}
                                                    </div>
                                                </div>
                                                <div className="flex flex-row space-x-4">
                                                    <div>Grade Mark:</div>
                                                    <div>{entry.gradeMark}</div>
                                                </div>
                                                <div className="flex flex-row space-x-4">
                                                    <div>Level of Study:</div>
                                                    <div>
                                                        {
                                                            entry.gradeLevelofStudy
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-2 lg:space-y-0 pt-2">
                                                    <button
                                                        id="remove-button"
                                                        className="px-4 rounded-xl text-white font-bold py-2 hover:opacity-75 transition-opacity duration-500 ease-in-out w-36 bg-red-500"
                                                        onClick={() =>
                                                            handleRemoveEntry(
                                                                entry.id
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                    <button
                                                        id="remove-yes-button"
                                                        className="px-4 rounded-xl text-white font-bold py-2 hover:opacity-75 transition-opacity duration-500 ease-in-out w-36 bg-green-500 hidden"
                                                        onClick={() =>
                                                            handleRemoveEntryYes(
                                                                entry.id
                                                            )
                                                        }
                                                    >
                                                        Yes
                                                    </button>
                                                    <button
                                                        id="remove-no-button"
                                                        className="px-4 rounded-xl text-white font-bold py-2 hover:opacity-75 transition-opacity duration-500 ease-in-out w-36 bg-red-500 hidden"
                                                        onClick={() =>
                                                            handleRemoveEntryNo(
                                                                entry.id
                                                            )
                                                        }
                                                    >
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 lg:top-2 right-3 lg:right-2 rounded-full flex bg-transparent p-2 w-10 h-10 justify-center items-center border-2 border-gray-400">
                                                <div className="font-bold text-xl">
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
