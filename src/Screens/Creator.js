import React from 'react';
import styles from './creator.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import { MdFavorite } from "react-icons/md"
import { FaCube } from "react-icons/fa";
import { MdStar } from "react-icons/md"
import profile from "../assets/profile1.png";
import thumbnail from "../assets/thumbnail.png";
import { MdRemoveRedEye } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
import {Link} from "react-router-dom";
import blob from '../assets/creator-blob.svg';
import { MdPlayCircleOutline } from "react-icons/md"
import { PrevStream } from "../Components/PrevStream";
import { PREV_STREAMS } from "../constants/constants";

const Creator = (props) => {
    const prevStreams = PREV_STREAMS.map( course => {
        return (
            <PrevStream key={course} course={course}/>
        )
    });

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.creator}>
                <img src={blob} alt="blob" className={styles.blob}/>
                <div className={styles.creatorContainer}>
                    <div style={{flexDirection:'row', display:'flex'}}>
                        <img src={profile} alt="" className={styles.pic}/>
                        <div style={{marginTop:'54px'}}>
                            <div className={styles.link}>Amii Ceramics</div>
                            <div style={{flexDirection:'row', display:'flex'}}>
                                <div className={styles.tag}>
                                    <FaCube className={styles.cube}/>
                                    <div className={styles.tagText}>Pottery</div>
                                </div>
                                <div className={styles.live}>●  live</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subscribe}>
                        <MdFavorite className={styles.heart}/>
                        Subscribed
                    </div>
                </div>
                <div className={styles.bio}>
                    Welcome to my course! I’m Amii Ceramics, and I specialize in creating cute clay pots! Through my livestreams, learn how to sculpt adorable figurines that you can use everyday.
                </div>
                <div style={{marginLeft: '35px', marginTop:'65px', display:'flex', width:'642px', flexDirection:'row', justifyContent:'space-between', position:'relative'}}>
                    <div className={styles.titleText} style={{color:'#7544FF', fontWeight:'700', cursor:'pointer'}}>Overview</div>
                    <div style={{color:'#7544FF', position:'absolute', top:'23px', left:'42px'}}>●</div>
                    <div className={styles.titleText} style={{color:'#000', cursor:'pointer'}}>Upcoming Courses</div>
                    <div className={styles.titleText} style={{color:'#000', cursor:'pointer'}}>Previous Streams</div>
                    <div className={styles.titleText} style={{color:'#000', cursor:'pointer'}}>Course Forum</div>
                </div>
                <div style={{marginLeft: '46px', marginTop:'60px'}}>
                    <div className={styles.title}>
                        <MdStar className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Featured</div>
                    </div>
                </div>
                <div className={styles.videoContainer}>
                    <img src={thumbnail} alt="thumbnail" className={styles.thumbnail}/>
                    <div className={styles.videoTitle}>Giraffe Ceramic Planters</div>
                    <Link to='/amii-ceramics' className={styles.watchButton}>
                        <MdOpenInNew className={styles.newWindow}/>
                        Start Watching
                    </Link>
                    <div className={styles.live2}>●  live</div>
                    <div className={styles.tag2}>
                        <FaCube className={styles.cube}/>
                        <div className={styles.tagText}>Pottery</div>
                    </div>
                    <MdRemoveRedEye className={styles.eye}/>
                    <div className={styles.viewers}>143 viewers</div>
                    <MdAccessTime className={styles.clock}/>
                    <div className={styles.duration}>1:23:55</div>
                </div>

                <div style={{marginLeft: '46px', marginTop:'60px', marginRight:'33px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div className={styles.title}>
                        <MdPlayCircleOutline className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Upcoming Courses</div>
                    </div>
                    <div>
                        <div className={styles.titleText} style={{cursor:'pointer'}}>View All</div>
                    </div>
                </div>

                <div style={{marginLeft: '46px', marginTop:'60px', marginRight:'33px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div className={styles.title}>
                        <MdPlayCircleOutline className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Previously Streamed Courses</div>
                    </div>
                    <div>
                        <div className={styles.titleText} style={{cursor:'pointer'}}>View All</div>
                    </div>
                </div>
                <div className={styles.liveCourses}>
                    {prevStreams}
                </div>
            </div>
        </div>
    );
};

export { Creator } ;
