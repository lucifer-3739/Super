"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import { usePathname } from "next/navigation";

interface Props {
    href: string;
    className?: string;
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
    size?: "default" | "sm" | "lg" | "icon" | null;
    children?: React.ReactNode;
    include?: string;
    workspaceIcon?: boolean;
    disableActiveStateColor?: boolean;
}

const ActiveLink = React.forwardRef<HTMLAnchorElement, Props>(
    (
        {
            href,
            className,
            variant = "default",
            size = "default",
            children,
            include,
            workspaceIcon,
            disableActiveStateColor = false,
            ...props
        }: Props,
        ref
    ) => {
        const pathname = usePathname();
        return (
            <Link
                href={href}
                className={cn(
                    `${buttonVariants({ variant, size })} ${href === pathname || (include && pathname.includes(include))
                        ? workspaceIcon
                            ? "font-semibold border-secondary-foreground border-2"
                            : disableActiveStateColor
                                ? ""
                                : "bg-secondary font-semibold"
                        : ""
                    }`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </Link>
        );
    }
);

ActiveLink.displayName = "ActiveLink";

export default ActiveLink;