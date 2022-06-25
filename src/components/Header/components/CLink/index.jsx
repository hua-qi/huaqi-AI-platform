import StyledLink from './styled'

const CLink = props => {
    const { linkTxt, url } = props

    return <StyledLink href={url}>{linkTxt}</StyledLink>
}

export { CLink }
