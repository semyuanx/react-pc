import React from 'react';
import Nav from '../components/nav'; // 导航
import { Link } from 'react-router'


var AboutContainer = React.createClass({
    render() {
        return (
            <div>
                <Nav />
                <div className="clothing">
                    <div className="subBanner">
                        <div className="ban_item">
                            <img src={require('../assets/img/about/subBanner7.jpg')} alt="关于我们" />
                        </div>
                    </div>
                    <div className="rule w1200">
                        <div className="rule_left">
                            <ul className="rule_item">
                                <li><Link activeClassName="active" to="/about_us.html">关于我们</Link></li>
                                <li><Link activeClassName="active" to="/notice.html">最新公告</Link></li>
                                <li><a href="http://aff.tbetdl.com/" target="_blank">合作代理</a></li>
                                <li><Link activeClassName="active" to="/duty.html">博彩责任</Link></li>
                                <li><Link activeClassName="active" to="/question.html">常见问题</Link></li>
                                <li><Link activeClassName="active" to="/safetys.html">隐私安全</Link></li>
                                <li><Link activeClassName="active" to="/contact_us.html">联系我们</Link></li>
                                <li><Link activeClassName="active" to="/clause.html">条款与协议</Link></li>
                            </ul>
                        </div>
                        <div className="rule_right">
                            {this.props.children}
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                </div>
            </div>
        )
    }
})

export default AboutContainer;