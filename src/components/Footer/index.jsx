import { StyledFooter } from './styled'
const FormatFooter = () => {
    return (
        <StyledFooter>
            <div className='footer-div'>
                <div className='link'>
                    友情链接：
                    <a href='/#'> 星云大数据平台 </a>
                    <a href='/#'> 尚云科技 </a>
                    <a href='/#'> 天亮教育官网 </a>
                    <a href='/#'> 尚云舆情2.0 </a>
                </div>
                <span className='span-p'>
                    Copyright © 2017-2025 河北尚云信息科技有限公司
                    备案号:冀ICP备17020003号
                </span>
            </div>
        </StyledFooter>
    )
}
export { FormatFooter }

