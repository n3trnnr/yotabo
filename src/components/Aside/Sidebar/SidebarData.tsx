import { nanoid } from "nanoid"
import { ReactNode } from "react"
import SvgIcons from "../../UI/Svg/SvgIcons"

export const SidebarData = [
    {
        key: nanoid(),
        title: 'Dashboard',
        icon: (styleName: string): ReactNode => {
            return <SvgIcons iconName={'dashboard'} styleName={styleName} />
        }
    },
    {
        key: nanoid(),
        title: 'Projects',
        icon: (styleName: string): ReactNode => {
            return <SvgIcons iconName={'projects'} styleName={styleName} />
        }
    },
    {
        key: nanoid(),
        title: 'Settings',
        icon: (styleName: string): ReactNode => {
            return <SvgIcons iconName={'settings'} styleName={styleName} />
        }
    },
    {
        key: nanoid(),
        title: 'Trash',
        icon: (styleName: string): ReactNode => {
            return <SvgIcons iconName={'trash'} styleName={styleName} />
        }
    },
    {
        key: nanoid(),
        title: 'Log out',
        icon: (styleName: string): ReactNode => {
            return <SvgIcons iconName={'logOut'} styleName={styleName} />
        }
    }
]