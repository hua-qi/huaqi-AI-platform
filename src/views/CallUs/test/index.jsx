import './styled.css'
import Address from '../CAddress'
import WeiBo from '../../../assets/images/weibiaoti-.png'
const Contact = () => {
    return (
        <div className='ContactUs'>
            <div class='banner'></div>

            <div class='section'>
                <div class='sectionOne'>
                    <div class='top'>
                        <div class='lianxi'>联系方式</div>
                        <div class='contactus'>CONTACT US</div>
                    </div>
                    <div class='box'>
                        <div class='boxOne'>
                            <img src={WeiBo} alt='' /> 手机：18633900235
                        </div>
                        <div class='boxTwo'>
                            <img
                                src={require('../../../assets/images/QQ.png')}
                                alt=''
                            />{' '}
                            QQ ：1751404481
                        </div>
                        <div class='boxThree'>
                            <img
                                src={require('../../../assets/images/dizhi.png')}
                                alt=''
                            />{' '}
                            地址：河北省石家庄市方大科技园
                        </div>
                    </div>
                </div>
                <div class='sectionTwo'>
                    <div class='top'>
                        <div class='zuobiao'>地理坐标</div>
                        <div class='coordinate'>COORDINATE</div>
                    </div>
                    <div id='container'>
                        <Address />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Contact }
