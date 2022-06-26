import { Menu } from 'antd'

import { CLink } from '../index'
import { CVisionMenu } from '../index'

const computerVision = <CVisionMenu />

const languageProcessing = (
    <Menu
        items={[
            {
                key: 'sentiment-analysis',
                label: <CLink linkTxt='情感分析' />,
            },
            {
                key: 'text-summarization',
                label: <CLink linkTxt='文本摘要' />,
            },
            {
                key: 'speech-recognition',
                label: <CLink linkTxt='语音识别' />,
            },
            {
                key: 'grammatical-analysis',
                label: <CLink linkTxt='语法分析' />,
            },
            {
                key: 'syntactic-analysis',
                label: <CLink linkTxt='句法分析' />,
            },
            {
                key: 'text-similarity',
                label: <CLink linkTxt='文本相似度' />,
            },
            {
                key: 'text-categorization ',
                label: <CLink linkTxt='文本分类' />,
            },
        ]}
    />
)

const dataservices = (
    <Menu
        items={[
            {
                key: 'data-collection',
                label: <CLink linkTxt='数据采集能力' />,
            },
            {
                key: 'big-data',
                label: <CLink linkTxt='大数据服务' />,
            },
        ]}
    />
)

const solution = (
    <Menu
        items={[
            {
                key: 'fatigue-driving',
                label: <CLink linkTxt='疲劳驾驶检测' />,
            },
            {
                key: 'image-amplification',
                label: <CLink linkTxt='图片无损放大' />,
            },
            {
                key: 'face-recognition',
                label: <CLink linkTxt='人脸识别' url='/src' />,
            },
            {
                key: 'address-recognition',
                label: <CLink linkTxt='地址识别' />,
            },
        ]}
    />
)
export { computerVision, dataservices, languageProcessing, solution }
