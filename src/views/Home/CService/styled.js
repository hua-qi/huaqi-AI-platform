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

    .serve {
        display: flex;
        justify-content: space-between;
    }

    .serve-item {
        text-align: center;
        font-size: 24px;
        line-height: 60px;
        color: #101010;
        font-family: SourceHanSanSC-regular;
    }

    .serve-item span:hover {
        color: #c6c6c6;
        cursor: pointer;
    }
`
