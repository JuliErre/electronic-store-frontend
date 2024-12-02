"use client";

import React from "react";
import { Props } from "./types";

const Input = React.forwardRef<HTMLInputElement, Props>(
    ({ error, className, ...rest }, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <div className="flex w-full">
                    <input
                        {...rest}
                        ref={ref}
                        className={`input ${className} ${
                            error ? "input-error" : ""
                        }`}
                    />
                </div>
                {error && <span className="text-xs text-red-400">{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
