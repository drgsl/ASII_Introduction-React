import React from "react";
import { useState } from 'react';
import { useFormik } from "formik"
import AddCommentForm from "./addCommentForm"
import { useEffect } from "react/cjs/react.production.min";

const Post = (props) => {

    const { text, imageUrl } = props;
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);

    const increaseLikeCount = () => {
        setLikeCount((prev) => prev + 1);
    }

    const decreaseLikeCount = () => {
        setLikeCount((prev) => prev - 1);

    }

    const addComment = (comment) => {
        setComments((previousComments) => [...previousComments, comment]);
    }
    
    useEffect(() => {
        localStorage.setItem()
    }, [comments])

    //console.log(props);
    return (
        <div className="post" >
            <img src={imageUrl}>
            </img>
            <h2>
                {text}
            </h2>
            <h3>
                {likeCount} likes
        </h3>
            <div className="button-wrapper">
                <button className='like'
                    onClick={increaseLikeCount}>
                    Like
        </button>
                <button className='dislike'
                    onClick={decreaseLikeCount}>
                    Dislike
        </button>
            </div>
            <div>
                {comments.map((comment, idx) => (
                    <div key={idx} > {comment} </div>
                ))
                }
                <AddCommentForm addComment={addComment} />
            </div>
        </div>
    );
};

export default Post;