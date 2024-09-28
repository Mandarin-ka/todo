import React from 'react';
import styles from './Filtrarion.module.css';

class Filtration extends React.Component {
  render() {
    return (
      <div className={styles.wrapper} onClick={this.props.changeMode}>
        <label htmlFor="filter" className={styles.label}>
          Only uncompleted
        </label>

        <input type="checkbox" className={styles.input} id="filter" checked={this.props.mode} />
      </div>
    );
  }
}

export default Filtration;
