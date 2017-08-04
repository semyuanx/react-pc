import React from 'react';
import Footer from './components/footer'; // 头部
import Header from './components/header'; // 底部



var Container = React.createClass({
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
})
export default Container;