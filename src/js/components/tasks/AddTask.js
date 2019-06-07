import React, { Component } from 'react'

class AddTask extends Component {
    state = {

    }
    render() {
        return (
            <div className="task">
                <button type="text" className="task_add" >
                    <i className="material-icons taskAddText">add</i>

                    <span className="taskAddText">
                        add
                    </span>

                </button>

                <div className="task_content">
                    <div id="edit_content">
                        <p>
                            <i className="material-icons positive_left">date_range</i>
                            Deadline
                        </p>
                        <input type="month" />
                        <input type="time" />
                    </div>
                    <div>
                        <p>
                            <i className="material-icons positive_left">insert_comment</i>
                            comment
                        </p>
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask;