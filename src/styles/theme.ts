import { DefaultTheme } from 'styled-components';
import media from './media';

const theme: DefaultTheme = {
  primary: '#257aa6',
  link: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
  text: '#333',

  ...media,
};

export default theme;
