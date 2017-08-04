import React from 'react';
// 老虎机俱乐部
var VIPSlot = React.createClass({
    render() {
        return (
            <li>
                <div className="vip_pt50"></div>
                <div className="vip_title"><img alt="VIP" src={require('../assets/img/vip/vip_title2.png')} /></div>
                <div className="vip_101"><img alt="VIP" src={require('../assets/img/vip/vip201.png')} /></div>
                <div className="vip_102"><img alt="VIP" src={require('../assets/img/vip/vip202.png')}  /></div>
                <div className="vip_103"><img alt="VIP" src={require('../assets/img/vip/vip203.png')} /></div>
                <div className="vip_104"><img alt="VIP" src={require('../assets/img/vip/vip104.png')} /></div>
                <div className="vip_105"><img alt="VIP" src={require('../assets/img/vip/vip106.png')} /></div>
            </li>
        )
    }
})

// 返水俱乐部
var VIPRelease = React.createClass({
    render() {
        return (
            <li>
                <div className="vip_pt50"></div>
                <div className="vip_title"><img alt="VIP" src={require('../assets/img/vip/vip_title2.png')}  /></div>
                <div className="vip_101"><img alt="VIP" src={require('../assets/img/vip/vip101.png')}  /></div>
                <div className="vip_102"><img alt="VIP" src={require('../assets/img/vip/vip102.png')} /></div>
                <div className="vip_103"><img alt="VIP" src={require('../assets/img/vip/vip103.png')} /></div>
                <div className="vip_104"><img alt="VIP" src={require('../assets/img/vip/vip104.png')} /></div>
                <div className="vip_105"><img alt="VIP" src={require('../assets/img/vip/vip105.png')} /></div>
            </li>
        )
    }
})

var VIPItem = React.createClass({
    render() {
        let { active } = this.props;
        var dom = "";
        if (active === 0) {
            dom = <VIPSlot />;
        } else {
            dom = <VIPRelease />;
        }
        return (
            <div className="vip_subItem ">
                <ul className="vip_subContent">
                    {dom}
                </ul>
            </div>
        )
    }
})
export default VIPItem;
