import React from 'react';
import Nav from '../components/nav' //导航
require('../assets/css/live_plat/style.css');

// 容器
var LiveContainer = React.createClass({
    render() {
        return (
            <div className='clothing'>
                <div className="subBanner">
                    <div className="ban_item">
                        <img alt="加载失败..." src={require('../assets/img/live_plat/subBanner2.jpg')} />
                    </div>
                </div>
                <div className="liveCasino w1200">
                    <ul className="liveCasino_item">
                        <li>
                            <a >
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img1.jpg')} />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand ">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ele_game4Icon.png')} />
                                    </div>
                                    <h2>AG国际</h2>
                                </div>
                                <i className="liveCasino_tip">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/international.png')}  />
                                </i>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img2.jpg')}  />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ele_game4Icon.png')}  />
                                    </div>
                                    <h2>AG极速</h2>
                                </div>
                                <i className="liveCasino_tip">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/livecasino.png')}  />
                                </i>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img3.jpg')} />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ele_game5Icon.png')} width="65" />
                                    </div>
                                    <h2>BBIN</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img4.jpg')} />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand tip">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ele_game2Icon.png')} />
                                    </div>
                                    <h2>PT平台</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img5.jpg')} />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ele_game1Icon.png')} />
                                    </div>
                                    <h2>MG平台</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img6.jpg')}  />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand ebet">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ebet.png')}  />
                                    </div>
                                    <h2>EBET平台</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img7.jpg')}  />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/ea.png')}  />
                                    </div>
                                    <h2>EA平台</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/live_img8.jpg')}  />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/xiaojin.png')} />
                                    </div>
                                    <h2>小金真人</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/livegame_gpi.jpg')} />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/logo_gpi.png')} />
                                    </div>
                                    <h2>GPI平台</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/tgp_landing.shtml" className="pdhref">
                                <div className="liveItem_img">
                                    <img alt="加载失败..." src={require('../assets/img/live_plat/livegame_tgp.jpg')} />
                                </div>
                                <div className="liveItem_desc ele_listDetailed">
                                    <div className="live_listBrand">
                                        <img alt="加载失败..." src={require('../assets/img/live_plat/logo_tgp.png')} />
                                    </div>
                                    <h2>TGP平台</h2>
                                </div>
                                <span className="cover"></span>
                            </a>
                        </li>
                    </ul>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>

        )
    }
});

var LivePlat = React.createClass({
    render() {
        return (
            <div>
                <Nav />
                <LiveContainer />
            </div>
        )
    }
})
export default LivePlat;