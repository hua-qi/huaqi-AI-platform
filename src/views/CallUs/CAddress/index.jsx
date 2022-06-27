import React from 'react'
import { Map, Marker } from 'react-amap'

import StyledAddress from './styled'

const mapKey = '1234567809843asadasd' //需要自己去高德官网上去申请

const CAddress = () => {
    const markerPosition = { longitude: 120, latitude: 30 }

    return (
        <StyledAddress>
            <div className='section-title'>
                <div className='location'>地理坐标</div>
                <div className='coordinate'>COORDINATE</div>
            </div>
            {/* // 此处有个 bug，官方未解决 */}
            <div style={{ width: '100%', height: '470px' }}>
                <Map amapkey={mapKey} zoom={16} center={markerPosition}>
                    <Marker position={markerPosition} />
                </Map>
            </div>
        </StyledAddress>
    )
}

export default CAddress
