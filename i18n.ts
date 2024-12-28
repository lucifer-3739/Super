import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';
import {notFound} from 'next/navigation';

const locales = ['en', 'mr','hi'];

export default getRequestConfig(async () => {
  const locale = (await headers()).get('X-NEXT-INTL-LOCALE') || 'en';

  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});