import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {

    state = {
        task: "",
        time: "00:00"
    };

    addTask(event: React.FormEvent<HTMLFormElement>)
    {
        event?.preventDefault();
        console.log('state: ', this.state);
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo Estudo</label>
                    <input type="text"
                    name="tarefa"
                    value={this.state.task}
                    onChange={event => this.setState({ ...this.state, task: event.target.value })} //pegando o valor do input e armazenando
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type ="time"
                    step="1"
                    name="tempo"
                    value={this.state.time}
                    onChange={event => this.setState({ ...this.state, time: event.target.value })} //pegando o valor do input e armazenando
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required/>
                </div>
                <Button text="Adicionar"/>
            </form>
        )
    }
}

export default Form;