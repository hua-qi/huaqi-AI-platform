import styled, { css } from 'styled-components'

export default styled.div`
    text-align: center;
    color: ${props => (props.url === '/#' ? '#c6c6c6' : '#189eff')};

    ${props =>
        props.type === 'logo' &&
        css`
            /* logo 样式 */
            width: 280px;
            height: 80px;
            line-height: 80px;
            font-size: 28px;
            color: #fff;

            :hover {
                color: #1890ff;
                cursor: pointer;
            }
        `}

    ${props =>
        props.type === 'headerItem' &&
        css`
            /* header menu item 样式 */
            font-size: 14px;
            color: #fff;

            :hover {
                color: #1890ff;
                cursor: pointer;
            }
        `}

    ${props =>
        props.type === 'homeItem' &&
        css`
            /* home 页面 item 样式 */
            font-size: 24px;
            color: #101010;
            font-family: SourceHanSanSC-regular;

            :hover {
                color: ${props => (props.url === '/#' ? '#c6c6c6' : '#189eff')};
                cursor: pointer;
            }
        `}
`
