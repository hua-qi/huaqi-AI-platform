import styled from 'styled-components'

export default styled.div`
    width: 220px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 0 0 4px 4px;

    .sub-menu {
        .sub-item {
            padding: 5px 0;
        }

        .sub-item:hover {
            cursor: pointer;
            background-color: #f5f5f5;
        }

        .sub-title {
            text-align: center;
            font-size: 18px;
            font-weight: 400;
            margin: 10px 0;
        }
    }
`
