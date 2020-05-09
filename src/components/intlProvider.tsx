import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { selectLocale } from '@/selectors';
import messages from '@/data/translations';

interface IProps {
  children: React.ReactNode;
}

const IntlProviderComponent = ({ children }: IProps) => {
  const locale = useSelector(selectLocale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderComponent;
