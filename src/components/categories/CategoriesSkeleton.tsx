import { Skeleton } from "@nextui-org/react";

const CategoriesSkeleton = () => (
    <div className="w-64 h-96 bg-white pr-10 pl-4 items-start py-4 rounded-2xl flex flex-col gap-4 px-4">
        <Skeleton className="w-full space-y-4 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-full space-y-4 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-full space-y-4 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-full space-y-4 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-full space-y-4 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-full space-y-4 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
        </Skeleton>
    </div>
);

export default CategoriesSkeleton;
