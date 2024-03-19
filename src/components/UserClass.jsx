import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akashaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
