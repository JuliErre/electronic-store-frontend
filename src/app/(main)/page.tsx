import Card from "@/components/products/Card";
import { ROUTES } from "@/utils/constants";
import { auth, signOut } from "../../../auth";

export default async function Home() {
    const session = await auth();
    console.log(session);

    return (
        <div className="h-full w-full flex-1 flex items-center justify-center flex-col  font-[family-name:var(--font-geist-sans)] pt-20">
            {/* <h1>Welcome {session?.user?.email}</h1>
            <TestComponent /> */}
            <form
                action={async () => {
                    "use server";
                    await signOut({
                        redirectTo: ROUTES.login,
                    });
                }}>
                {/* <button type="submit" className="bg-blue-400">
                    Sign Out
                </button> */}
            </form>
            <Card />
        </div>
    );
}
