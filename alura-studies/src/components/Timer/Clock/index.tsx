import React from "react";
import style from './Clock.module.scss'

export default function Clock() 
{
    return(
        /*<> junto de </>, seria a mesma coisa, para interpratar um XML*/ 
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
    )    
}