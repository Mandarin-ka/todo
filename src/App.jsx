import React from 'react';

import './app.css';
import Items from './components/Items/Items';
import TaskPanel from './components/TaskPanel/TaskPanel';
import Filtration from './components/Filtration/Filtration';

class App extends React.Component {
  state = { shouldUpdate: false, isAll: false };

  changeMode = () => {
    this.setState({ isAll: !this.state.isAll });
  };

  changeState = (value) => {
    this.setState({ shouldUpdate: value });
  };

  render() {
    return (
      <div className="App">
        <TaskPanel shouldUpdate={this.state.shouldUpdate} update={this.changeState} />
        <Filtration mode={this.state.isAll} changeMode={this.changeMode} />
        <Items shouldUpdate={this.state.shouldUpdate} update={this.changeState} mode={this.state.isAll} />
      </div>
    );
  }
}

export default App;
