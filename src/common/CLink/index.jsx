import { useNavigate, useLocation } from 'react-router-dom'
import { notification } from 'antd'

import StyledLink from './styled'

const CLink = props => {
    const { linkTxt, url, type } = props

    // 缓存当前路径（默认为 /）
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const openNotification = (type, message) => {
        notification[type]({
            message,
            description: ' ',
            placement: 'top',
        })
    }

    const goto = () => {
        // 当前触发项存在 url 且 不同于当前路由（防止同一路径多次触发）
        if (url) {
            if (url !== pathname) {
                navigate(url)
            } else {
                openNotification('warning', '就在目的地呀！')
            }
        } else {
            // 当前触发项不存在 url，进行报警
            openNotification('warning', '内测中，敬请期待！')
        }
    }

    return (
        <StyledLink url={url || '/#'} type={type} onClick={() => goto()}>
            {linkTxt}
        </StyledLink>
    )
}

export { CLink }
