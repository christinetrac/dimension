import React from 'react';
import styles from './dashboard.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import banner from "../assets/dashboard-banner.svg";
import { MdLiveTv } from "react-icons/md";
import { MdPlayCircleOutline } from "react-icons/md"
import { LIVE_COURSES, MISSED_STREAMS, UPCOMING_STREAMS } from "../constants/constants";
import { LiveCourse } from "../Components/LiveCourse";
import { MissedStream } from "../Components/MissedStream";
import { IoIosCalendar } from "react-icons/io";
import { UpcomingStream } from "../Components/UpcomingStream";

const Dashboard = (props) => {
    const liveCourses = LIVE_COURSES.map( course => {
        return (
                <LiveCourse key={course} course={course}/>
            )
    });

    const missedStreams = MISSED_STREAMS.map( course => {
       return (
           <MissedStream key={course} course={course}/>
       )
    });

    const upcomingStreams = UPCOMING_STREAMS.map( course => {
        return (
            <UpcomingStream key={course} course={course}/>
        )
    });

    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.dashboard}>
                <img src={banner} alt="" className={styles.banner}/>
                <div className={styles.bannerText}><span>dimension</span> brings courses to <span>life.</span></div>

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
                        <IoIosCalendar className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Upcoming Streams</div>
                    </div>
                    <div>
                        <div className={styles.titleText} style={{cursor:'pointer'}}>View All</div>
                    </div>
                </div>
                <div className={styles.missedStreams}>
                    {upcomingStreams}
                </div>

                <div style={{marginLeft: '54px', marginTop:'70px', marginRight:'33px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div className={styles.title}>
                        <MdPlayCircleOutline className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Streams You Missed</div>
                    </div>
                    <div>
                        <div className={styles.titleText} style={{cursor:'pointer'}}>View All</div>
                    </div>
                </div>
                <div className={styles.missedStreams}>
                    {missedStreams}
                </div>
            </div>
        </div>
    );
};

export { Dashboard } ;
