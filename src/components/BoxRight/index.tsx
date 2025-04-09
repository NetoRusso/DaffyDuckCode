'use client';
import style from "./BoxRight.module.scss";
import { useContext, useEffect, useRef } from "react";
import { QuackContext } from "@/context/quack";
import ReactMarkdown from "react-markdown";

const BoxRight = () => {
  const { historico } = useContext(QuackContext);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [historico]);

  return (
    <div className={style.box}>
      <div className={style.box__content}>
        {historico.map((item, index) => (
          <div key={index} className={style.box__content__result}>
            <p className={style.box__content__result_pergunta}>
              <strong>Você:<br /></strong>{item.pergunta}
            </p>
            <ReactMarkdown className={style.box__content__result_resposta}>
            {`**IA:**\n\n${item.resposta}`}
            </ReactMarkdown>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default BoxRight;
