import React from "react";
import users from "./getUsers";

const v = { display: "block" };
const h = { display: "none" };

export default class UserList extends React.Component {
  state = {
    clicked: 0
  };
  onClickEmitter = e => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].name !== e.target.getAttribute("data-name")) {
        users[i].othersClicked += 1;
      }
    }
    this.setState({ clicked: this.state.clicked + 1 });
  };

  render() {
    return (
      <ul className="ui list">
        {this.props.usrs.map(user => {
          return (
            <li
              className="item"
              key={user.id}
              onClick={this.onClickEmitter}
              data-name={user.name}
              style={user.show === true ? v : h}
            >
              {`${user.name} ${
                user.othersClicked > 0 ? " - " + user.othersClicked : ""
              }`}
            </li>
          );
        })}
      </ul>
    );
  }
}
