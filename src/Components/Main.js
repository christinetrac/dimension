import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../Screens/Dashboard';
import { YourCourses } from "../Screens/YourCourses";
import { Chat } from "../Screens/Chat"
import { Player } from "../Screens/Player";
import { Creator } from "../Screens/Creator";

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/your-courses' component={YourCourses}/>
            <Route exact path='/chat' component={Chat}/>
            <Route exact path='/live-stream' component={Player}/>
            <Route exact path='/amii-ceramics' component={Creator}/>
        </Switch>
    );
};

export { Main } ;
