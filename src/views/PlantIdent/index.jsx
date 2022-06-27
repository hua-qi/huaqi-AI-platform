import Header from "./Header"
import Subtool from "./Subtool"
import FunDisplay from "./FunDisplay"
import Scene from "./Scene"
import Callus from "./Callus"

import PlantStyle from './styled'

const PlantIdent = () => {
    return (
        <PlantStyle>
            <Header />
            <Subtool />
            <FunDisplay />
            <Scene />
            <Callus/>
        </PlantStyle>
    )
}

export default PlantIdent
