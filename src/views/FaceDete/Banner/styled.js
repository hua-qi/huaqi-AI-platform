import styled from 'styled-components'

import banner from '../../../assets/images/th1.jpg'
export default styled.section`
    .banner {
        width: 100%;
        height: 478px;
        background-image: url(${banner});
        background-size: cover;
        background-position: 50% center;
    }
    .liBox:hover > .computer {
        display: block;
    }
    .Facetext {
        color: aliceblue;
        font-size: 48px;
        text-align: left;
        display: block;
        padding: 100px 0 0 250px;
        text-align: left;
    }
    .Facetextin {
        color: aliceblue;
        text-align: left;
        margin: 50px 0 90px 200px;
        font: 14px;
        padding: 0px 0 0 50px;
    }
    .btn {
        margin: 50px 0 90px 250px;
    }
    .btn button {
        background: #fff;
        border: 1px solid #dcdfe6;
        padding: 10px 16px;
        font-size: 14px;
        border-radius: 4px;
    }
`
