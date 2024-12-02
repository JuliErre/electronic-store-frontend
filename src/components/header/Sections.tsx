"use client";
import { useFetch } from "@/hooks/useFetch";
import { CategoryEntity } from "@/models";
import { handleGetCategories } from "@/useCases/categories/categories";
import { ROUTES } from "@/utils/constants";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "../shared/Icon";

const Sections = () => {
    const router = useRouter();
    const [parentsCategories, setParentsCategories] = useState<
        CategoryEntity[]
    >([]);

    const {
        data: categories,
        // error,
        // loading,
    } = useFetch<CategoryEntity[]>(handleGetCategories);

    const getProductRoute = (id: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("category", id);
        const query = params.toString() ? `?${params.toString()}` : "";
        return `${ROUTES.products}${query}`;
    };

    const handleItemClick = (id: string) => {
        const route = getProductRoute(id);
        router.push(route);
    };

    useEffect(() => {
        if (!categories) return;
        const parents = categories.filter((category) => !category.parentId);
        setParentsCategories(parents);
    }, [categories]);

    return (
        <div className="flex w-full justify-center items-center text-black gap-10 font-medium text-medium py-3">
            <Dropdown className="bg-zinc-900">
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium"
                        endContent={<Icon icon="ChevronDown" />}
                        radius="sm"
                        variant="light">
                        Products
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="ACME features"
                    className="w-[200px] bg-zinc-900 p-2 outline-none border-0"
                    itemClasses={{
                        base: "gap-4",
                    }}>
                    {parentsCategories.map((category) => (
                        <DropdownItem
                            key={category.id}
                            onClick={() => handleItemClick(category.id)}>
                            {category.name}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>

            {parentsCategories.map((category) => (
                <Link href={getProductRoute(category.id)} key={category.id}>
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default Sections;
