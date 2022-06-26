import React,{Component} from 'react'
import {Map} from 'react-amap'
const mapKey = '1234567809843asadasd' //需要自己去高德官网上去申请
class Address extends Component {
	constructor (props) {
        super (props)
        this.state = {  
        }
    }
	render(){
		return (
			<div style={{width: '100%', height: '470px'}}>
				<Map amapkey={mapKey} 
				     zoom={16}></Map>
			</div>
		)
	}
}

export default Address
