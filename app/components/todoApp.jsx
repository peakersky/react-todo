var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = require('TodoList');

var TodoApp = React.createClass ({
  getInitialState: function () {
    return {
        todos: [
        {
          id: 1,
          text: 'walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Bark'
        }, {
          id: 4,
          text: 'Stay calm'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
 })


module.exports = TodoApp;
