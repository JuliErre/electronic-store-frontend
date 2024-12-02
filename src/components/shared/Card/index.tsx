import { Props } from "./types";

const Card = ({ children, ...props }: Props) => {
    return (
        <div
            className="flex flex-col bg-white rounded-xl p-10 w-full max-w-[1000px] min-h-96"
            {...props}>
            {children}
        </div>
    );
};

export default Card;
