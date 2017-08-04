import React from 'react';
import Nav from '../components/nav'; // 导航
require('../assets/css/sports/style.css')

// 彩票Dom节点
var LotteryDOM = React.createClass({
    render() {
        return (
            <div className="clothing">
                <div className="subBanner">
                    <div className="ban_item">
                        <img alt="加载中..." src={require('../assets/img/lottery/subBanner4.jpg')} />
                    </div>
                </div>
                <div className="xiaojin w1200">
                    <div className="xiaojin_left" style={{ width: '850px' }}>
                        <a>
                            <img alt="加载中..." src={require('../assets/img/lottery/lottery2_2.jpg')} style={{ height: '500px' }} />
                        </a>
                    </div>
                    <div className=" xiaojin_right" style={{ width: '320px' }}>
                        <a>
                            <img alt="加载中..." src={require('../assets/img/lottery/lottery1.jpg')} style={{ height: '500px' }} />
                        </a>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        )
    }
})

var Lottery = React.createClass({
    render() {
        return (
            <div>
                <Nav />
                <LotteryDOM />
            </div>
        )
    }
})
export default Lottery;