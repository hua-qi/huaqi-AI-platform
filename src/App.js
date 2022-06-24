import { Layout } from 'antd'

import { FormatHeader } from './components'

import './App.css'

const { Header, Content, Footer } = Layout

const App = () => (
    <Layout>
        <Header className='header'>
            <FormatHeader />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
)

export default App
