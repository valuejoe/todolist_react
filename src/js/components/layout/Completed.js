import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskSummary from '../tasks/TaskSummary';


class Completed extends Component {
    render(){
        const { tasks } = this.props;
        return(
                <div>{tasks[2] && tasks[2].map((task, index) => {
                    return (
                        <TaskSummary key={task.id} task={task}  index={index} collection={2}/>
                    )
            })}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Completed);