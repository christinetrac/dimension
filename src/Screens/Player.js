import React from 'react';
import styles from './player.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import { MdFavorite } from "react-icons/md"
import { FaCube } from "react-icons/fa";
import profile from "../assets/profile1.png";
import {Link} from "react-router-dom";

const Player = (props) => {

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.player}>

                <div className={styles.creatorContainer}>
                    <div style={{flexDirection:'row', display:'flex'}}>
                        <img src={profile} alt="" className={styles.pic}/>
                        <div style={{marginTop:'54px'}}>
                            <div className={styles.label}>course creator</div>
                            <Link to='/amii-ceramics' className={styles.link}>Amii Ceramics</Link>
                            <div className={styles.tag}>
                                <FaCube className={styles.cube}/>
                                <div className={styles.tagText}>Pottery</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subscribe}>
                        <MdFavorite className={styles.heart}/>
                        Subscribed
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Player } ;
