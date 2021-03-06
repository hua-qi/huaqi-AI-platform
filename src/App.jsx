import { Suspense } from 'react'
import { Layout } from 'antd'

import { FormatHeader, FormatFooter } from './components'
import RouteElement from './routing-table'

import './App.css'

const { Header, Content, Footer } = Layout

const App = () => (
    <Layout>
        <Header className='header'>
            <FormatHeader />
        </Header>
        <Content className='content'>
            <Suspense>
                <RouteElement />
            </Suspense>
        </Content>
        <Footer className='footer'>
            <FormatFooter />
        </Footer>
    </Layout>
)

export default App
