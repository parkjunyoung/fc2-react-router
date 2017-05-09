import React from 'react';
import PostList from '../components/PostList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Posts = (props) => {
    return (
        <div>
            포스트
            <div>
                <Link to="/posts/1">1번포스트 </Link>
                <Link to="/posts/2">2번포스트 </Link>
                <Link to="/posts/3">3번포스트 </Link>
            </div>
            <Route path="/posts/:postId" component={PostList} />
        </div>
    );
}

export default Posts;