import styled from 'styled-components'

import '../../../assets/iconfonts/iconfont.css'

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
        margin: 0 auto 30px;
        box-sizing: border-box;
        width: 66%;
    }

    .product-list {
        display: flex;
        justify-content: space-between;
    }

    .item .title {
        color: #101010;
        font-size: 20px;
        font-family: SourceHanSanSC-regular;
        margin-bottom: 40px;
    }

    .item .title span {
        vertical-align: middle;
        margin: 0 10px;
    }

    .detail-list li {
        text-align: center;
        width: 100px;
        height: 40px;
        margin: 0 auto;
        line-height: 40px;
        font-size: 14px;
        color: #ccc;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
    }
`
