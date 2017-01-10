var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass ({
  render: function () {

    var renderTodos = () => {
      var {todos} = this.props;
      // iterate through every todo and print it on screen.
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      })
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
 })


module.exports = TodoList;
