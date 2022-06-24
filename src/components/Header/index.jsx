import { useState } from 'react'

import { Menu } from 'antd'

import StyledHeader from './styled'

const items = [
    {
        label: '首页',
        key: 'home',
    },
    {
        label: '计算机视觉',
        key: 'computer-vision',
    },
    {
        label: '自然语言处理',
        key: 'language-process',
    },
    {
        label: '数据服务',
        key: 'data-service',
    },
    {
        label: '解决方案',
        key: ' solution',
    },
    {
        label: '联系我们',
        key: 'contact-us',
    },
]

const FormatHeader = () => {
    const [current, setCurrent] = useState('home')

    const changeItem = e => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    return (
        <StyledHeader>
            <div className='header-menu'>
                <a className='logo' href='/#'>
                    huaqi AI 平台
                </a>
                <Menu
                    className='menu'
                    mode='horizontal'
                    onClick={changeItem}
                    selectedKeys={[current]}
                    items={items}
                />
            </div>
        </StyledHeader>
    )
}

export { FormatHeader }
