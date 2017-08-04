import React from 'react';
import { Link } from 'react-router';
require('../assets/css/404/style.css')
var ErrorPage = React.createClass({
    render() {
        return (
            <div className="errorPage">
                <div className="errorH">
                    <div className="logo_bgf"><img src={require("../assets/img/404/error_logo.png")} /></div>
                    <span className="error_line"></span>
                </div>
                <div className="errorM">
                    <h2>抱歉！当前页面无法访问 <hr /></h2>
                    <ul className="contact">
                        <li>需要帮助请联系</li>
                        <li className="tel">0063-9273333168</li>
                        <li className="ema">cs@tbet.com</li>
                    </ul>
                    <div className="btn_list">
                        <Link to="/"><img src={require("../assets/img/404/error_home.png")} /></Link >
                        <Link onClick={this.goBack}>
                        <img src={require("../assets/img/404/error_back.png")} />
                        </Link>
                    </div>
                </div>       
            </div>
        )
    },
    goBack(){
        this.props.history.goBack();
    }
})
export default ErrorPage;