'use client';
import Pato from "../Pato";
import style from "./BoxLeft.module.scss";
import pena from "../../assets/svg/pena.svg";
import Image from "next/image";
import { useContext } from "react";
import { QuackContext } from "@/context/quack";
// import { TaskContext } from "@/context/task";





const BoxLeft = () => {

  const { setFalando, setHistorico, historico } = useContext(QuackContext);


  const chamaIa = async (texto: string) => {
    const res = await fetch("/api/groq", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ mensagem: texto }),
    });
    const data = await res.json();
    const conteudo = data.choices[0]?.message?.content;
    // console.log("Resposta do Groq:", data.choices[0]?.message?.content);
    setHistorico([...historico, { pergunta: texto, resposta: conteudo }]);
  };


  return (
    <div className={style.box}>
      <div className={style.box__content}>
        <Pato />
        <form
          className={style.box__content__form}
          action="submit"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const task = form.querySelector("#task") as HTMLTextAreaElement;

            if (task.value.length > 3) {
              setFalando(true);
              await chamaIa(task.value);
              form.reset();
              setTimeout(() => {
                setFalando(false);
              }, 3000);
            }
          }}
        >
          <textarea
            name="mensagem"
            id="task"
            placeholder="Digite aqui a sua pergunta"
            className={style.box__content__form__input}
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === "Enter") {
                const form = (e.target as HTMLTextAreaElement).form;
                if (form) {
                  form.requestSubmit();
                }
              }
            }}
          />
          <button
            type="submit"
            className={style.box__content__form__button}
          >
            <Image src={pena} alt="enviar" width={24} height={24} />
          </button>
        </form>
      </div>
    </div >
  )
}

export default BoxLeft;