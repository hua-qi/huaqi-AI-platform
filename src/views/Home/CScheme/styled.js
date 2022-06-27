import styled from 'styled-components'

export default styled.section`
    border-bottom: 1px solid #ccc;

    .section-header {
        color: #101010;
        font-size: 28px;
        text-align: center;
        font-family: SourceHanSanSC-regular;
        padding: 30px 0 50px 0;
    }

    .framework {
        margin: 0 auto 100px;
        box-sizing: border-box;
        width: 66%;
    }

    .scheme {
        display: flex;
        justify-content: space-between;
    }

    .scheme-item {
        line-height: 60px;
    }

    .scheme img {
        width: 220px;
        height: 180px;
    }
`
