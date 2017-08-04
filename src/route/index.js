import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import Container from '../container.js'; //页面容器
import Home from '../home';     //首页
import LivePlat from '../live_plat'; //真人平台
import Sports from '../sports';  //体育投注
import Lottery from '../lottery';    //彩票
import VIP from '../vip'; //vip尊享
import Activity from '../activity'; //优惠活动
import Egame from '../egame'; //电子游戏
import MyCenter from '../my_center'; //个人中心
import InMail from '../in_mail'; //站内信
import ErrorPage from '../404'; // 404页面
import About from '../about'; //关于我们
import Register from '../register'; //注册页面
import ForgotPwd from '../forgot_pwd';//忘记密码

// 获取登录状态
const Login = true;
// 路由钩子 验证是否登录
function isLogin(nextState, replaceState) {
    if (!Login) {
        alert("暂时没有登录")
        replaceState('/')
    }
}
//验证未登录
function noLogin(nextState,replaceState){
    if(Login){
        replaceState('/')
    }
}


// 路由配置
const Routes = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Container} >
                    <IndexRoute component={Home} />
                    {About}
                    <Route path="/liveplat.html" component={LivePlat} onEnter={isLogin} />
                    <Route path="/sports.html" component={Sports} onEnter={isLogin} />
                    <Route path="/lottery.html" component={Lottery} onEnter={isLogin} />
                    <Route path="/vip.html" component={VIP} />
                    <Route path="/activity.html" component={Activity} />
                    <Route path="/egame.html" onEnter={isLogin}>
                        {Egame}
                    </Route>
                    <Route onEnter={isLogin} >
                        {MyCenter}
                    </Route>
                    <Route path="/inmail.html" component={InMail} onEnter={isLogin} />
                    <Route path='/register.html' component={Register}  />
                    <Route path='/forgot_pwd.html' component={ForgotPwd}  />
                    <Route path='/404.html' component={ErrorPage} />
                    <Redirect from='*' to='/404.html' />
                </Route>
            </Router>
        )
    }
})
export default Routes;