"use client";

import Input from "@/components/shared/Input";
import { ROUTES } from "@/utils/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

interface InputType {
    placeholder: string;
    type: React.InputHTMLAttributes<HTMLInputElement>["type"];
    name: "email" | "password";
}

const inputs: InputType[] = [
    {
        placeholder: "Email",
        type: "text",
        name: "email",
    },
    {
        placeholder: "Password",
        type: "password",
        name: "password",
    },
];

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

const Login = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = useCallback(
        async (data) => {
            try {
                const response = await signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });
                if (response?.error) {
                    throw new Error(response.error);
                }
                reset();
                toast.success("Logged in successfully");
                router.push(ROUTES.home);
            } catch (error) {
                console.error(error);
                const errorMsg = "Invalid credentials";
                inputs.forEach((input) =>
                    setError(input.name, { message: errorMsg })
                );
            }
        },
        [setError, reset, router]
    );

    return (
        <div className="flex flex-col">
            <h4 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-10">
                Login
            </h4>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}>
                {inputs.map((input) => (
                    <Input
                        key={input.name}
                        {...register(input.name)}
                        type={input.type}
                        placeholder={input.placeholder}
                        error={errors[input.name]?.message}
                    />
                ))}
                <button type="submit" className="btn">
                    Sign In
                </button>
            </form>
            <Link className="btn btn-outline mt-4" href={ROUTES.register}>
                Register
            </Link>
        </div>
    );
};

export default Login;
