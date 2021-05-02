import React from 'react';
import styles from './your-courses.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import banner from "../assets/your-courses-banner.svg";
import { LIVE_COURSES, SUBSCRIBED_CHANNELS, UPCOMING_STREAMS } from "../constants/constants";
import { LiveCourse } from "../Components/LiveCourse";
import { MissedStream } from "../Components/MissedStream";
import { IoIosCalendar } from "react-icons/io";
import { UpcomingStream } from "../Components/UpcomingStream";
import { MdLiveTv } from "react-icons/md";
import { MdFavorite } from "react-icons/md"
import { SubscribedChannels } from "../Components/SubscribedChannels";

const YourCourses = (props) => {
    const liveCourses = LIVE_COURSES.map( course => {
        return (
            <LiveCourse key={course} course={course}/>
        )
    });

    const subscribedChannels = SUBSCRIBED_CHANNELS.map( course => {
        return (
            <SubscribedChannels key={course} course={course}/>
        )
    });

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.yourCourses}>
                <img src={banner} alt="" className={styles.banner}/>
                <div className={styles.bannerText}><span>your courses</span></div>

                <div style={{marginLeft: '54px', marginTop:'-120px'}}>
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
                    {subscribedChannels}
                </div>
            </div>
        </div>
    );
};

export { YourCourses } ;
