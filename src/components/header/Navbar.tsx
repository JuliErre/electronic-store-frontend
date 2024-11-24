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
import { useSession } from "next-auth/react";
import Link from "next/link";
import CartCountIcon from "../cart/CartCountIcon";
import Icon from "../shared/Icon";
import SearchInput from "./SearchInput";

export default function Navbar() {
    const { data: session, status } = useSession({
        required: false,
    });

    const products = useCartStore((state) => state.products);
    const productsQuantity = products.reduce(
        (acc, product) => product.quantity + acc,
        0
    );

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
                    className="w-[340px] bg-zinc-900 p-2 outline-none border-0"
                    itemClasses={{
                        base: "gap-4",
                    }}>
                    <DropdownItem
                        className="bg-zinc-900"
                        key="autoscaling"
                        description="ACME scales apps to meet user demand, automagically, based on load.">
                        Autoscaling
                    </DropdownItem>
                    <DropdownItem
                        key="usage_metrics"
                        description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.">
                        Usage Metrics
                    </DropdownItem>
                    <DropdownItem
                        key="production_ready"
                        description="ACME runs on ACME, join us and others serving requests at web scale.">
                        Production Ready
                    </DropdownItem>
                    <DropdownItem
                        key="99_uptime"
                        description="Applications stay on the grid with high availability and high uptime guarantees.">
                        +99% Uptime
                    </DropdownItem>
                    <DropdownItem
                        key="supreme_support"
                        description="Overcome any challenge with a supporting team ready to respond.">
                        +Supreme Support
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
        <Nav className="py-2" isBlurred={false}>
            <NavbarBrand>
                <div className="flex flex-col items-center leading">
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
