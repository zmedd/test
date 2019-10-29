import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";
import Search from "./Search";
import users from "./getUsers";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    // Set some state
    this.state = {
      usr: users
    };
  }
  searchUsers(event) {
    const myEl = event.target.value;
    setTimeout(() => {
      users.forEach(user => {
        let un = user.name.toLowerCase();
        if (un.includes(myEl.toLowerCase())) {
          user.show = true;
        } else {
          user.show = false;
        }
      });
      this.setState({ usr: users });
    }, 300);
  }
  deleteUser = id => {
    this.setState({
      usr: [...this.state.usr.filter(user => user.id !== id)]
    });
  };
  render() {
    return (
      <div className="cont">
        <h1>User List</h1>
        <Search usr={this.state.usr} searchUsr={this.searchUsers} />
        <UserList usrs={this.state.usr} delete={this.deleteUser} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
