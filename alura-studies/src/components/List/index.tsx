import ITasks from "../../types/tasks";
import style from "./List.module.scss";
import Item from "./item";

interface Props {
  tasks: ITasks[];
  selectTask: (taskSelected: ITasks) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item} //utilizando todos os atributos de props dentro do componente
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;

/* Uma dar maneiras de usar as props do Item
<Item task={item.task} time={item.time} />;
*/
