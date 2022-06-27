// 第三方
import { memo } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

// 自定义
import { Home, CallUs, PlantIdent, FaceReco, FaceDete } from '../views'

const routing_table = [
    {
        path: '/',
        element: <Home />,
        exact:true
    },
    {
        path: '/callUs',
        element: <CallUs />,
    },
    {
        path: '/plantIdentifaction',
        element: <PlantIdent />,
    },
    {
        path: '/faceRecognition',
        element: <FaceReco />,
    },
    {
        path: '/faceDetection',
        element: <FaceDete />,
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    },
]

const RouteElement = memo(() => {
    return useRoutes(routing_table)
})

export default RouteElement
