import React from "react";
import style from "./List.module.scss";
import Item from "./item";

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JavaScript",
      time: "01:00:00",
    },
    {
      task: "TypeScript",
      time: "03:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item 
           key={index}
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
