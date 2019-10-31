import React from "react";
import UserList from "./UserList";
import Search from "./Search";
import users from "./getUsers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state = {
      usr: users,
      updated: 0
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
      this.setState({ updated: this.state.updated + 1 });
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
        <UserList
          usrs={this.state.usr}
          delete={this.deleteUser}
          usersTest={this.state.usr}
        />
      </div>
    );
  }
}
