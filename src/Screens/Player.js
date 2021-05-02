import React from 'react';
import styles from './player.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import { MdFavorite } from "react-icons/md"
import { MdRemoveRedEye } from "react-icons/md"
import { MdAccessTime } from "react-icons/md"
import { FaCube } from "react-icons/fa";
import profile from "../assets/profile1.png";
import {Link} from "react-router-dom";
import verify from "../assets/verify.svg";
import video from "../assets/cupdemo.mov";

const Player = (props) => {

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.player}>
                <video src={video} autoPlay="true" muted="true" className={styles.video}/>
                <div className={styles.videoInfo}>
                    <div className={styles.videoTitle}>Giraffe Ceramic Planters</div>
                    <div className={styles.live}>●  live</div>
                    <MdRemoveRedEye className={styles.eye}/>
                    <div className={styles.viewers}>143 viewers</div>
                    <MdAccessTime className={styles.clock}/>
                    <div className={styles.duration}>1:23:55</div>
                </div>

                <div className={styles.chatContainer}>
                    <iframe src="http://34.66.210.81/" height="100%" width='275px' className={styles.chat}/>
                </div>
                <div className={styles.creatorContainer}>
                    <div style={{flexDirection:'row', display:'flex'}}>
                        <img src={profile} alt="" className={styles.pic}/>
                        <div style={{marginTop:'44px', position:'relative'}}>
                            <div className={styles.label}>course creator</div>
                            <img src={verify} alt="verify" className={styles.verify}/>
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
