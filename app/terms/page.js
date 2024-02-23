import { NavBar, NavBarItem } from "@/app/(components)/navigation-bar";

export default function Page() {
    return (
        <div>
            <NavBar title="GradePath">
                <NavBarItem href="/#home" text="Home" />
                <NavBarItem href="/#about" text="About" />
                <NavBarItem href="/#contact" text="Contact" />
            </NavBar>

            <div className="h-20 w-full"></div>

            <main className="flex flex-col min-h-screen items-center justify-center p-5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl lg:w-2/3">
                    <div className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-10 w-full flex flex-col space-y-4">
                        <h1 className="text-left text-4xl">Terms of Service</h1>
                        <ul className="list-decimal list-inside text-left">
                            <li>
                                Acceptance of Terms
                                <ul className="ml-14 list-decimal list-outside text-left">
                                    <li>
                                        Welcome to GradePath ("the Website"). By
                                        accessing or using the Website,
                                        including but not limited to creating an
                                        account, browsing, or utilizing our
                                        services, you agree to be bound by these
                                        User Terms and Conditions ("Terms"). If
                                        you do not agree to all of these Terms,
                                        you may not access or use the Website.
                                    </li>
                                    <li>
                                        The Website is owned and operated by
                                        GradePath LTD, and these Terms
                                        constitute a legally binding agreement
                                        between you and GradePath LTD.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                User Accounts
                                <ul className="ml-14 list-decimal list-outside text-left">
                                    <li>
                                        To access certain features of the
                                        Website, you are required to create a
                                        user account. When creating your
                                        account, you agree to provide accurate,
                                        current, and complete information about
                                        yourself as prompted by the registration
                                        form.
                                    </li>
                                    <li>
                                        You are responsible for maintaining the
                                        confidentiality of your account
                                        credentials, including your username and
                                        password. You agree to notify us
                                        immediately of any unauthorized use of
                                        your account or any other breach of
                                        security.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Collection and Use of User Data
                                <ul className="ml-14 list-decimal list-outside text-left">
                                    <li>
                                        By using the Website, you consent to the
                                        collection, storage, and processing of
                                        your personal data as described in our
                                        Privacy Policy.
                                    </li>
                                    <li>
                                        The data we collect from users with
                                        accounts may include but is not limited
                                        to: username, email, user's full name,
                                        user's date of birth, user's full
                                        address, user's inputted courses, user's
                                        grades for the inputted courses, and the
                                        level of study of the inputted courses.
                                    </li>
                                    <li>
                                        We may use the collected data to provide
                                        personalized course recommendations,
                                        improve our services, communicate with
                                        users, and for other legitimate purposes
                                        outlined in our Privacy Policy.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                User Responsibilities
                                <ul className="ml-14 list-decimal list-outside text-left">
                                    <li>
                                        You agree to use the Website only for
                                        lawful purposes and in accordance with
                                        these Terms. You shall not use the
                                        Website in any way that violates any
                                        applicable laws or regulations.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
