import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'
import { App } from './components/App'

window.React = React

render(
	<App />,
	document.getElementById('react-container')
)