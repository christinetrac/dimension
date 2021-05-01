import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../Screens/Dashboard';
import { YourCourses } from "../Screens/YourCourses";
import { Chat } from "../Screens/Chat"

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/your-courses' component={YourCourses}/>
            <Route exact path='/chat' component={Chat}/>
        </Switch>
    );
};

export { Main } ;
