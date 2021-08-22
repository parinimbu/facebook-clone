import React, { useState} from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(onSnapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        ))
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/06/tokyo-revengers-one-piece.jpg"
                message="this works"
                timestamp="timestamp"
                username="parin"
                image="https://akibamarket.com/wp-content/uploads/2021/06/73233-el-manga-tokyo-revengers-supera-20-millones-de-copias-en-circulacion.jpg"
            />
        </div>
    )
}

export default Feed
