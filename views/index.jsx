var React = require('react');

var style = {
  border: "1px solid black"
};


var TodoBox = React.createClass({
  // Omitted
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function(){
    return {checked: false};
  },
  // Write code here
  handleChange: function(e){
    this.setState({checked: e.target.checked});
  },
  protoTypes: {
    title: React.PropTypes.number.isRequired
  },
  render: function(){
    return (
      <tr>
        <td style={style}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style}>{this.props.title}</td>
        <td style={style}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  // Omitted
  render: function(){
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

module.exports = TodoBox;
