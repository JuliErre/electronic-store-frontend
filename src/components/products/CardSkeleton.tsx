import { Card, Skeleton } from "@nextui-org/react";

const CardSkeleton = () => {
    return (
        <Card className="py-4 px-8 bg-white w-72 text-zinc-800 h-[360px]">
            <Skeleton className="rounded-lg">
                <div className="h-48 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 pt-10">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
            <div className=" pt-10 flex justify-between">
                <Skeleton className="w-1/3 rounded-lg">
                    <div className="h-1 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-1/5 rounded-lg">
                    <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
};
export default CardSkeleton;
