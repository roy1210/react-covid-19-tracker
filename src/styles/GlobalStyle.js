import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
#root{
  height: 100%;
  display: flex;
  flex-direction: column;
}

body,html {
  background-color: ${theme.colors.white};
  height: 100%;
}
`;
