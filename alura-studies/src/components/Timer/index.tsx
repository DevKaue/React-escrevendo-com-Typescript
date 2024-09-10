import { useState } from "react";
import { TimeToSeconds } from "../../common/utils/time";
import ITasks from "../../types/tasks";
import Button from "../button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: ITasks | undefined;
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();
  if (selected?.time) {
    setTime(TimeToSeconds(selected.time));
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button text="Começar" />
    </div>
  );
}
