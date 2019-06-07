import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskSummary from '../tasks/TaskSummary';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { sortableList } from '../../store/actions/taskActions'

const SortableItem = sortableElement(({value, index, collection}) => <div><TaskSummary key={value.id} task={value} index={index} collection={collection} /></div>);

const SortableContainer = sortableContainer(({ children }) => {
    return <div>{children}</div>;
});

class InProgress extends Component {

    onSortEnd = ({oldIndex, newIndex, collection}) => {
        this.props.sortableList(oldIndex, newIndex, collection);
    };

    render() {
        const { tasks } = this.props;
        return (
            <div>
                <SortableContainer onSortEnd={this.onSortEnd}>
                    {tasks.filter((items,index) => (index < 2)).map((items, index) =>(
                        <React.Fragment key={index}>
                            {items.map((item, i) =>(
                                <SortableItem key={item.id} value={item} index={i} collection={index} />
                            ))}              
                        </React.Fragment>
                    ))}
                </SortableContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortableList: (oldIndex, newIndex, collection) => dispatch(sortableList(oldIndex, newIndex, collection))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);