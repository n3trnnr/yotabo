import { iconsList } from "./SvgIcons";

export interface ISvgIcons {
    iconName: keyof typeof iconsList;
    styleName?: string;
}