import "styled-components"
import { ThemeType } from "../utils/Theme";

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}