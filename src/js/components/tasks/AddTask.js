import React, { Component } from 'react'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'
import { addTask } from '../../store/actions/taskActions'

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title:'',
            comment:''
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
                        <div className="task_content">
                            <input id="title" onChange={this.handleChange} type="text" placeholder="Type somthing here" />
                            
                            <div>
                                <p>
                                    <i className="material-icons positive_left">insert_comment</i>
                                    comment
                                </p>
                                <input id="comment" onChange={this.handleChange} type="text" />
                            </div>
                            <button onClick={this.onClick} >cancel</button>
                            <button type="submit" onClick={this.handleChange}>Add</button>
                        </div>
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
        addTask:(task) => dispatch(addTask(task))
    }
}

export default connect(null,MapDispatchToProps)(AddTask);