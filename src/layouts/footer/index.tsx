import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';

// import { useTranslation } from 'react-i18next';

// import { } from './styled';

const Footer: React.FC = () => {
  // const { t } = useTranslation();
  const { footer } = useSelector(selectDisplayLayout);
  if (!footer) {
    return null;
  }
  return (
    <div>
      <span>Footer</span>
    </div>
  );
};

export default Footer;
