"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    hideIcon?: boolean;
    yellow?: boolean;
    blue?: boolean;
}

const Warning = React.forwardRef<HTMLDivElement, Props>(
    ({ className, children, hideIcon, yellow, blue, ...props }: Props, ref) => {
        const t = useTranslations("COMMON");
        return (
            <div
                ref={ref}
                className={cn(
                    `my-4 px-4 py-2 border-destructive border rounded-md shadow-sm bg-destructive/80 dark:bg-destructive/40 text-secondary-foreground flex flex-col gap-2 ${yellow ? "bg-yellow-400/10 border-yellow-400" : "bg-destructive/10"
                    } ${blue ? "bg-blue-400/10 border-blue-400" : "bg-destructive/10"}`,
                    className
                )}
                {...props}
            >
                {!hideIcon && (
                    <div
                        className={`flex items-center gap-2 font-semibold ${yellow ? "text-yellow-400" : "text-destructive"
                            } ${blue ? "text-blue-400" : "text-destructive"}`}
                    >
                        {blue ? <Info /> : <AlertTriangle />}

                        <p>{blue ? t("NOTICE") : t("WARNING")}</p>
                    </div>
                )}
                <div>{children}</div>
            </div>
        );
    }
);

Warning.displayName = "Warning";

export default Warning;