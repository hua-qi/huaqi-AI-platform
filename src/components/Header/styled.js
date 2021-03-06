import styled from 'styled-components'

const StyledHeader = styled.div`
    .header-menu {
        width: 64%;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .item {
            font-size: 14px;
            color: #fff;
        }

        .menu {
            height: 80px;
            line-height: 80px;
            color: #fff;
            background-color: #010101;
        }

        .item:hover {
            color: #1890ff;
            cursor: pointer;
        }
    }
`

export { StyledHeader }
