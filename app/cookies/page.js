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
                        <h1 className="text-left text-4xl">Cookies Policy</h1>
                        <ul className="list-decimal list-inside leading-loose tracking-wide text-justify">
                            <li>
                                Introduction
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        This Cookie Policy explains how
                                        GradePath ("we", "us", or "our") uses
                                        cookies on our website and web
                                        application (collectively, the
                                        "Service"). By using the Service, you
                                        consent to the use of cookies.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                What are Cookies?
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        Cookies are small pieces of data stored
                                        on your device (computer or mobile
                                        device). They are used to enhance your
                                        browsing experience by remembering your
                                        preferences and providing personalized
                                        content. Cookies can be temporary
                                        (session cookies) or permanent
                                        (persistent cookies).
                                    </li>
                                </ul>
                            </li>
                            <li>
                                How we use cookies
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        Authentication: Cookies are essential
                                        for authenticating users and ensuring
                                        the security of our web application.
                                        Without these cookies, you may not be
                                        able to access certain features of the
                                        Service.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Your choices regarding cookies
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        You can choose to accept or decline
                                        cookies through the website or your web
                                        browser settings. However, please note
                                        that disabling cookies may affect the
                                        functionality of the Service.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Changes to this cookie policy
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        We may update our Cookie Policy from
                                        time to time. Any changes will be posted
                                        on this page with the updated date. We
                                        encourage you to review this Cookie
                                        Policy periodically for any changes.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Contact Us
                                <ul className="ml-7 lg:ml-14 list-decimal list-outside">
                                    <li>
                                        If you have any questions about our
                                        Cookie Policy, please contact us at
                                        legal@gradepath.com.
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
