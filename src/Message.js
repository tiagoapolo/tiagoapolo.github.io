// Create a component named MessageComponent
var MessageComponent = React.createClass({
    render: function() {
      return (
        <div>{this.props.message}</div>
      );
    }
  });
  
  // Render an instance of MessageComponent into document.body
  ReactDOM.render(
    <MessageComponent message="Hello!" />,
    document.body
  );