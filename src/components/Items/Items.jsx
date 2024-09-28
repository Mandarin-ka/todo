import React from 'react';
import Item from './Item/Item';
import { getItems } from '../../utils/localStorage';
import { deleteItem } from '../../utils/localStorage';

import styles from './Items.module.css';

class Items extends React.Component {
  state = { items: [] };

  setElements = () => {
    if (this.props.mode === true) {
      const items = getItems().filter((e) => !e.status);
      this.setState({ items: items });
    } else {
      this.setState({ items: getItems() });
    }
  };

  componentDidMount() {
    this.setElements();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shouldUpdate !== this.props.shouldUpdate) {
      this.setElements();
      this.props.update(false);
    }

    if (prevProps.mode !== this.props.mode) {
      this.setElements();
    }
  }

  deleteItem = (index) => {
    deleteItem(index);
    this.setElements();
  };

  render() {
    return (
      this.state.items.length > 0 && (
        <div className={styles.items}>
          {this.state.items &&
            this.state.items.map((e) => (
              <Item key={e.id} {...e} update={this.props.update} deleteItem={this.deleteItem} />
            ))}
        </div>
      )
    );
  }
}

export default Items;
