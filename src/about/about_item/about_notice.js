import React from 'react';

var AboutNotice = React.createClass({
    render(){
        return (
            <div className="rule_notice">
                <h2>最新公告</h2>
				<div className="noticeList" id="noticeList">
				</div>
            </div>
        )
    }
})
export default AboutNotice;