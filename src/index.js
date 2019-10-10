import React from 'react'
import ReactDOM from 'react-dom'
import {BrowseRouter} from 'react-router-dom'\
import App from './App'
import './index.css'

const app = (
    <BrowseRouter>
        <App />
    </BrowseRouter>
)

ReactDOM.render(app, document.getElementById('root'))
