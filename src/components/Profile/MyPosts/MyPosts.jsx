import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
            <textarea> New post </textarea>
            <button>Add post</button>

            </div>
            <div className={s.posts}>
            <Post message='This is first message' likesCount='10'/>
            <Post message='This is second one' likesCount='20'/>
            <Post message='And one more message' likesCount='30'/>
            
            </div>
         </div>
    );
}

export default MyPosts;