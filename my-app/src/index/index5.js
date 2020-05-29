import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import Badge from '../components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
    <Badge
        firstName="Joaquin"
        lastName="Fontela"
        jobTitle="Backend Engineer"
        twitter="joaquinfontela"
    />, container)
// Le mando a badge los valores variables que guardara como clave-valor en this.props.


