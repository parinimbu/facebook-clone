import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"/>
                <div className="post__topinfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
        </div>
    )
}

export default Post
