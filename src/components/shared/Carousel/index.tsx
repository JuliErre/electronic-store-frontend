"use client";

import { Image } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { Props } from "./types";

export default function Carousel({ images }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(
        () => setCurrentIndex((prev) => (prev + 1) % images.length),
        [images]
    );

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-[350px]">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
                <div
                    className="absolute flex transition-transform duration-500 ease-in-out w-full h-full"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full h-full">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute size-10 left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                ←
            </button>
            <button
                onClick={nextSlide}
                className="absolute size-10 right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                →
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
