import styled from 'styled-components'

import banner from '../../../assets/images/视频人脸识别大图.jpg'
export default styled.section`
    .banner {
        width: 100%;
        height: 460px;
        background-image: url(${banner});
        background-size: cover;
        background-position: 50% center;
        .box {
            height: 478px;
            width: 1000px;
            margin: 0 auto;
        }
        .boxx {
            height: 478px;
            width: 270px;
            /* background-color: green; */
        }

        .boxOne {
            font-size: 48px;
            color: white;
            padding-top: 100px;
        }

        .boxTwo {
            color: white;
            font-size: 14px;
            padding-top: 50px;
        }

        .boxThree {
            /* color: white;
    font-size: 15px; */
            padding-top: 100px;
        }

        .boxThree input {
            width: 100px;
            height: 45px;
            border-radius: 7px;
            border: 1px solid #000;
            color: #606266;
            cursor: pointer;
        }

        .boxThree input:hover {
            border: 1px solid #409eff;
            color: #409eff;
        }
    }
`
