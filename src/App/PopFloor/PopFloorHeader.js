import React, { Component } from "react";

class PopFloorHeader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className={"header"}>
        <span className={"cancle"}>取消</span>
        <h1 className={"title"}>发红包</h1>
        <span className={"more"}>...</span>
      </header>
    );
  }
}
export default PopFloorHeader;
