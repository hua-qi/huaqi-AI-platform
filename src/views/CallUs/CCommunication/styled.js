import styled from 'styled-components'

export default styled.section`
    width: 100%;
    .section-title {
        margin: 30px auto 10px;
        width: 200px;
        text-align: center;

        .contact,
        .contact-us {
            font-size: 16px;
            padding: 10px 0;
        }

        .contact {
            border-bottom: 1px solid #000;
        }
    }

    .contact-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0 10px;
        border-bottom: 1px dotted #000;
        font-size: 14px;

        div {
            flex: 1;
            text-align: center;

            img {
                width: 20px;
                margin-right: 10px;
                vertical-align: center;
            }
        }
    }
`
