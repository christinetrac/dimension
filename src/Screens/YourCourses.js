import { Link } from "react-router-dom";
import React from 'react';

const YourCourses = () => {
    return (
        <div>
            hi im your courses page
            <Link to="/">
                <button>
                    dashboard
                </button>
            </Link>
        </div>
    );
};

export { YourCourses } ;
