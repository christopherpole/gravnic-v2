import React from 'react';
import { IntlProvider } from 'react-intl';

import messages from '@/data/translations';
import { useSelector } from 'react-redux';
import IState from '@/types/state';

interface IProps {
  children: React.ReactNode;
}

const IntlProviderComponent = ({ children }: IProps) => {
  const locale = useSelector((state: IState) => state.user.locale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderComponent;
