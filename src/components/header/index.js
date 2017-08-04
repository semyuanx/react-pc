//  公用头部 
import React from 'react';
import { Link } from 'react-router';
import '../../assets/css/header/style.css';

// 未登录状态
var NoLoginHeader = React.createClass({
    render(){
        return (
            <div className="head_right">
                <div className="head_login" style={{"border":0}}>
					<div className="head_loginInput">
					    <input type="text" placeholder="帐号" id="h_username" />
					    <input type="password" placeholder="密码" id="h_userpwd" style={{marginLeft:"5px"}} />
					    <div className="clear"></div>
					</div>
					<div className="head_loginCode">
					    <div className="input-group">
					        <input type="text" className="form-control" placeholder="验证码" id="h_code" />
					        <span className="hade_code" id="hade_code">
                                <img alt="验证码" src="/public/captcha.do?' + Math.random() + '" alt="加载中..." />
                            </span>
					        <div className="clear"></div>
				        </div>
				        <a className="hade_go" id="hade_go">登 录</a>
                        <Link to="/register.html" className="h_reg">注 册</Link>
                         <Link to="/forgot_pwd.html" className="h_fotgot">忘记密码</Link>
				    </div>
                </div>
            </div>
        )
    }
}) 

//登录状态
var LoginHeader = React.createClass({
    render(){
        return (
            <div className="head_right">

            </div>
        )
    }
})

var Header = React.createClass({
    render(){
        return (
            <div className="head">
                <div className="w1200">
                    <div className="head_left">
                        <a href="/"><img src={require('../../assets/img/header/logo.png')} alt="T博娱乐" /></a>
                    </div>
                    <NoLoginHeader />
                </div>                
            </div>
        )
    }
})
export default Header;
