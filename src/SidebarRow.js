import { Avatar } from '@material-ui/core';
import React from 'react'
import "./SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src='https://cdn.thetealmango.com/wp-content/uploads/2021/07/one-1.jpg'/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
