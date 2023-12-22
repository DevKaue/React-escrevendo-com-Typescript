import React, {useState} from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import ITasks from "../../types/tasks";

function Form({setTasks}:{setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;})
 {
  const [state, setState] = useState({
    task: "",
    time: "00:00",
  });

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setTasks((oldTasks) => [...oldTasks, { ...state }]);
  }
    return (
      <form className={style.novaTarefa} onSubmit={addTask}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo Estudo</label>
          <input
            type="text"
            name="tarefa"
            value={state.task}
            onChange={(event) =>
              setState({ ...state, task: event.target.value })
            } //pegando o valor do input e armazenando
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={state.time}
            onChange={(event) =>
              setState({ ...state, time: event.target.value })
            } //pegando o valor do input e armazenando
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Adicionar" type="submit" />
      </form>
    );
  }

export default Form;
