"use client";

import { Props } from "./types";

const Button: React.FC<Props> = ({ children, className }) => {
    return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
