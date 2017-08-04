import React from 'react';
import Carousel from './carousel';     // 轮播
import Nav from '../components/nav' //导航
import IndexItem from './index-item.js'; // 底部跳转url
var Index = React.createClass({
    render(){
        return (
            <div>
                <Nav />
                <Carousel />
                <IndexItem />
            </div>
        )
    }
})
export default Index;