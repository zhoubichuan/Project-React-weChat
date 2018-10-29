import React, { Component } from "react";
import MessageList from "./MessageList/MessageList";
import Header from "../../base-page/Header";
import Footer from "../../base-page/Footer";
import "./Message.css";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      messageShow: false,
      message: [
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44"
        }
      ]
    };
  }
  handleClick = () => {
    this.setState({
      messageShow: true
    });
  };
  render() {
    return (
      <div>
        <Header>
          <li />
          <li>微信</li>
          <li>更多</li>
        </Header>
        <div className={"message"}>
          {!this.state.messageShow && (
            <div>
              <div className={"top"}>
                <input />
              </div>
              <div className={"content"}>
                <ul>
                  {this.state.message.map((item, index) => (
                    <li key={index} onClick={this.handleClick}>
                      <div className={"left"}>
                        <img src={item.ico} alt="" />
                        <div>
                          <p>{item.title}</p>
                          <p>{item.tips}</p>
                        </div>
                      </div>
                      <div className={"right"}>{item.time}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {this.state.messageShow && <MessageList />}
        </div>
        {!this.state.messageShow && <Footer />}
      </div>
    );
  }
}
export default Message;