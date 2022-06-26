import { Space, Dropdown } from 'antd'

import { StyledHeader } from './styled'
import { CLink } from '../../common'
import {
    computerVision,
    dataservices,
    languageProcessing,
    solution,
} from './CMenu'

const dropdownItem = [
    {
        key: 'vision',
        overlay: computerVision,
        itemTxt: '计算机视觉',
    },
    {
        key: 'language',
        overlay: languageProcessing,
        itemTxt: '自然语言处理',
    },
    {
        key: 'data',
        overlay: dataservices,
        itemTxt: '数据服务',
    },
    {
        key: 'scheme',
        overlay: solution,
        itemTxt: '解决方案',
    },
]

const FormatHeader = () => {
    return (
        <StyledHeader>
            <div className='header-menu'>
                <CLink linkTxt='huaqi AI 平台' url='/' type='logo' />
                <Space className='menu' size={30}>
                    <CLink linkTxt='首页' url='/' type='headerItem' />
                    {dropdownItem.map(item => {
                        return (
                            <Dropdown
                                overlay={item.overlay}
                                key={item.key}
                                placement='bottom'
                            >
                                <div className='item'>{item.itemTxt}</div>
                            </Dropdown>
                        )
                    })}
                    <CLink linkTxt='联系我们' url='/callUs' type='headerItem' />
                </Space>
            </div>
        </StyledHeader>
    )
}

export { FormatHeader }
