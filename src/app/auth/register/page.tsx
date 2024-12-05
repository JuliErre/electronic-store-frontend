"use client";

import CountrySelect from "@/components/shared/CountrySelect";
import Input from "@/components/shared/Input";
import { handleRegister } from "@/useCases/auth/register";
import { ROUTES } from "@/utils/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

interface InputType {
    placeholder: string;
    type: string;
    name:
        | "email"
        | "password"
        | "confirmPassword"
        | "username"
        | "phone"
        | "name";
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
    {
        placeholder: "Confirm Password",
        type: "password",
        name: "confirmPassword",
    },
    {
        placeholder: "Name",
        type: "text",
        name: "name",
    },
    {
        placeholder: "Username",
        type: "text",
        name: "username",
    },

    {
        placeholder: "Phone Number",
        type: "text",
        name: "phone",
    },
];

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required").min(8).max(20),
    confirmPassword: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password")], "Passwords must match"),
    name: yup.string().required("Name is required"),
    username: yup.string().required("Username is required"),
    phone: yup.string().required("Phone Number is required"),
});

const defaultCountry = "+54";

const Register = () => {
    const [currentCountry, setCurrentCountry] = useState(defaultCountry);
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
            confirmPassword: "",
            username: "",
            phone: "",
            name: "",
        },
    });
    const handleSuccess = () => {
        reset();
        toast.success("Registered successfully");
        router.push(ROUTES.login);
    };

    const handleError = (error: {
        response: {
            data: {
                message: string;
            };
        };
    }) => {
        const errorMsg = error.response.data.message;
        inputs.forEach((input) => setError(input.name, { message: errorMsg }));
        console.error(error);
    };

    const onSubmit = async (data: {
        email: string;
        password: string;
        confirmPassword: string;
        username: string;
        phone: string;
        name: string;
    }) => {
        const dataWithCountry = {
            ...data,
            phone: `${currentCountry}${data.phone}`,
        };
        handleRegister(dataWithCountry, handleSuccess, handleError);
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentCountry(e.target.value);
    };

    return (
        <div className="flex flex-col bg-zinc-900 p-20 rounded-xl">
            <h4 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-10">
                Register
            </h4>
            <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit(onSubmit)}>
                {inputs.map((input) => (
                    <div key={input.name} className="flex w-full">
                        {input.name === "phone" ? (
                            <CountrySelect
                                onChange={handleCountryChange}
                                value={currentCountry}
                            />
                        ) : null}
                        <Input
                            className="w-full"
                            {...register(input.name)}
                            placeholder={input.placeholder}
                            type={input.type}
                            error={errors[input.name]?.message}
                        />
                    </div>
                ))}
                <button type="submit" className="btn">
                    Register
                </button>
            </form>
            <Link className="btn btn-outline mt-4" href={ROUTES.login}>
                Sign In
            </Link>
        </div>
    );
};

export default Register;
