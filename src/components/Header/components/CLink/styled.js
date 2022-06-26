import styled from 'styled-components'

export default styled.a`
    color: ${props => (props.href === '/#' ? '#1890ff' : ' #909399')};
`
