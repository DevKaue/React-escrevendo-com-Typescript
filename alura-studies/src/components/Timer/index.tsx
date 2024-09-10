import { TimeToSeconds } from "../../common/utils/date";
import Button from "../button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

export default function Timer() {
  console.log("Conversao: ", TimeToSeconds("01:01:01"));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button text="Começar" />
    </div>
  );
}
