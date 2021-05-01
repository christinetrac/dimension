import { Link } from "react-router-dom";
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            hi im the dashboard page
            <Link to="/your-courses">
                <button>
                    your courses
                </button>
            </Link>
        </div>
    );
};

export { Dashboard } ;
