import 'styled-components';

declare module 'styled-components' {
  export type Active = {
    active?: boolean;
  };
  export interface DefaultTheme {
    primary: string;
    link: string;
    success: string;
    warning: string;
    error: string;
    text: string;
  }
}
