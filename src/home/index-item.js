import React from 'react';
var Item = React.createClass({
    render(){
        return (
            <div className="i_game w1200 clearFlex">
				<ul className="i_gameItem">
					<li>
						<a href="/livecasino.shtml">
							<img src={require('../assets/img/home/i_gameBan.jpg')}/>
							<span></span>
						 </a>
					</li>
					<li>
						<a href="sports.shtml">
							<img src={require('../assets/img/home/i_gameBan2.jpg')}  />
							<span></span>
						</a>
					</li>
					<li>
						<a href="lottery.shtml">
							<img src={require('../assets/img/home/i_gameBan3.jpg')} />
							<span></span>
						</a>
					</li>
					<li>
						<a href="pt.shtml" className="pdhref">
							<img src={require('../assets/img/home/i_gameBan4.jpg')} />
							<span></span>
						</a>
					</li>
				</ul>
			</div>
        )
    }
});
export default Item;