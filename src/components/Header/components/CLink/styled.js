import styled from 'styled-components'

export default styled.div`
    width: 120px;
    text-align: center;
    color: ${props => (props.url === '/#' ? '#ccd6e3' : '#189eff')};
`
