import Navbar from "@/components/header/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-1  bg-zinc-300 h-full">
            <Navbar />
            {children}
        </div>
    );
}
