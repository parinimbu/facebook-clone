import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import { useStateValue } from "./StateProvider";
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const [{user}, dispatch ] = useStateValue();  
     return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
