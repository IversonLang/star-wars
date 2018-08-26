import * as React from "react";
import axios from "axios";

export default class Register extends React.Component {
    state = {
        name: '',
        passwd: ''
    }

    constructor(props: any) {
        super(props);
        this.handleNameOnChage = this.handleNameOnChage.bind(this);
        this.handlePasswdOnChage = this.handlePasswdOnChage.bind(this);
    }

    handleNameOnChage(event: any) {
        this.setState({
            name: event.target.value
        })
    }

    handlePasswdOnChage(event: any) {
        this.setState({
            passwd: event.target.value
        })
    }

    handleBtnSubmit() {
        axios.post('/http://localhost:8080/account/register', {
            name: this.state.name,
            passwd: this.state.passwd
        }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <input placeholder='账号' value={this.state.name} onChange={this.handleNameOnChage}></input>
                <input placeholder='密码' value={this.state.passwd} onChange={this.handlePasswdOnChage}></input>
                <button onClick={this.handleBtnSubmit}>注册</button>
            </div>
        )
    }
}