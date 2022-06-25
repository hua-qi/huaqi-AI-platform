import { Space, Dropdown, Menu } from 'antd'

import { StyledHeader } from './styled'

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.antgroup.com'
                    >
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.aliyun.com'
                    >
                        2nd menu item
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.luohanacademy.com'
                    >
                        3rd menu item
                    </a>
                ),
            },
        ]}
    />
)

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
                    <Dropdown overlay={menu} placement='bottom'>
                        <div className='item'>计算机视觉</div>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottom'>
                        <div className='item'>自然语言处理</div>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottom'>
                        <div className='item'>数据服务</div>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottom'>
                        <div className='item'>解决方案</div>
                    </Dropdown>
                    <a className='link' href='/#'>
                        联系我们
                    </a>
                </Space>
            </div>
        </StyledHeader>
    )
}

export { FormatHeader }
