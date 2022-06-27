import CallusStyle from './styled'
import { CLink } from '../../../common'

const Callus = () => {
    return (
        <CallusStyle>
            <div className='sectionFour'>
                <div className='box'>
                    <div className='input'>
                        <CLink
                            linkTxt='联系我们'
                            url='callUs'
                            type='callUsButton'
                        />
                    </div>
                </div>
            </div>
        </CallusStyle>
    )
}

export default Callus
