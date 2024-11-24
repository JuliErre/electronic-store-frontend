"use client";

import { Pagination as PaginationComponent } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PaginationProps } from "./types";

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const router = useRouter();
    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", page.toString());
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push(query);
    };
    return (
        <PaginationComponent
            total={totalPages}
            page={currentPage}
            onChange={handlePageChange}
        />
    );
};

export default Pagination;
