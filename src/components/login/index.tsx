import * as React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    title: ""
  };

  componentDidMount() {
    axios.get("http://localhost:8080/say/hello").then(response => {
      this.setState({
        title: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
