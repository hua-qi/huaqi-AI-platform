import StyledLink from './styled'

const CLink = props => {
    const { linkTxt, url } = props

    return (
        <StyledLink target='_blank' rel='noopener noreferrer' url={url || '/#'}>
            {linkTxt}
        </StyledLink>
    )
}

export { CLink }
