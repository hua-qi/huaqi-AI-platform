import styled from 'styled-components'

export default styled.div`
    text-align: center;
    color: ${props => (props.url === '/#' ? '#ccd6e3' : '#189eff')};
`
