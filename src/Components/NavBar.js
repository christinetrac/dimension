import React from "react";
import styles from "./navbar.module.css";
import {Link} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={styles.nav}>
            <Link to="/">
                <button>
                    dashboard
                </button>
            </Link>
            <Link to="/your-courses">
                <button>
                    your courses
                </button>
            </Link>
            <Link to="/chat">
                <button>
                    chatty chatter
                </button>
            </Link>
        </div>
    );
};
export { NavBar };
