"use client";
import { Select, SelectItem, SharedSelection } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SortSelect = () => {
    const router = useRouter();

    const handleSelectionChange = (keys: SharedSelection) => {
        const currentKey = keys.currentKey as string;
        const params = new URLSearchParams(window.location.search);
        params.set("order", currentKey);
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push(query);
    };

    return (
        <Select
            className="w-40"
            label="Sort by"
            classNames={{
                base: "text-black",
                listbox: "text-black",
                selectorIcon: "text-black",
            }}
            onSelectionChange={handleSelectionChange}>
            <SelectItem key="all">All</SelectItem>
            <SelectItem key="ASC">Low Price </SelectItem>
            <SelectItem key="DESC">Highest Price </SelectItem>
        </Select>
    );
};

export default SortSelect;
