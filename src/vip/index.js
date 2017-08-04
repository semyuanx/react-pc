import React from 'react';
import Nav from '../components/nav'; // 导航
import VIPItem from './vip_item'; //vip子选项
require('../assets/css/vip/style.css');

var VIPDOM = React.createClass({
    getInitialState:function(){
        return {
            active:0
        }
    },
    render(){
        return (
            <div className="clothing">
                <div className="subBanner">
                    <div className="ban_item">
                        <img src={require('../assets/img/vip/subBanner8.jpg')} />
                    </div>
                </div>
                <div className="vip w1200">
                    <div className="vip_pt50"></div>
                    <div className="vip_item">
						<ul className="vip_itemIcon">
							<li onClick={()=>{this.setState({active:0})}} className={this.state.active===0?'on laohu':'laohu' } ></li>
							<li onClick={()=>{this.setState({active:1})}} className={this.state.active===1?'on fanshui':'fanshui'}></li>
						</ul>
					</div>
                    <div style={{clear: 'both'}}></div>
                    <div className="vip_subItem ">
                        <VIPItem active={this.state.active} />
                    </div>
                </div>
            </div>
        )
    }
})
var VIP = React.createClass({
    render(){
        return (
            <div>
                <Nav />
                <VIPDOM />
            </div>
        )
    }
})
export default VIP;