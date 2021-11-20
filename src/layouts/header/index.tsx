import React from 'react';
import { useSelector } from 'react-redux';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

// import CIImg from '@/static/images/kkovx/ci.png';
// import { goURL } from '@/utils';

// import {} from './styled';

// const MenuItems: Array<IMenuItem> = [
//   {
//     name: '회사소개',
//     href: '#firstSection',
//     label: '회사소개',
//   },
//   {
//     name: '사업소개',
//     href: '#secondSection',
//     label: '사업소개',
//   },
//   {
//     name: '회사연혁',
//     href: '#thirdSection',
//     label: '회사연혁',
//   },
//   {
//     name: '광고안내',
//     href: '/advertisement',
//     label: '광고안내',
//     blank: true,
//   },
//   {
//     name: '인재채용',
//     href: 'https://kakaovx.recruiter.co.kr',
//     label: '인재채용',
//     blank: true,
//   },
// ];

// const CIItem: IMenuItem = {
//   href: '#mainVisual',
//   name: 'ci',
//   label: 'ci',
//   url: CIImg,
// };

const Header: React.FC = () => {
  const layout: ILayout = useSelector(selectDisplayLayout);

  if (!layout.header) {
    return null;
  }
  return <></>;
};

export default Header;
