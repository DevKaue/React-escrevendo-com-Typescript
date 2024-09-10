import ITasks from "../../../types/tasks";
import style from "./Item.module.scss";

interface Props extends ITasks {
  selectTask: (taskSelected: ITasks) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3> {task} </h3>
      <span> {time} </span>
      {completed && (
        <span
          className={style.concluido}
          aria-label="Tarefa Completada!"
        ></span>
      )}
    </li>
  );
}
