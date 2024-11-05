import CardList from "@/components/products/CardList";
import { handleGetProducts } from "@/useCases/products/products";
import { ROUTES } from "@/utils/constants";
import { auth, signOut } from "../../auth";

const mockData = [
    {
        id: 1,
        name: "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        price: 632567,
        image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41330_Placa_de_Video_Zotac_GeForce_RTX_4060_Ti_16GB_GDDR6_AMP_b55acf2f-med.jpg",
    },
    {
        id: 2,
        name: "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        price: 632567,
        image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41330_Placa_de_Video_Zotac_GeForce_RTX_4060_Ti_16GB_GDDR6_AMP_b55acf2f-med.jpg",
    },
    {
        id: 3,
        name: "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        price: 632567,
        image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41330_Placa_de_Video_Zotac_GeForce_RTX_4060_Ti_16GB_GDDR6_AMP_b55acf2f-med.jpg",
    },
    {
        id: 4,
        name: "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        price: 632567,
        image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41330_Placa_de_Video_Zotac_GeForce_RTX_4060_Ti_16GB_GDDR6_AMP_b55acf2f-med.jpg",
    },
    {
        id: 5,
        name: "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        price: 632567,
        image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41330_Placa_de_Video_Zotac_GeForce_RTX_4060_Ti_16GB_GDDR6_AMP_b55acf2f-med.jpg",
    },
    {
        id: 6,
        name: "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        price: 632567,
        image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41330_Placa_de_Video_Zotac_GeForce_RTX_4060_Ti_16GB_GDDR6_AMP_b55acf2f-med.jpg",
    },
];

export default async function Home() {
    const session = await auth();
    const getProducts = async () => {
        try {
            const products = handleGetProducts();
            return products;
        } catch (error) {
            console.log(error);
        }
    };
    const products = await getProducts();

    console.log(session);
    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center flex-col  font-[family-name:var(--font-geist-sans)]  bg-zinc-300 px-4 pb-3">
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
            <div className="flex flex-wrap  items-center justify-center gap-4">
                <CardList products={products} />
            </div>
        </div>
    );
}
