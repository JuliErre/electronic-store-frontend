"use client";
import Navbar from "./Navbar";
import Sections from "./Sections";

const Header = () => {
    // const pathname = usePathname();
    // const hiddenRoutes = [ROUTES.login, ROUTES.register];
    // const showHeader = !hiddenRoutes.includes(pathname);
    const showHeader = true;
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
