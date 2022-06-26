import StledService from './styled'

import { CLink } from '../../../common'

import collect from '../../../assets/images/collect.jpg'
import bigdata from '../../../assets/images/bigdata.jpg'

const CService = () => {
    return (
        <StledService>
            <div className='section-header'>数据服务</div>
            <div className='framework serve'>
                <div className='serve-item'>
                    <img src={collect} alt='数据采集能力图片' />
                    <br />
                    <CLink linkTxt='数据采集能力' type='homeItem' />
                </div>
                <div className='serve-item'>
                    <img src={bigdata} alt='大数据服务' />
                    <br />
                    <CLink linkTxt='大数据服务' type='homeItem' />
                </div>
            </div>
        </StledService>
    )
}

export { CService }
