import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';
import Github from '@/static/images/icon/github.svg';
import LinkedIn from '@/static/images/icon/linkedin.svg';
import StackOverflow from '@/static/images/icon/stack-overflow.svg';
import { useTranslation } from 'react-i18next';

import { StyledFooter, Socials, SocialsImg, FooterH3 } from './styled';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { footer } = useSelector(selectDisplayLayout);
  if (!footer) {
    return null;
  }
  return (
    <StyledFooter id="footer">
      <Socials className="socials">
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <SocialsImg as={Github} />
        </a>
        <a href="https://www.linkedin.com/in/" rel="noreferrer" target="_blank">
          <SocialsImg as={LinkedIn} />
        </a>
        <a
          href="https://stackoverflow.com/users/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialsImg as={StackOverflow} />
        </a>
      </Socials>
      <FooterH3>{t('footer.copy_right')}</FooterH3>
    </StyledFooter>
  );
};

export default Footer;
