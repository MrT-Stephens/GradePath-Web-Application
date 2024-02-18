import db from "../../(db)/index";
import { cookies } from "next/headers";
import EnterGradesForm from "@/app/(components)/enter-grades-form";
import LevelOfStudy from "@/app/(data)/level-of-study";
import GradeType from "@/app/(data)/grade";
import FieldsAndCourses from "@/app/(data)/fields-and-courses";
import { NavBar, NavBarItem } from "@/app/(components)/navigation-bar";

const GetUserName = async () => {
    const user = await db.getUser(cookies());
    return user?.userFName;
};

const GetUserGrades = async () => {
    const userGrades = await db.getUserGrades(cookies());
    return userGrades;
};

export default async function Page() {
    const userName = await GetUserName();
    const userGrades = await GetUserGrades();

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar title={`Hello, ${userName}!`}>
                <NavBarItem href="/#home" text="Home" />
                <NavBarItem href="/#about" text="About" />
                <NavBarItem href="/#contact" text="Contact" />
                <NavBarItem href="/user/main/account" text="Account Settings" />
            </NavBar>

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center px-5 pb-10 pt-24">
                <EnterGradesForm
                    levelOfStudyData={LevelOfStudy}
                    gradeTypeData={GradeType}
                    fieldsAndCoursesData={FieldsAndCourses}
                    userGrades={userGrades}
                />
            </main>
        </div>
    );
}
