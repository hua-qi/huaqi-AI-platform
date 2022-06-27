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

    ${props =>
        props.type === 'callUsButton' &&
        css`
            width: 100px;
            height: 40px;
            line-height: 40px;
            border-radius: 7px;
            border: 1px solid #409eff;
            color: #fff;
            background-color: #409eff;
            font-size: 14px;

            :hover {
                border: 1px solid #66b1ff;
                color: #fff;
                cursor: pointer;
                background-color: #66b1ff;
            }
        `}

        ${props =>
        props.type === 'bannerCallUs' &&
        css`
            width: 100px;
            height: 40px;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            background-color: #fff;
            color: #000;

            :hover {
                cursor: pointer;
                color: #409eff;
            }
        `}
`
