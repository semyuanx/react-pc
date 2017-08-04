import React from 'react';
import Nav from '../../components/nav'; // 导航
import GameNav from '../game_nav'; // 游戏导航

//pt 头部
var PTHeader = React.createClass({
    render(){
        return(
            <div className="subBanner w1200 pt">
                <div className="ptBanr_con">
                    <div className="ptBanr_up">
                        <h2 className="animateNum" id="allCount" data-value="" data-type="number" data-option="money"></h2>
                        <div className="pt_carousel fl">
                        </div>
                        <ul className="down_icon fr">
                            <li className="pc_down">
                                <a target="_blank" href="http://cdn.win88.co/setupglx.exe">
                                    <img style={{ width: '100%' }} src={require('../../assets/img/egame/xiazaipc.png')} />
                                </a>
                            </li>
                            <li>
                                <div className="ptPhoneDown">
                                    <img src={require('../../assets/img/egame/pcDownright.png')} width="40px" />
                                </div>
                                <p className="phoneCode">
                                    <img style={{ width: '100%' }} src={require('../../assets/img/egame/pt_phoneCode.png')} />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})

// pt游戏
var PTContainer = React.createClass({
    render(){
        return (
            <div style={{height:'500px'}}></div>
        )
    }
}) 

var GPI = React.createClass({
    render() {
        return (
            <div>
                <Nav />
                <PTHeader />
                <GameNav />
                <PTContainer />
            </div>
        )
    }
})
export default GPI;