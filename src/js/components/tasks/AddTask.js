import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../store/actions/taskActions'

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: '',
            comment: ''
        };

    }

    onClick = () => {
        this.setState({ show: !this.state.show })
    }

    handleSubmit = (e) => {
        this.setState({ show: !this.state.show })
        e.preventDefault();
        this.props.addTask(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        // console.log(this.state)
        const { show } = this.state;
        return (
            <React.Fragment>
                {show ? (
                    <form className="task" onSubmit={this.handleSubmit}>
                        <div className="addTask">
                            <p>
                                <i className="material-icons positive_left">add</i>
                                Add Task
                            </p>
                            <input id="title" className="Task_input addTitle_Input" onChange={this.handleChange} type="text" placeholder="Type somthing here" />

                            <div className="addTask_comment">
                                <p>
                                    <i className="material-icons positive_left">insert_comment</i>
                                    Comment
                                </p>
                                <input id="comment" className="Task_input comment_input" onChange={this.handleChange} type="text" placeholder="Type somthing here" />
                            </div>
                        </div>
                        <button type="button" className="addTask_button cancel_button" onClick={this.onClick} >x Cancel</button>
                        <button type="submit" className="addTask_button add_button" onClick={this.handleChange}>Add</button>
                    </form>
                ) : (
                        <div className="task">
                            <button type="text" className="task_add" onClick={this.onClick} >
                                <i className="material-icons taskAddText">add</i>
                                <span className="taskAddText">Add Task</span>
                            </button>
                        </div>

                    )}
            </React.Fragment>
        )
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(null, MapDispatchToProps)(AddTask);