import { Space, Dropdown } from 'antd'

import { StyledHeader } from './styled'
import { dataservices } from './components'

const dropdownItem = [
    {
        key: 'vision',
        overlay: dataservices,
        itemTxt: '计算机视觉',
    },
    {
        key: 'language',
        overlay: dataservices,
        itemTxt: '自然语言处理',
    },
    {
        key: 'data',
        overlay: dataservices,
        itemTxt: '数据服务',
    },
    {
        key: 'scheme',
        overlay: dataservices,
        itemTxt: '解决方案',
    },
]

const FormatHeader = () => {
    return (
        <StyledHeader>
            <div className='header-menu'>
                <a className='logo' href='/#'>
                    huaqi AI 平台
                </a>

                <Space className='menu' size={30}>
                    <a className='link' href='/#'>
                        首页
                    </a>
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
                    <a className='link' href='/#'>
                        联系我们
                    </a>
                </Space>
            </div>
        </StyledHeader>
    )
}

export { FormatHeader }
