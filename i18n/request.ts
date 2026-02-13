import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  // Force Arabic locale even if 'en' is selected
  let locale = 'ar';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
