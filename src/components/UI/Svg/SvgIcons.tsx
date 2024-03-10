import React from "react";
import Dashboard from '../../../assets/dashboard.svg?react'
import Logo from '../../../assets/logo.svg?react'
import Projects from '../../../assets/projects.svg?react'
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
import Filter from '../../../assets/filter.svg?react'
import AddNewElement from '../../../assets/add-new-element.svg?react'
import BoardView from '../../../assets/board-view.svg?react'
import ListView from '../../../assets/list-view.svg?react'
import Description from '../../../assets/description.svg?react'

interface ISvgIcons {
    iconName: 'logo' | 'dashboard' | 'projects' | 'settings' | 'trash' |
    'log-out' | 'search' | 'light-theme' | 'notification' | 'user' |
    'burger-menu' | 'attach-file' | 'in-progress' | 'deadline' | 'upload-file' |
    'filter' | 'add-new-element' | 'board-view' | 'list-view' | 'description';
    styleName: string;
}

const SvgIcons = ({ iconName, styleName }: ISvgIcons) => {

    switch (iconName) {
        case 'logo':
            return <Logo className={styleName} />
        case 'dashboard':
            return <Dashboard className={styleName} />
        case 'projects':
            return <Projects className={styleName} />
        case 'settings':
            return <Settings className={styleName} />
        case 'trash':
            return <Trash className={styleName} />
        case 'log-out':
            return <LogOut className={styleName} />
        case 'search':
            return <Search className={styleName} />
        case 'light-theme':
            return <LightTheme className={styleName} />
        case 'notification':
            return <Notification className={styleName} />
        case 'user':
            return <User className={styleName} />
        case 'burger-menu':
            return <BurgerMenu className={styleName} />
        case 'attach-file':
            return <AttachFile className={styleName} />
        case 'in-progress':
            return <InProgress className={styleName} />
        case 'deadline':
            return <Deadline className={styleName} />
        case 'upload-file':
            return <Upload className={styleName} />
        case 'filter':
            return <Filter className={styleName} />
        case 'add-new-element':
            return <AddNewElement className={styleName} />
        case 'board-view':
            return <BoardView className={styleName} />
        case 'list-view':
            return <ListView className={styleName} />
        case 'description':
            return <Description className={styleName} />
        default: ''
    }
}

export default SvgIcons