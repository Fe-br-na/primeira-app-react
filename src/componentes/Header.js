import React from 'react'

import Logo from './imgs/2BContab-Roxo.svg'
import Simbolo from './imgs/simbolo.png'

export default function Header(){
	return(
		<header>
                   <img alt='logo 2B' src={Logo} style={{ width: '15%' }}/>
                   <br/>
                   <img alt= 'sbl' src={Simbolo} style={{width: '5%' }}/> 
		</header>
	)
}
