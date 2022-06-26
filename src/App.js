import { Layout } from 'antd'

import { FormatHeader, FormatFooter } from './components'

import './App.css'

const { Header, Content, Footer } = Layout

const App = () => (
    <Layout>
        <Header className='header'>
            <FormatHeader />
        </Header>
        <Content>Content</Content>
        <Footer className='footer'>
            <FormatFooter />
        </Footer>
    </Layout>
)

export default App
