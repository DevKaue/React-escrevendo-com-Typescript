import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{ text: string; type?: "button" | "submit" | "reset" | undefined }> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button className={style.botao} type={type}>
        {this.props.text}
      </button>
    );
  }
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
