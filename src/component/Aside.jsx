import React, {Component} from 'react'
import './Aside.css'

export default class Aside extends Component {

    render(){
        return(
    <div className='lado'>
        <div className='Logo'>Wallet</div>
        <div className='nave'>
            <div>Produtos</div>
            <div>Carteira</div>
            <div>Investimento</div>
            <div>Fundos</div>
            <div>Ações</div>
            <div>Extrato</div>
        </div>
        <div className='info'>
            <div>@caique.a.dev</div>
            <a href='https://github.com/Not-leme'>github/Not-leme</a>
        </div>
    </div>
        )
    }
}