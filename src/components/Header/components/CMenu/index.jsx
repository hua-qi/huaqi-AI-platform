import { Menu } from 'antd'

import { CLink } from '../index'

const dataservices = (
    <Menu
        items={[
            {
                key: 'data-collection',
                label: <CLink linkTxt='数据采集能力' />,
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

export { dataservices }
