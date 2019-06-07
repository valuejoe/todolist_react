import React from 'react';
import { NavLink } from 'react-router-dom';

const TaskNav = () => {

    return (
        <div className="Task_nav">
            <ul className="nav-ul">
                <li className="nav-li">
                    <NavLink to="/mytask" className="nav-link">My Tasks</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/inProcess" className="nav-link">In progress</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/completed" className="nav-link">Completed</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default TaskNav;