import React from 'react';
import Nav from '../components/nav' //导航
require('../assets/css/register/style.css')
/**
 * 注册
 */

//  注册DOM
var RegisterDOM = React.createClass({
    render() {
        return (
            <div>
                <div className="subBanner">
                    <div className="ban_item">
                        <img src={require("../assets/img/register/register.jpg")} />
                    </div>
                </div>
                <div className="register">
                    <div className="reg_title" id="regtop">20秒完成免费注册 感谢您选择了T博娱乐，我们将带领您体验在线博彩乐趣！</div>
                    <div className="reg_main w1200">
                        <h2 className="regM_title">填写用户信息<span>&nbsp;&nbsp;*&nbsp;为必填项</span></h2>
                        <div className="regM_main">
                            <div className="reg_from" id="reg_from">
                                <div className="reg_group">
                                    <label ><b>*</b>用户名：</label>
                                    <input type="text" name="reg_name" id="reg_name" placeholder="输入用户名" />
                                    <div className="reg_info" id="reg_info"><span className="fast">首位必须为字母,用户名必须由6-10个字母和数字组成</span></div>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group">
                                    <label ><b>*</b>密码：</label>
                                    <input type="password" name="reg_password" placeholder="输入密码" id="reg_password" />
                                    <div className="reg_info"><span className="fast">密码由8-15个英文或数字组成</span></div>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group">
                                    <label><b>*</b>确认密码：</label>
                                    <input type="password" id="reg_aginpawd" placeholder="再次输入密码" />
                                    <div className="reg_info"><span className="fast">密码由8-15个英文或数字组成</span></div>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group">
                                    <label ><b>*</b>手机号：</label>
                                    <input type="text" id="reg_phone" placeholder="手机号" />
                                    <div className="reg_info"><span className="fast">输入您的手机号</span></div>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group">
                                    <label ><b>*</b>邮箱：</label>
                                    <input type="text" id="reg_email" placeholder="邮箱地址"  />

                                    <div className="reg_info"><span className="fast">输入您常用邮箱</span></div>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group">
                                    <label >QQ号：</label>
                                    <input type="text" id="reg_qq" placeholder="请输入QQ号" />
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group">
                                    <label >推荐码：</label>
                                    <input type="text" id="reg_refeCode" placeholder="请输入推荐码" />
                                    <span className="fast row_2">注意区分大小写，没有可不填<br />(推荐好友注册您可以享受获取丰厚的奖金，详情请点击优惠页面或联系在线客服进行了解)</span>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_group code">
                                    <label ><b>*</b>验证码：</label>
                                    <input type="text" id="reg_code" placeholder="请输入验证码" />
                                    <span className="code" id="code_img"></span>
                                    <p className="chageCode">看不清？
									<a id="chageCode">换一张</a>
                                    </p>
                                </div>
                                <div className="h25"></div>
                                <div className="reg_tarea form-control">
                                    本公司是合法互联网路交易机构，现提醒有意参与本公司所有游戏之客户，应注意其国家或居住地区的相关法律规定，如有疑问，应就相关问题寻求当地法律意见。
交易声明<br/>
1、如客户对本游戏有任何问题或疑问时，请立即停止游戏，并即时与你的上线代理联络跟进事件．如客户仍继续参与游戏，即表示客户了解及接受所发生的问题，本公司有权在这问题上不做出任何解释或跟进，敬请客户留意！<br/>
2、请用户确保处于稳定网络环境下进行本游戏，因网络速度问题而出现不稳定情况，客户必须理解及接受。本公司不接受使用无线上网卡客户投诉<br/>
3、所有因网络因素引起的“投注是否成功”问题，最终结果会以本公司的资料库数据，相等于客户投注前台右下方的“记录”功能内所显示的投注记录为准，用户不得异议。<br/>
4、倘若发生不可抗拒的灾害或人为的入侵破坏行为，而导致网站故障，资料损坏，数据丢失等情况，会以本网站的最终数据为最后处理数据．为确保各方的真实利益，请各会员保留或列印投注资料，本网站才接受投诉及处理。<br/>
5、本公司保留判定任何涉嫌以非正常方式进行投注的客户投注无效之权利。<br/>
6、因人为而导致的发牌错误，如： 1) 发牌方向或次序错误。 2) 不正确之显示或结果 (此情况会发生於发牌时连发两张或以上的牌 ) 本公司会按照正常的「牌理」和次序还原至正确的结果，最终结果将按还原至正确的结果计算。
责任声明。<br/>
7、用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。<br/>
							</div>
                                <div className="h25"></div>
                                <div className="reg_check">
                                    <input type="checkbox" id="deal" />
                                    <label >我已满18周岁，并且以阅读及同意《T博娱乐游戏协议条款》</label>
                                </div>
                                <div className="h25"></div>
                                <a className="reg_btn">提交</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})


var Register = React.createClass({
    render() {
        return (
            <div>
                <Nav />
                <RegisterDOM />
            </div>
        )
    }
})
export default Register;