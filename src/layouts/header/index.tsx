import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

import Github from '@/static/images/icon/github.svg';
import { goURL } from '@/utils';

import {
  StyledHeader,
  LogoHeader,
  Menu,
  BoxImgFlex,
  MenuItem,
  MenuItemLink,
  MobileMenuButton,
} from './styled';

interface IMenuItem {
  name: string;
  href: string;
  label: string;
}

export const HEADERS: Array<IMenuItem> = [
  // {
  //   name: '1',
  //   href: '#',
  //   label: 'Menu 1',
  // },
];

const Header: React.FC = () => {
  const layout: ILayout = useSelector(selectDisplayLayout);
  const [openMobile, setOpenMobile] = useState<boolean>();
  const [section, setSection] = useState(HEADERS[0]);

  if (!layout.header) {
    return null;
  }
  return (
    <>
      <StyledHeader>
        <LogoHeader>
          <BoxImgFlex onClick={() => goURL('/')}>
            <img width={40} src="/static/images/webpack.png" alt="" />
            <h4>React-Typescript-Webpack</h4>
          </BoxImgFlex>
        </LogoHeader>
        <Menu>
          <ul>
            {HEADERS.map(item => (
              <MenuItem onClick={() => setSection(item)} key={item.name}>
                <MenuItemLink
                  href={item.href}
                  active={section.name === item.name}
                >
                  <span>{item.label}</span>
                </MenuItemLink>
              </MenuItem>
            ))}
            <MenuItem>Version: {process.env.VERSION}</MenuItem>
            <MenuItem github>
              <MenuItemLink
                github
                target="_blank"
                rel="noreferrer"
                href="https://github.com/thaind97git/react-typescript-webpack"
              >
                <span>&nbsp;</span> <Github style={{ height: 24 }} />
              </MenuItemLink>
            </MenuItem>
          </ul>
        </Menu>

        <MobileMenuButton onClick={() => setOpenMobile(true)} href="#">
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </StyledHeader>

      <div className={`mobile-menu ${openMobile ? 'show' : ''}`}>
        <div className="m-menu__title">
          <a
            onClick={() => setOpenMobile(false)}
            href="#"
            className="m-menu-close"
          >
            +
          </a>
        </div>
        <ul>
          {HEADERS.map(item => (
            <li key={item.name}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`overlay-menu ${openMobile ? 'active' : ''}`}></div>
    </>
  );
};

export default Header;
