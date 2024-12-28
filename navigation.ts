import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'mr','hi'] as const;

export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales});

