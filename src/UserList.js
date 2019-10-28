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
      <ul className="ui middle aligned divided list">
        {this.props.usrs.map(user => {
          return (
            <li
              key={user.id}
              className="item"
              style={user.show === true ? v : h}
            >
              <h3
                className="content"
                onClick={this.onClickEmitter}
                data-name={user.name}
              >{`${user.name} ${
                user.othersClicked > 0 ? " - " + user.othersClicked : ""
              }`}</h3>
              <button
                data-id={user.id}
                onClick={this.props.delete}
                className="right floated content circular ui icon button"
              >
                <i className="close icon"></i>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
