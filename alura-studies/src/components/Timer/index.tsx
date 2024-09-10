import { useEffect, useState } from "react";
import { TimeToSeconds } from "../../common/utils/time";
import ITasks from "../../types/tasks";
import Button from "../button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: ITasks | undefined;
  endTask: () => void;
}

export default function Timer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      endTask();
    }, 1000);
  }

  useEffect(() => {
    if (selected?.time) {
      setTime(TimeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button text="Começar" onClick={() => regressive(time)} />
    </div>
  );
}
