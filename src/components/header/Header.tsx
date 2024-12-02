"use client";
import { ROUTES } from "@/utils/constants";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sections from "./Sections";

const Header = () => {
    const pathname = usePathname();
    const hiddenRoutes = [ROUTES.login, ROUTES.register];
    const showHeader = !hiddenRoutes.includes(pathname);
    return (
        <header>
            {showHeader ? (
                <>
                    <Navbar />
                    <div className="pt-20">
                        <Sections />
                    </div>
                </>
            ) : null}
        </header>
    );
};

export default Header;
