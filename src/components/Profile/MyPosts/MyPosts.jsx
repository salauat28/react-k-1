import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'This is first message', likesCount: 11},
        {id: 2, message: 'This is second one', likesCount: 12},
        {id: 3, message: 'And one more message', likesCount: 16}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> New post </textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} />


            </div>
        </div>
    );
}

export default MyPosts;