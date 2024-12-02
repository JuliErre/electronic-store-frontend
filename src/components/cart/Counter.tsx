import Icon from "../shared/Icon";
import { CounterProps } from "./types";

const Counter = ({ onIncrement, onDecrement, initialValue }: CounterProps) => {
    return (
        <div className="flex border border-orange-500 rounded-lg items-center">
            <button
                onClick={onDecrement}
                className="border-r h-full border-orange-400 p-2">
                <Icon icon="Decrease" color="#ea580c" fontWeight={100} />
            </button>
            <span className="px-2 font-medium w-10 text-center">
                {initialValue}
            </span>
            <button
                onClick={onIncrement}
                className="border-l h-full border-orange-400 p-2">
                <Icon icon="Add" color="#ea580c" />
            </button>
        </div>
    );
};

export default Counter;
