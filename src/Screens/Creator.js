import React from 'react';
import styles from './creator.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import { MdFavorite } from "react-icons/md"
import { FaCube } from "react-icons/fa";
import profile from "../assets/profile1.png";

const Creator = (props) => {

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.creator}>

            </div>
        </div>
    );
};

export { Creator } ;
