import React from 'react'
import './Main.css'


export default props =>
    <div className='legal'>
        <div className='busca'>
            <div className='Login'>
                <input type='text' placeholder='Search...'/>
                
            </div>
        </div>
        <div className='dashboard'>
            <div className='filter'>
                <div>Dashboard</div>
                <div id='Filter'>Filter</div>
            </div>
            <div className='imagens'>
                <div id='first'>$ 730</div>
                <div id='second'>$ 1.280</div>
                <div id='third'>$ 1.990</div>
            </div>
        </div>
        <div className='parteBaixo'>
            <div className='grafico grafico1'>
                <div>Ação</div>
                <div className='dados'>
                    <div>100</div>
                    <div>50</div>
                    <div>70</div>
                </div>
            </div>
            <div className='grafico grafico2'>
                <div>Ação</div>
                <div className='dados1'>
                    <div>300</div>
                    <div>150</div>
                    <div>200</div>
                </div>
            </div>
            <div className='bloco1'>
                <div className='notes'>Notes</div>
                <div className='bloco'>
                    <hr/>
                </div>
            </div>
        </div>
    </div>