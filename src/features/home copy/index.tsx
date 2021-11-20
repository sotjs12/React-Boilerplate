import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/locales/i18n';
import Select, { IOption } from '@/components/select';

const languageOptions = [
  {
    label: <div>English</div>,
    value: 'en',
  },
  {
    label: <div>Korea</div>,
    value: 'ko',
  },
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const handleOnChangeLanguage = (option: IOption) => {
    i18n.changeLanguage(option.value);
  };

  return (
    <div>
      <Select
        options={languageOptions}
        defaultValue={i18n.language}
        onChange={handleOnChangeLanguage}
      />
      <h1>HOME !</h1>
      <h3>
        {t('home.created_by')} 👻{'  '}
      </h3>
    </div>
  );
};

export default Home;
