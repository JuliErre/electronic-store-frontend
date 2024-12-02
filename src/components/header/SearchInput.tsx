"use client";

import { ROUTES } from "@/utils/constants";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Icon from "../shared/Icon";

const SearchInput = () => {
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const text = formData.get("search") as string;
        const params = new URLSearchParams();
        params.set("search", text);
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push(`${ROUTES.products}${query}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Search"
                name="search"
                isClearable
                radius="lg"
                className="w-[350px] my-5"
                placeholder="Type to search..."
                startContent={<Icon icon="Search" color="black" />}
                // onSubmit={handleSearch}
            />
        </form>
    );
};

export default SearchInput;
