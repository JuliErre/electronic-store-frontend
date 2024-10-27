"use client";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import Icon from "../shared/Icon";

const Sections = () => {
    return (
        <div className="flex w-full justify-center items-center text-black gap-10 font-medium text-medium py-3">
            <Dropdown className="bg-zinc-900">
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium"
                        endContent={<Icon icon="ChevronDown" />}
                        radius="sm"
                        variant="light">
                        Products
                    </Button>
                </DropdownTrigger>
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

            <Link color="foreground" href="#">
                Help
            </Link>

            <Link color="foreground" href="#">
                Integrations
            </Link>
        </div>
    );
};

export default Sections;
