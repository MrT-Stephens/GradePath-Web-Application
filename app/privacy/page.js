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
                    <div className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-4 lg:p-10 w-full flex flex-col space-y-4">
                        <h1 className="text-left text-4xl">Privacy Policy</h1>
                        <ul className="list-decimal list-inside leading-loose tracking-wide text-justify">
                            <li>
                                Privacy policy for GradePath
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        GradePath respects the privacy of its
                                        users. This Privacy Policy explains how
                                        we collect, use, disclose, and safeguard
                                        your information when you use our web
                                        application. Please read this Privacy
                                        Policy carefully. If you do not agree
                                        with the terms of this Privacy Policy,
                                        please do not access the application.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Collection of Information
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        We may collect personal information from
                                        you when you register an account with
                                        our web application. The personal
                                        information we collect may include:
                                        Name, Email address, Date of birth,
                                        Address, or grades entered by the user.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Use of Information
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        We may use the information we collect
                                        from you to: Create and manage your
                                        account, provide you with our services,
                                        personalize your experience, communicate
                                        with you about updates or changes to our
                                        services, analyse usage trends and
                                        improve our services, or comply with
                                        legal obligations.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Disclosure of Information
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        We may disclose your personal
                                        information: To comply with legal
                                        obligations or with your consent.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Data Security
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        We take reasonable measures to protect
                                        your personal information from
                                        unauthorized access, use, or disclosure.
                                        However, please be aware that no method
                                        of transmission over the internet or
                                        method of electronic storage is 100%
                                        secure, and we cannot guarantee absolute
                                        security.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Your Rights
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        You have the right to: Access, update,
                                        or delete your personal information,
                                        object to the processing of your
                                        personal information, or withdraw your
                                        consent at any time, where applicable.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Changes to this privacy policy
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        We may update our Privacy Policy from
                                        time to time. We will notify you of any
                                        changes by posting the new Privacy
                                        Policy on this page. You are advised to
                                        review this Privacy Policy periodically
                                        for any changes.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Contact Us
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        If you have any questions or concerns
                                        about our Privacy Policy, please contact
                                        us at legal@gradepath.com.
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
