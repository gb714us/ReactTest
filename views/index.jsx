var React = require('react');

var style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notChecked: {
    textDecoration: 'none'
  },
  tableContent: {
    border: "1px solid black"
    }
};


var TodoBox = React.createClass({
  // Omitted
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data}/>
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todo = this.props.data.map(function(obj){
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
      });
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function(){
    return {checked: false, style: style.notChecked};
  },
  // Write code here
  handleChange: function(e){
    this.setState({checked: e.target.checked});
    if (e.target.checked) {
          this.setState({
            TodoStyle: style.checkedTodo
          });
        } else {
          this.setState({
            TodoStyle: style.notCheckedTodo
          });
        }
    // e.target.checked ? this.setState({style: style.checkedTodo})
    //                   : this.setState({style: style.notChecked});
  },
  protoTypes: {
    title: React.PropTypes.number.isRequired
  },
  render: function(){
    return (
      <tr style={this.state.style}>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
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
