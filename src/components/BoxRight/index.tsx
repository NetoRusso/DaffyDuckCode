'use client';
import style from "./BoxRight.module.scss";
import { useContext } from "react";
import { QuackContext } from "@/context/quack";


const BoxRight = () => {

  const { historico } = useContext(QuackContext);

  return (
    <div className={style.box}>
      <div className={style.box__content}>
          {historico.map((item, index) => (
            <div key={index} className={style.box__content__result}>
              <p className={style.box__content__result_pergunta}><strong>Você:<br/></strong>{item.pergunta}</p>
              <p className={style.box__content__result_resposta}><strong>IA:<br/></strong>{item.resposta}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default BoxRight;