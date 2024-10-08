import React from "react";
import Dashboard from '../../../assets/dashboard.svg?react'
import Logo from '../../../assets/logo.svg?react'
import Projects from '../../../assets/projects.svg?react'
import Boards from '../../../assets/boards.svg?react'
import Settings from '../../../assets/settings.svg?react'
import Trash from '../../../assets/trash.svg?react'
import LogOut from '../../../assets/log-out.svg?react'
import Search from '../../../assets/search.svg?react'
import LightTheme from '../../../assets/light-theme.svg?react'
import Notification from '../../../assets/notification.svg?react'
import User from '../../../assets/user.svg?react'
import BurgerMenu from '../../../assets/burger-menu.svg?react'
import AttachFile from '../../../assets/attach-file.svg?react'
import InProgress from '../../../assets/in-progress.svg?react'
import Deadline from '../../../assets/deadline.svg?react'
import Upload from '../../../assets/upload-file.svg?react'
import UploadCover from '../../../assets/upload-cover.svg?react'
import Download from '../../../assets/download-file.svg?react'
import Filter from '../../../assets/filter.svg?react'
import AddNewElement from '../../../assets/add-new-element.svg?react'
import BoardView from '../../../assets/board-view.svg?react'
import ListView from '../../../assets/list-view.svg?react'
import Description from '../../../assets/description.svg?react'
import Favourites from '../../../assets/favourites-false.svg?react'
import Cross from '../../../assets/close-cross.svg?react'
import { ISvgIcons } from "./SvgIcons.props";

export const iconsList = {
    logo: Logo,
    dashboard: Dashboard,
    projects: Projects,
    boards: Boards,
    settings: Settings,
    trash: Trash,
    logOut: LogOut,
    search: Search,
    lightTheme: LightTheme,
    notification: Notification,
    user: User,
    burgerMenu: BurgerMenu,
    attachFile: AttachFile,
    inProgress: InProgress,
    deadline: Deadline,
    uploadFile: Upload,
    uploadCover: UploadCover,
    download: Download,
    filter: Filter,
    addNewElement: AddNewElement,
    boardView: BoardView,
    listView: ListView,
    description: Description,
    favourites: Favourites,
    cross: Cross
}

const SvgIcons = ({ iconName, styleName }: ISvgIcons) => {

    const IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = iconsList[iconName]

    return (
        <IconComponent className={styleName} />
    )
}

export default SvgIcons