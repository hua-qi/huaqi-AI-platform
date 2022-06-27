import { lazy } from 'react'

// 路由懒加载

const Home = lazy(() => import('./Home'))
const CallUs = lazy(() => import('./CallUs'))
const PlantIdent = lazy(() => import('./PlantIdent'))
const FaceReco = lazy(() => import('./FaceReco'))
const FaceDete = lazy(() => import('./FaceDete'))

export { Home, CallUs, PlantIdent, FaceDete, FaceReco }
