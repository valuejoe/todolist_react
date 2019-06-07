import React, {Component} from 'react';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = sortableElement(({value}) => <li>{value}</li>);

const SortableContainer = sortableContainer(({children}) => {
  return <div>{children}</div>;
});

class App extends Component {
  state = {
    collections: [[{ id: '1', star: false, edit: false, title: '寫程式', completed: false },
    { id: '4', star: false, edit: false, title: '屁屁', completed: false }], [], []],
  };

  onSortEnd = ({oldIndex, newIndex, collection}) => {
    this.setState(({collections}) => {
      const newCollections = [...collections];

      newCollections[collection] = arrayMove(
        collections[collection],
        oldIndex,
        newIndex,
      );

      return {collections: newCollections};
    });
  };

  render() {
    const {collections} = this.state;
    console.log(collections)

    return (
      <SortableContainer onSortEnd={this.onSortEnd}>
        {collections.map((items, index) => (
          <React.Fragment key={index}>
            <strong>LIST {index}</strong>
            <ul>
              {items.map((item, i) => (
                  <SortableItem
                  key={item.id}
                  value={`Item ${item.title}`}
                  index={i}
                  collection={index}
                />
              ))}
            </ul>
          </React.Fragment>
        ))}
      </SortableContainer>
    );
  }
}

export default App