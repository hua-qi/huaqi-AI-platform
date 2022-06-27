import { useRef } from 'react'

import request from '../../../api/request'
import StyledShow from './styled'

import girl from '../../../assets/images/吃水果的小女孩.jpg'
import boy from '../../../assets/images/拿飞机的小孩.jpg'
import family from '../../../assets/images/一家六口.jpg'
import work from '../../../assets/images/不想上班.jpg'

const FaceShow = () => {
    const inputRef = useRef()

    const detetion = async () => {
        const data = await request({
            method: 'post',
            url: '/mtcnn/processImageByUrl/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                fileUrl: inputRef.current.value,
            },
        })

        console.log(data)
    }

    return (
        <StyledShow>
            <div className='section'>
                <div className='sectionTwo'>
                    <div className='sectionTwotitle'>功能演示</div>
                    <div className='box'>
                        <div className='boxOne' id='imgCenter'>
                            <div className='top'></div>
                            <div className='button'></div>

                            <div className='bottom'>
                                <div className='bottomOne'>
                                    <input
                                        type='text'
                                        placeholder='请输入网络图片URL'
                                        className='txt'
                                        ref={inputRef}
                                    />
                                    <input
                                        type='button'
                                        value='检测'
                                        className='jiance'
                                        onClick={() => detetion()}
                                    />
                                    或
                                    <input
                                        type='button'
                                        value='本地上传'
                                        className='shangchuan'
                                    />
                                </div>
                                <div className='bottomTwo'>
                                    图片文件类型支持PNG、JPG、JPEG，图片大小不超过2M。
                                </div>
                            </div>
                        </div>
                        <div className='boxTwo'>
                            <div className='img'>
                                <div className='item one'>
                                    <img src={girl} alt='' id='img1' />
                                </div>

                                <div className='item two'>
                                    <img src={boy} alt='' id='img2' />
                                </div>
                                <div className='item three'>
                                    <img src={family} alt='' id='img3' />
                                </div>
                                <div className='item four'>
                                    <img src={work} alt='' id='img4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledShow>
    )
}
export { FaceShow }
