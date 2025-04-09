'use client';
import style from "./Footer.module.scss";


const Footer = () => { 

  return (
    <footer className={style.footer}>

      <p>🐤Pergunte ao Pato!&copy; 2025🦆</p>
      <div className={style.footer__assinatura}>
        <p>Pensado, Criado e Desenvolvido por:</p>
        <a 
          data-glitch="Neto Russo" 
          className={style.footer__assinatura__glitch}
          href="https://netorusso.onrender.com/"
          target="_blank"
          rel="noreferrer"
          title="Neto Russo || Portifóleo"
        >
          Neto Russo
        </a>
      </div>
      <div className={style.footer__redes}>

      </div>
    </footer>
  )
};

export default Footer