import React from 'react';
import style from './Item.module.css';
import { changeItemStatus } from '../../../utils/localStorage';

class Item extends React.Component {
  toggleStatus = () => {
    changeItemStatus(this.props.id);
    this.props.update(true);
  };

  onDelete = () => {
    this.props.deleteItem(this.props.id);
  };

  render() {
    return (
      <div className={style.container + ` ${this.props.status ? style.active : ''}`}>
        <input type="checkbox" checked={this.props.status} className={style.check} onClick={this.toggleStatus} />
        <div className={style.description__block}>
          <h1 className={style.name}>{this.props.name}</h1>
          {this.props.description && <p className={style.description}>{this.props.description}</p>}
        </div>
        <div className={style.date}>{this.props.date}</div>
        <div className={style.delete} onClick={this.onDelete}>
          Удалить
        </div>
      </div>
    );
  }
}

export default Item;
