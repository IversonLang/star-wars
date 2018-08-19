import * as React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    title: ""
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/say/hello");
    this.setState({
      title: res.data
    });
  }

  // componentDidMount() {
  //   axios.get("http://localhost:8080/say/hello").then((res: any) => {
  //     this.setState({
  //       title: res.data
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
