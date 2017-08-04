import React from 'react';
import { Link } from 'react-router';
require('../assets/css/my_center/style.css');
/**
 * 个人中心
 */

var MyCenter = React.createClass({
    render() {
        return (
            <div>
                <div className="subBanner2 userIndexBanner">
                    <div className="ban_item">
                        <img src={require('../assets/img/my_center/subBanner9.jpg')} />
                    </div>
                </div>

                <div className="user w1200" >
                    <div className="user_left">
                        <h2>个人中心</h2>
                        <div className="user_name" id="user_name_img" >
                            <Link to="/my_center.html">
                                <p id="user_name" className="fadeIn animated"></p>
                            </Link>
                        </div>
                        <ul className="userL_icon">
                            <li className="mail">
                                <Link to="/inmail.html"><i></i>站内信</Link>
                            </li>
                            <li className="down">
                                <Link to="/down.html"><i></i>站内信</Link>
                            </li>
                            <li className="esc">

                                <a id="out"><i></i>退出</a>
                            </li>
                        </ul>
                        <div style={{ clear: 'both' }}></div>
                        <ul className="user_item">
                            <li>
                                <Link activeClassName="active" to="/recharge.html"><p>账户充值</p></Link>
                            </li>
                            <li>
                                <p>游戏大厅<span className="trian" ></span></p>
                                <ul className="user_gameItem" >
                                    <li className="far_game">
                                        <a href="/pt.shtml">电子游戏</a>
                                    </li>
                                    <li>
                                        <a href="/livecasino.shtml">真人娱乐</a>
                                    </li>
                                    <li>
                                        <a href="/sports.shtml">体育投注</a>
                                    </li>
                                    <li>
                                        <a href="/lottery.shtml">彩票娱乐</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/drawings.html"><p>账户提款</p></Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/detailed.html"><p>账户清单</p></Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/recommend.html"><p>好友推荐</p></Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/activity.html"><p>优惠活动</p></Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/apply_discount.html"><p>优惠申请</p></Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/lotto.html"><p>抽奖活动</p></Link>
                            </li>
                            <li style={{ display: 'none' }}>
                                <p>T博商城</p>
                            </li>
                        </ul>
                    </div>
                    <div className="user_right">
                        <div className="user_module" >
                            <div className="user_con">
                                <i></i>
                                <div className="i_noticeRight">
                                    <marquee id="index_notice" className="i_noticItem" height="30">
                                    </marquee>
                                </div>
                            </div>
                            <div className="user_pay" >
                                <div className="user_remain">
                                    <i></i>
                                    <ul>
                                        <li className="user_remain_cash">
                                            <p>钱包余额</p>
                                            <p className="money" >
                                                ￥<span id="money" ></span>
                                            </p>
                                        </li>
                                        <li className="user_remain_btn">
                                            <div className="user_getBtn">
                                                <a className="pay" href="#/toPay" id="index_cz">充&nbsp;值</a>
                                                <a className="embody" href="#/draw" id="index_tx">提&nbsp;现</a>
                                            </div>
                                            <div style={{clear:'both'}}></div>
                                            <div className="plat_limit_btn">
                                                <Link to="/play_cash.html">查看平台余额</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="user_sign" style={{ float: 'right' }}>
                                    <ul>
                                        <li className="singn_bor" style={{ float: 'right', border: '0' }}>
                                            <div className="singn_con">
                                                <Link activeClassName="active" className="singn_btn" to="/sign_in.html"><i></i><span></span></Link>
                                            </div>
                                        </li>
                                        <li className="" style={{ display: 'none' }}>
                                            <div className="task_con">
                                                <a href="#" className="singn_btn"></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '20px 0' }}>
                            <div className="fadeIn animated">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        )
    }
})

export default MyCenter;