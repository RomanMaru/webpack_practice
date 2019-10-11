import React from 'react'
import ReactDOM from 'react-dom'
import {BrowseRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import 'babel-polyfill'

const app = (
    <BrowseRouter>
        <App />
    </BrowseRouter>
)

ReactDOM.render(app, document.getElementById('root'))
