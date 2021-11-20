import 'styled-components';
import { ThemedCssFunction } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary?: {
        light?: string;
        main?: string;
        dark?: string;
      };
      secondary?: {
        light?: string;
        main?: string;
        dark?: string;
      };
      warning?: {
        light?: string;
        main?: string;
        dark?: string;
      };
      error?: {
        light?: string;
        main?: string;
        dark?: string;
      };
      success?: {
        light?: string;
        main?: string;
        dark?: string;
      };
    };
    typography?: {
      fontFamily?: string;
      fontSize?: number;
      fontWeightLight?: number;
      fontWeightRegular?: number;
      fontWeightMedium?: number;
    };
    breakpoints?: {
      values?: {
        mobile?: ThemedCssFunction<DefaultTheme>;
        tablet?: ThemedCssFunction<DefaultTheme>;
        laptop?: ThemedCssFunction<DefaultTheme>;
        desktop?: ThemedCssFunction<DefaultTheme>;
      };
    };
  }
}
