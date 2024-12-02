import CardSkeleton from "./CardSkeleton";
import { CardSkeletonListProps } from "./types";

const CardSkeletonList = ({ length }: CardSkeletonListProps) => {
    const arr = Array.from({ length });
    return (
        <>
            {arr.map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </>
    );
};

export default CardSkeletonList;
