import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = (props) => {
    return (
        <div>
            <Link to="/" className={styles.list}>홈</Link>
            <Link to="/posts" className={styles.list}>Posts</Link>
            <hr />
        </div>
    );
}

export default Header;