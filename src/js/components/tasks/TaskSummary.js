import React, { Component } from 'react';
import { clickStar, clickEdit, clickComplete, deleteTask, updateTask } from '../../store/actions/taskActions';
import { connect } from 'react-redux';
import AddTask from './AddTask'

class TaskSummary extends Component {

    state = {
        title: this.props.task.title,
        comment: this.props.task.comment
    }

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
    }

    ClickDelete = () => {
        this.props.deleteTask(
            this.props.task.id,
            this.props.index,
            this.props.collection
        )
    }

    editChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log(e.target.value);
        }
        this.props.updateTask(
            this.props.task.id,
            this.props.index,
            this.props.collection,
            this.state)
      }

    render() {
        const task = this.props.task;
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

        const Delete = () => {
            return (
                <button className="material-icons positive_right md-24" onClick={this.ClickDelete}>delete</button>
            )
        }

        const isEditMode = () => {
            return (
                task.edit ? (
                    <div className="task_content">
                        {CheckBox(task)}
                        <input id="title" className="Task_title Task_input"  onKeyDown={this._handleKeyDown} value={this.state.title} onChange={this.editChange} type="text"></input>
                        <Delete />
                        {EditIcon(task)}
                        {StarIcon(task)}

                        <div>
                            <p>
                                <i className="material-icons positive_left">insert_comment</i>
                                comment
                            </p>
                            <input id="comment" className="Task_title Task_input" value={this.state.comment} onChange={this.editChange} type="text" />
                        </div>
                    </div>

                ) : (
                        <div className="task_content">
                            {CheckBox(task)}
                            <span className="Task_title">{task.title}</span>
                            <Delete />
                            {EditIcon(task)}
                            {StarIcon(task)}
                        </div>
                    )
            )
        }

        return (
            <div className="task">
                {task.completed ? (
                    <div className="task_content">
                        {CheckBox(task)}
                        <span className="Task_title">{task.title}</span>
                    </div>
                ) : (
                        <React.Fragment>
                            {isEditMode(task)}
                        </React.Fragment>
                    )}

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        clickStar: (id, index, collection, star) => dispatch(clickStar(id, index, collection, star)),
        clickEdit: (id, index, collection) => dispatch(clickEdit(id, index, collection)),
        clickComplete: (id, index, collection) => dispatch(clickComplete(id, index, collection)),
        deleteTask: (id, index, collection) => dispatch(deleteTask(id, index, collection)),
        updateTask: (id, index, collection,state) => dispatch(updateTask(id, index, collection,state))
    }
}

export default connect(null, mapDispatchToProps)(TaskSummary);