import React, {useState} from 'react';
import styles from './header.module.css';
import { MdSearch } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import profile from '../assets/profile.png';

const Header = (props) => {
    const [query, setQuery] = useState('');

    return (
        <div className={styles.header}>
            <div className={styles.queryWrapper}>
                <input
                    className={styles.queryBar}
                    key="random1"
                    value={query}
                    placeholder={"Search"}
                    onChange={(text) => setQuery(text.target.value)}
                />
                <div className={styles.queryIcon}>
                    <MdSearch style={{color:'#363636', width:'19px', height:'19px'}}/>
                </div>
            </div>
            <div className={styles.iconWrapper}>
                <div className={styles.dot1}/>
                <div className={styles.dot2}/>
                <MdNotificationsNone style={{color:'#363636', width:'24px', height:'21px'}}/>
                <MdInbox style={{color:'#363636', width:'20px', height:'20px', marginLeft:'20px'}}/>
            </div>
            <div className={styles.profileWrapper}>
                <img src={profile} className={styles.profilePic} alt="Profile Picture"/>
                <div style={{marginLeft: '16px', marginRight:'16px'}}>
                    <p className={styles.profileName}>Beaniebaby</p>
                    <p className={styles.profileOccupation}>Student</p>
                </div>
                <MdKeyboardArrowDown style={{color:'#363636', width:'21px', height:'25px', marginTop: '3px'}}/>
            </div>
        </div>
    );
};

export { Header } ;
