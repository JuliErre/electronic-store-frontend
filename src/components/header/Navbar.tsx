"use client";

import { useCartStore } from "@/store/cart.store";
import { ROUTES } from "@/utils/constants";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Link,
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import CartCountIcon from "../cart/CartCountIcon";
import Icon from "../shared/Icon";

export default function Navbar() {
    const { data: session } = useSession();
    const products = useCartStore((state) => state.products);
    const productsQuantity = products.reduce(
        (acc, product) => product.quantity + acc,
        0
    );
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
                <Input
                    label="Search"
                    isClearable
                    radius="lg"
                    className="w-[350px] my-5"
                    placeholder="Type to search..."
                    startContent={<Icon icon="Search" color="black" />}
                />
            </NavbarContent>

            <NavbarContent className="gap-0 " justify="end">
                {session?.user ? (
                    <Dropdown className="bg-zinc-900">
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-bold"
                                    radius="sm"
                                    variant="light">
                                    <Icon icon="Person" color="#22c55e" />
                                    {session.user.name}
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
                ) : (
                    <>
                        <NavbarItem className=" lg:flex">
                            <Link href="#">Login</Link>
                        </NavbarItem>

                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="#"
                                variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </>
                )}
                <Link href={ROUTES.cart} className="flex h-full">
                    <Button className="bg-transparent flex h-20">
                        <CartCountIcon
                            color="#22c55e"
                            count={productsQuantity}
                        />
                    </Button>
                </Link>
            </NavbarContent>
        </Nav>
    );
}
