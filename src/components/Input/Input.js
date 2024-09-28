import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        className={styles.input}
        placeholder="Name"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
