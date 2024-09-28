import React from 'react';
import styles from './TextArea.module.css';

class TextArea extends React.Component {
  render() {
    return (
      <textarea
        type="text"
        rows={3}
        className={styles.textarea}
        placeholder="Description"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TextArea;
