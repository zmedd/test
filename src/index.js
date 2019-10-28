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
      usr: users,
      loaded: 0
    };
    this.deleteUser = this.deleteUser.bind(this);
  }
  searchUsers(event) {
    users.forEach(user => {
      let un = user.name.toLowerCase();
      if (un.includes(event.target.value.toLowerCase())) {
        user.show = true;
      } else {
        user.show = false;
      }
    });
    this.setState({ loaded: this.state.loaded + 1 });
  }
  deleteUser(user) {
    users.splice(user.id, 1);
    console.log(users.length);
    this.setState({ loaded: this.state.loaded + 1 });
  }
  render() {
    return (
      <div className="cont">
        <h1>Users List</h1>
        <Search usr={this.state.usr} searchUsr={this.searchUsers} />
        <UserList usrs={this.state.usr} delete={this.deleteUser} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
