import React, { Component } from 'react';
import { clickStar, clickEdit, clickComplete } from '../../store/actions/taskActions';
import { connect } from 'react-redux';
import AddTask from './AddTask'

class TaskSummary extends Component {

    ClickStar = () => {
        this.props.clickStar(
            this.props.task.id,
            this.props.index,
            this.props.collection,
            this.props.task.star
            );
    }

    ClickEdit = () => {
        this.props.clickEdit(
            this.props.task.id,
            this.props.index,
            this.props.collection
            );
    }

    ClickComplete = () => {
        this.props.clickComplete(
            this.props.task.id,
            this.props.index,
            this.props.collection);

        // console.log('click complete');
    }

    render() {
        const task = this.props.task;
        // console.log(task)
        const StarIcon = () => {
            if (!task.star) {
                return (<button className="material-icons positive_right md-24 " onClick={this.ClickStar}>star_border</button>)
            } else {
                return (<button className="material-icons positive_right md-24 star_Click " onClick={this.ClickStar}>star</button>)
            }
        }

        const EditIcon = () => {
            
            if (!task.edit) {
                return (<button className="material-icons-outlined positive_right md-24 " onClick={this.ClickEdit}>edit</button>)
            } else {
                return (<button className="material-icons positive_right md-24 edit_Click " onClick={this.ClickEdit}>edit</button>)
            }
        }

        const CheckBox = () => {
            if (!task.completed) {
                return (<button className="material-icons positive_left" onClick={this.ClickComplete}>check_box_outline_blank</button>)
            } else {
                return (<button className="material-icons positive_left" onClick={this.ClickComplete}>check_box</button>)
            }
        }

        return (
            <div className="task">
                {task.completed ? (
                    <div className="task_content">
                        {CheckBox(task)}
                        <span className="Task_title">{task.title}</span>

                    </div>
                ) : (
                        <div className="task_content">
                            {CheckBox(task)}
                            <span className="Task_title">{task.title}</span>
                            {EditIcon(task)}
                            {StarIcon(task)}
                        </div>
                    )}

                {/* <div className="task_content">
                {CheckBox(task)}
                <span className="Task_title">{task.title}</span>
                {EditIcon(task)}
                {StarIcon(task)}
            </div> */}

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        clickStar: (id, index, collection, star) => dispatch(clickStar(id, index, collection, star)),
        clickEdit: (id, index, collection) => dispatch(clickEdit(id, index, collection)),
        clickComplete: (id, index, collection) => dispatch(clickComplete(id, index, collection))
    }
}

export default connect(null, mapDispatchToProps)(TaskSummary);