import React from "react";
import { LocaleSwitcher } from "../../../components/switchers/LocaleSwitcher";
import { ModeToggle } from "@/providers/modetoggle";


const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen w-full">
            <div className="absolute top-0 left-0 w-full flex justify-end">
                <div className="flex items-center gap-2 max-w-7xl p-2 md:p-4">
                    <LocaleSwitcher
                        alignHover="end"
                        alignDropdown="end"
                        size={"icon"}
                        variant={"outline"}
                    />
                    <ModeToggle />
                </div>
            </div>
            {children}
        </main>
    );
};

export default OnboardingLayout;