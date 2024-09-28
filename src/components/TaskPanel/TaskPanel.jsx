import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import { setItem } from '../../utils/localStorage';

import styles from './TaskPanel.module.css';
import { getTime } from '../../utils/getTime';

class TaskPanel extends React.Component {
  state = { name: '', description: '' };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onClick = () => {
    if (this.state.name !== '') {
      const item = { name: this.state.name, description: this.state.description, date: getTime(), status: false };
      setItem(item);
      this.setState({ name: '', description: '' });

      this.props.update(true);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.top__wrapper}>
          <Input value={this.state.name} onChange={this.changeName} />
          <button className={styles.add__button} onClick={this.onClick}>
            Add
          </button>
        </div>
        <TextArea onChange={this.changeDescription} value={this.state.description} />
      </div>
    );
  }
}

export default TaskPanel;
