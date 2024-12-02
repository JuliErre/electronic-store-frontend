"use client";
import { ROUTES } from "@/utils/constants";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const hiddenRoutes = [ROUTES.login, ROUTES.register];
    const showHeader = !hiddenRoutes.includes(pathname);
    return (
        <footer className="bg-black mt-5">
            {showHeader ? (
                <>
                    <div className="mx-auto w-full max-w-7xl px-6 py-12">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <div>
                                <h5 className="text-lg font-semibold text-white">
                                    About Us
                                </h5>
                                <div className="mt-4 flex flex-col gap-2">
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Company
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Contact
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Careers
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-semibold text-white">
                                    Resources
                                </h5>
                                <div className="mt-4 flex flex-col gap-2">
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Documentation
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Blog
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Support
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-semibold text-white">
                                    Legal
                                </h5>
                                <div className="mt-4 flex flex-col gap-2">
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Terms of Service
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-semibold text-white">
                                    Social
                                </h5>
                                <div className="mt-4 flex flex-col gap-2">
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Twitter
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        Discord
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-default-400 hover:text-default-200">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-default-800 pt-8">
                            <p className="text-default-400">
                                © 2024 Electronic Store. All rights reserved.
                            </p>
                        </div>
                    </div>
                </>
            ) : null}
        </footer>
    );
};

export default Footer;
