import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import users from "./getUsers";

Enzyme.configure({ adapter: new Adapter() });

it("check if component re renders with same props", function() {
    const wrapper = mount(<App />);
    wrapper.setState({ usr: users });
    expect(wrapper.state("updated")).toEqual(0);
});
