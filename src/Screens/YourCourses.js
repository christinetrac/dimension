import React from 'react';
import styles from './your-courses.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import banner from "../assets/your-courses-banner.svg";
import { LIVE_COURSES, SUBSCRIBED_CHANNELS, UPCOMING_STREAMS } from "../constants/constants";
import { LiveCourse } from "../Components/LiveCourse";
import { MdLiveTv } from "react-icons/md";
import { MdFavorite } from "react-icons/md"
import { FaCube } from "react-icons/fa";
import { SubscribedChannels } from "../Components/SubscribedChannels";
import { DimensionButton } from "../Components/DimensionButton";

const YourCourses = (props) => {
    const liveCourses = LIVE_COURSES.map( course => {
        return (
            <LiveCourse key={course} course={course}/>
        )
    });

    const subscribedChannels1 = SUBSCRIBED_CHANNELS.slice(0, 3).map( course => {
        return (
            <SubscribedChannels key={course} course={course}/>
        )
    });

    const subscribedChannels2 = SUBSCRIBED_CHANNELS.slice(3, 6).map( course => {
        return (
            <SubscribedChannels key={course} course={course}/>
        )
    });

    const dimensionList = ['Pottery', 'Fitness', 'Origami'];

    const yourDimensions = dimensionList.map( dim => {
        return (
            <DimensionButton key={dim} name={dim}/>
        )
    });

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.yourCourses}>
                <img src={banner} alt="" className={styles.banner}/>
                <div className={styles.bannerText}><span>your courses</span></div>

                <div style={{marginLeft: '54px', marginTop:'-120px', marginRight:'33px', display:'flex', width:'689px', flexDirection:'row', justifyContent:'space-between', position:'relative'}}>
                    <div className={styles.titleText} style={{color:'#7544FF', fontWeight:'700'}}>Overview</div>
                    <div style={{color:'#7544FF', position:'absolute', top:'23px', left:'42px'}}>●</div>
                    <div className={styles.titleText} style={{color:'#000'}}>Your Dimensions</div>
                    <div className={styles.titleText} style={{color:'#000'}}>Subscribed</div>
                    <div className={styles.titleText} style={{color:'#000'}}>Calendar</div>
                    <div className={styles.titleText} style={{color:'#000'}}>Past Streams</div>
                </div>

                <div style={{marginLeft: '54px', marginTop:'70px', marginRight:'33px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div className={styles.title}>
                        <FaCube className={styles.titleIcon} style={{paddingTop: '7px'}}/>
                        <div className={styles.titleText}>Your Dimensions</div>
                    </div>
                    <div>
                        <div className={styles.titleText}>Edit</div>
                    </div>
                </div>
                <div className={styles.liveCourses}>
                    {yourDimensions}
                </div>

                <div style={{marginLeft: '54px', marginTop:'70px'}}>
                    <div className={styles.title}>
                        <MdLiveTv className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Live Courses</div>
                    </div>
                </div>
                <div className={styles.liveCourses}>
                    {liveCourses}
                </div>

                <div style={{marginLeft: '54px', marginTop:'70px', marginRight:'33px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div className={styles.title}>
                        <MdFavorite className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Subscribed Course Channel</div>
                    </div>
                    <div>
                        <div className={styles.titleText}>View All</div>
                    </div>
                </div>
                <div className={styles.subbedChannels}>
                    {subscribedChannels1}
                </div>
                <div className={styles.subbedChannels} style={{marginTop:'27px'}}>
                    {subscribedChannels2}
                </div>
            </div>
        </div>
    );
};

export { YourCourses } ;
