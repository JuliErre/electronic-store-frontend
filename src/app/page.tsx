import Carousel from "@/components/shared/Carousel";

export default async function Home() {
    const images = [
        "https://fastly.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/hBlackFriday2024.webp",
        "https://fastly.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/hRazer2024v2.webp",
    ];

    return (
        <div className="flex justify-between flex-col items-center min-h-[calc(100vh-150px)] font-[family-name:var(--font-geist-sans)] bg-zinc-300 px-4 py-1">
            <Carousel images={images} />
        </div>
    );
}
