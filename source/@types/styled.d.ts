import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      WHITE_100: string;
      RED_100: string;
      BLACK_900: string;
    };
    FONTS: {
      BLACK: string;
      REGULAR: string;
      MEDIUM: string;
    };
  }
}
