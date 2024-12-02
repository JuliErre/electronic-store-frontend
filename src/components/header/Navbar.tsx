"use client";

import { useCartStore } from "@/store/cart.store";
import { ROUTES } from "@/utils/constants";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Spinner,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartCountIcon from "../cart/CartCountIcon";
import Icon from "../shared/Icon";
import SearchInput from "./SearchInput";

export default function Navbar() {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: false,
    });

    const products = useCartStore((state) => state.products);
    const productsQuantity = products.reduce(
        (acc, product) => product.quantity + acc,
        0
    );

    const handleSignOut = async () => {
        await signOut({
            redirectTo: ROUTES.login,
        });
    };

    const handleClickHome = () => {
        router.push(ROUTES.home);
    };

    const sessionStatusComponents: Record<
        "authenticated" | "loading" | "unauthenticated",
        JSX.Element
    > = {
        authenticated: (
            <Dropdown className="bg-zinc-900">
                <NavbarItem>
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-bold"
                            radius="sm"
                            variant="light">
                            <Icon icon="Person" color="#22c55e" />
                            {session?.user?.name}
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                    aria-label="ACME features"
                    className=" bg-zinc-900 p-2 outline-none border-0"
                    itemClasses={{
                        base: "gap-4",
                    }}>
                    <DropdownItem
                        onClick={() => router.push(ROUTES.profile)}
                        startContent={<Icon icon="Person" color="#fff" />}
                        className="bg-zinc-900"
                        key="autoscaling">
                        Profile
                    </DropdownItem>
                    <DropdownItem
                        key="usage_metrics"
                        onClick={handleSignOut}
                        startContent={<Icon icon="SignOut" color="#fff" />}>
                        Sign out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        ),
        loading: (
            <div className="flex justify-center w-1/4">
                <Spinner color="success" />
            </div>
        ),
        unauthenticated: (
            <>
                <NavbarItem className=" lg:flex">
                    <Link className="text-green-500" href={ROUTES.login}>
                        Login
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        className="bg-green-900 bg-opacity-30 text-green-800 ml-2"
                        href={ROUTES.register}
                        variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </>
        ),
    };

    return (
        <Nav className="py-2 fixed top-0 w-full z-50" isBlurred={false}>
            <NavbarBrand>
                <div
                    className="flex flex-col items-center leading cursor-pointer"
                    onClick={handleClickHome}>
                    <p className="font-bold text-White text-xl m-0 p-0">
                        Electronic
                    </p>
                    <p className="font-bold text-base mt-0 py-0 text-green-500">
                        Store
                    </p>
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex " justify="center">
                <SearchInput />
            </NavbarContent>

            <NavbarContent className="gap-0 " justify="end">
                {sessionStatusComponents[status]}

                <Button
                    as={Link}
                    className="bg-transparent flex h-20"
                    href={ROUTES.cart}>
                    <CartCountIcon color="#22c55e" count={productsQuantity} />
                </Button>
            </NavbarContent>
        </Nav>
    );
}
