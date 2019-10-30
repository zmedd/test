import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserList from "./UserList";
import users from "./getUsers";

Enzyme.configure({ adapter: new Adapter() });

var node, component;
beforeEach(function() {
  node = document.createElement("div");
  component = ReactDOM.render(<UserList usrs={users} />, node);
});

it("should update the state of the component when the value prop is changed", function() {
  ReactDOM.render(<UserList usrs={component.props.usrs} />, node);
  expect(component.props.usrs).toBe(users);
});
