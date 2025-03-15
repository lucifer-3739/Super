"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export const useChangeLocale = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const locales = ['en', 'mr', 'hi'];

  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: "mr" | "en" | "hi") => {
    setIsLoading(true);
    startTransition(() => {
      const newPathname = `/${nextLocale}${pathname?.replace(/^\/(en|mr|hi)/, "") || ""}`;
      router.replace(newPathname);
    });
  };

  return { isLoading, isPending, onSelectChange };
};
