import styled from 'styled-components'

export default styled.div`
    .header-menu {
        width: 64%;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .logo {
            width: 280px;
            height: 80px;
            line-height: 80px;
            font-size: 28px;
            color: #fff;
        }

        .logo:hover {
            color: #1890ff;
        }

        .menu {
            height: 80px;
            line-height: 80px;
            color: #fff;
            background-color: #010101;
            border-bottom: 1px solid #010101;
        }
    }
`
