'use client';
import Pato from "../Pato";
import style from "./BoxLeft.module.scss";
import pena from "../../assets/svg/pena.svg";
import Image from "next/image";
import { useRef } from "react";
import { useQuack } from "@/hooks/useQuack";

const BoxLeft = () => {
  const { chamaIa } = useQuack();
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className={style.box}>
      <div className={style.box__content}>
        <div onClick={() => formRef.current?.requestSubmit()} style={{ cursor: "pointer" }}>
          <Pato />
        </div>

        <form
          ref={formRef}
          className={style.box__content__form}
          action="submit"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const task = form.querySelector("#task") as HTMLTextAreaElement;

            if (task.value.length > 3) {
              await chamaIa(task.value);
              form.reset();
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
    </div>
  );
};

export default BoxLeft;
