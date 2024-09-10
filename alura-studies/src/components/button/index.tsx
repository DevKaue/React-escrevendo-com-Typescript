import React from "react";
import style from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  );
}

export default Button;

/*
Uma das formas de Utilizar props em componente

class Button extends React.Component {
    render() 
    {
        return(
            <button className={style.botao}>{this.props.children}</button>
        )
    }
}

*/
