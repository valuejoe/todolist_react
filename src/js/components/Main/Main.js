import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MyTask from '../layout/MyTask'
import Inprogress from '../layout/Inprogress'
import Completed from '../layout/Completed'
import TaskNav from './TaskNav'

class Main extends Component {
    render() {
        return(
            <BrowserRouter>
                <TaskNav />
                <div>
                   <Switch>
                        <Route path='/mytask' component={ MyTask } />
                        <Route path='/inProcess' component={ Inprogress } />
                        <Route path='/completed' component={ Completed } />
                        <Redirect from="/" to="/mytask"></Redirect> 
                   </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Main;