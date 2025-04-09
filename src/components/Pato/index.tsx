'use client';
import style from "./Pato.module.scss";
import { SVGProps, useEffect, useState, useRef, useContext } from "react";
import { QuackContext } from "@/context/quack";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {

  const globoRef = useRef<SVGPathElement>(null);
  const pupilaRef = useRef<SVGCircleElement>(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { falando, setFalando } = useContext(QuackContext);

  
  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      const globo = globoRef.current;
      if (!globo) return;

      const rect = globo.getBoundingClientRect();

  
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
  
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
  
      const max = 5;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      const limitedX = Math.cos(angle) * Math.min(distance, max);
      const limitedY = Math.sin(angle) * Math.min(distance, max);
  
      setCoords({ x: limitedX, y: limitedY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);

  },[]);



  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="patoImg"
      id='patoImg'
      className={style.patoImg}
      width={300}
      viewBox="0 0 1100 850"
      {...props}
      onClick={() => {
        setFalando(!falando);

        setTimeout(() => {
          setFalando(false);
          console.log("clicou");
        }, 3000);

      }}
    >
      <defs>
        <clipPath
          id="clippath"
        >
          <path
            d="M674.13,354.4c-8.57-1.5-17.76.92-24.2,8.87-7.02,8.66-7.56,21.8-1.3,31.01,12.41,18.25,43.89,13.05,48.21-9.12,3.1-15.93-9.02-28.36-22.71-30.76Z"
            fill="none"
          />
        </clipPath>
      </defs>
      <path
        className={style.patoImg__sombra}
        d="M198.82 568.78c2.68-18.71 15.67-24.3 21.13-25.83 2.61-.73 5.28-1.11 7.93-1.11 10.84 0 20.64 6.23 26.2 16.66 3.6 6.75 8.48 13.27 13.64 20.17 6.71 8.97 17.74 18.56 28.56 18.56 1.96 0 3.86-.3 5.82-.92 7.12-2.25 14.51-8.77 22.6-19.95 2.21-3.06 4.43-6.15 6.66-9.27 23.64-33 50.43-70.41 92.29-89.18 17.47-7.84 36.14-12.34 55.49-13.39 1.98-.11 4.04-.16 6.13-.16h1.09c-4.16-10.82-7.07-22.2-8.63-33.9-6.27-47.07 9.44-95.88 42.05-130.58 27.84-29.63 69.3-46.62 113.75-46.62 51.03 0 97.01 22.67 122.99 60.64 11.59 16.94 18.96 35.21 21.9 54.31l.09.61c.36 1.29.6 2.63.72 4.01 0 0 .49 5.74.5 5.81.08.72.13 1.44.14 2.17.04 2.31.09 4.62.13 6.93.07 3.16.13 6.38.18 9.63 1.71.23 4.01.4 7.03.4 12.79 0 27.75-3.14 32.92-4.82 10.22-3.33 18.02-4.81 25.3-4.81 22.72 0 37.66 14.95 39.96 39.98 2.04 22.19-4.65 42.43-19.34 58.54-20.99 23.01-55.42 34.53-87.16 38.54 3.22 5.94 6.26 11.84 9.09 17.63 11.34 23.17 19.57 44.75 25.15 65.96 14.32 54.38 9.02 103.47-15.31 141.97-33.79 53.46-101.04 74.97-138.13 83.03-36.2 7.87-75.81 11.53-124.65 11.53-12.67 0-26.5-.24-42.27-.74l-9.06-.28c-50.52-1.54-102.76-3.13-153.28-21.37-2.28-.82-4.6-1.7-6.9-2.61-50.18-19.87-87.2-54.78-107.04-100.93-18.98-44.14-25.25-97.62-17.67-150.6Z"
        fill="#f2f2f2"
      />

      <path
        id="pato-balao-bg-shadow"
        className={style.patoImg__balao__bgShadow}
        d="M1103.42 195.98v118.8c0 21.65-17.55 39.2-39.2 39.2h-94.79c-8.13 26.8-29.75 53.6-83.69 53.6 0 0 44.26-7.53 49.02-53.6H825.82c-21.65 0-39.2-17.55-39.2-39.2v-118.8c0-21.65 17.55-39.2 39.2-39.2h238.4c21.65 0 39.2 17.55 39.2 39.2Z"
        style= {
          falando ?
          {
            fill: "#3d2202",
          }:
          {
            fill: "none",
          }
        }

        // fill="#3d2202"
      />
      <path
        id="pato-balao-bg"
        className={style.patoImg__balao__bg}
        d="M1112.96 195.98v118.8c0 21.65-17.55 39.2-39.2 39.2h-94.79c-8.13 26.8-29.75 53.6-83.69 53.6 0 0 44.26-7.53 49.02-53.6H835.36c-21.65 0-39.2-17.55-39.2-39.2v-118.8c0-21.65 17.55-39.2 39.2-39.2h238.4c21.65 0 39.2 17.55 39.2 39.2Z"
        // fill="#f2f2f2"
        style= {
          falando ?
          {
            fill: "#f2f2f2",
          }:
          {
            fill: "none",
          }
        }
      />
      <path
        id="pato-balao-quack"
        className={style.patoImg__balao__quack}
        d="M835.26,224.29l40.07-.99c1.1-.03,1.98.93,1.86,2.03l-5.79,51.34c-.09.84-.76,1.51-1.6,1.61l-7.14.83c-.92.11-1.61.88-1.61,1.81v3.15c0,.87-.62,1.62-1.48,1.79l-4.82.93c-1.12.22-2.17-.64-2.17-1.79v-3.1c0-1.06-.91-1.9-1.97-1.82l-9.9.79c-.99.08-1.86-.65-1.96-1.64l-5.27-52.95c-.1-1.05.71-1.98,1.77-2ZM863.86,267.37l2.88-29.12c.11-1.13-.83-2.09-1.96-1.99l-19.37,1.58c-1.04.09-1.8,1.03-1.66,2.07l4.28,30.38h.54l2.47-.39c.88-.14,1.54-.9,1.54-1.8v-3.11c0-1.1.97-1.95,2.05-1.81l4.82.62c.91.12,1.59.89,1.59,1.81h0c0,1.18,1.1,2.05,2.25,1.77h.03s.55,0,.55,0Z M917.61,249.51l2.3,28.26c.15,1.79-1.19,3.36-2.98,3.5l-26.46,2.16c-1.99.16-3.65-1.48-3.51-3.47l2.32-32.59c.13-1.78,1.66-3.12,3.43-3.02h0c1.69.1,3.01,1.47,3.06,3.16l.64,24.13c.05,1.9,1.72,3.36,3.61,3.14l7.38-.83c1.62-.18,2.86-1.54,2.89-3.18l.36-21.04c.03-1.71,1.37-3.1,3.07-3.19l.46-.03c1.76-.1,3.28,1.23,3.42,2.98Z M964.66,275.92l.27.09-.2,2.56c-.14,1.78-1.65,3.13-3.43,3.07l-2.09-.07c-.07,0-.13,0-.2,0l-28.01.73c-1.85.05-3.39-1.43-3.42-3.28l-.26-17.85c-.03-1.95,1.61-3.5,3.56-3.37l15.76,1.06c1.92.13,3.56-1.4,3.56-3.32v-.52c0-1.89-1.58-3.41-3.47-3.33l-9.05.37c-1.8.07-3.33-1.29-3.46-3.09h0c-.12-1.69,1.04-3.21,2.71-3.52l16.38-3.07c1.9-.36,3.71.98,3.92,2.91l3.02,27c.14,1.23.95,2.28,2.1,2.73l2.31.9ZM946.65,265.92h-8.04c-2.01,0-3.56,1.77-3.3,3.76l.42,3.26c.21,1.62,1.56,2.85,3.19,2.9l7.4.25c1.8.06,3.33-1.32,3.44-3.12l.22-3.51c.12-1.92-1.4-3.54-3.33-3.54Z M977.36,281.9l-4.3-34.35c-.25-1.98,1.38-3.69,3.37-3.53l26.32,2.02c1.69.13,2.98,1.58,2.91,3.28l-.02.36c-.07,1.66-1.42,2.98-3.09,3.02l-16.95.33c-1.89.04-3.33,1.72-3.06,3.6l2.36,16.52c.23,1.63,1.67,2.8,3.31,2.7l14.69-.91c1.7-.11,3.18,1.16,3.33,2.86h0c.15,1.66-1.02,3.15-2.67,3.4l-22.61,3.43c-1.75.27-3.38-.97-3.6-2.72Z M1016.36,224.14l1.44-.06c1.28-.06,2.4.87,2.6,2.14l2.47,16.51c.29,1.92,2.56,2.81,4.07,1.58l14.13-11.5c.87-.7,2.09-.75,3.01-.12h0c1.22.84,1.45,2.55.5,3.68l-12.56,14.99c-1.07,1.28-.62,3.22.89,3.9l12,5.41c.93.42,1.51,1.35,1.48,2.37l-.51,16.05c-.04,1.37-1.18,2.45-2.55,2.43l-1.56-.02c-1.16-.02-2.15-.82-2.41-1.95l-2.38-10.36c-.17-.75-.67-1.37-1.36-1.7l-6.84-3.28c-1.58-.76-3.43.29-3.59,2.03l-1.29,13.99c-.11,1.24-1.12,2.21-2.36,2.28l-3.1.18c-1.41.08-2.61-1.01-2.66-2.42l-1.83-53.53c-.05-1.38,1.02-2.53,2.4-2.6Z M1058.85,219.98h8.04c2.05,0,3.63,1.79,3.38,3.82l-4.99,41.12c-.21,1.71-1.66,3-3.38,3h0c-1.79,0-3.27-1.38-3.4-3.16l-3.04-41.12c-.15-1.98,1.42-3.66,3.4-3.66ZM1059.41,273.65h4.25c2.35,0,3.99,2.32,3.22,4.53l-.99,2.82c-.48,1.37-1.77,2.29-3.22,2.29h-2.83c-1.69,0-3.12-1.23-3.37-2.9l-.43-2.82c-.31-2.06,1.29-3.92,3.37-3.92Z"
        style= {
          falando ?
          {
            fill: "#f65915",
          }:
          {
            fill: "none",
          }
        }

        // fill="#f65915"
      />

      <path
        id="pato-corpo-bico"
        className={style.patoImg__corpo__bico}
        d="M760.83,484.9c20.53.06,40.16-3.41,57.59-15.13,11.41-7.66,20.19-17.24,24.02-30.97,1.29-4.57-.36-4.65-3.85-4.75-10.37-.26-20.25,2.54-30.36,4.06-15.13,2.28-30.24,2.53-45-3.47-6.73-2.74-9.74-3.61-13.71,6.02-4.78,11.57-12.61,21.59-20.56,31.25-2.65,3.23-2.28,5.38.54,7.63,4.44,3.54,9.77,4.93,15.27,5.29,5.33.36,10.7.08,16.05.08Z"
        fill="#f65915"
      />

      <path
        id="pato-corpo"
        className={style.patoImg__corpo}
        d="M238.71 621.47c.2 2.88.4 5.78.67 8.67 4.9 53.64 23.46 106.72 70.98 136.83 39.7 25.17 90.84 30.87 136.65 34.33 51.54 3.89 104.69 3.24 156.17-1.5 78.6-7.24 178.22-42.86 175.29-137.42-.88-28.35-9.99-55.82-20.93-81.98-15.07-35.98-35.19-68.71-54.09-102.66-1.07-1.92-2.17-4.09-1.57-6.2.36-1.26 1.29-2.28 2.17-3.24 12.45-13.43 23.12-25.12 28.97-42.85 5.09-15.4 6.33-32.13 3.44-48.1-4.51-24.98-19.18-47.95-39.81-62.76-7.68-5.52-16.3-9.55-25.31-12.39-76.9-24.16-160.9 33.28-152.26 117.2 2.02 19.52 9.43 38.38 20.86 54.29 12.28 17.07 27.65 26.42 45.25 37.05 3.88 2.34 7.8 4.71 10.87 8.02 5.02 5.38 9.54 19.17-1.55 20.07-4.22.34-8.22-1.71-11.97-3.64-21.6-11.18-44.26-20.87-68.17-25.32-23.93-4.47-49.31-3.43-71.66 6.22-28.08 12.13-48.89 36.47-66.46 61.52-16.7 23.79-33.6 50.69-61.22 59.79-20.28 6.7-42.83 1.16-59.72-11.17a73.194 73.194 0 0 1-4.23-3.35c-1.01-.85-2.02-1.71-3.02-2.56-1.49-1.66-2.98-3.33-4.5-4.98-5.61-6.02-5.1 2.33-4.84 6.14Z"
        fill="#ffde17"
      />
      <path
        id="pato-corpo-borda"
        className={style.patoImg__corpo__borda}
        d="M535.82 314.93c52.41-55.77 158.2-53.48 202.59 11.38 9.35 13.66 15.77 28.72 18.31 45.24.08.99.16 1.98.25 2.97.02.16.11.32.17.48.07-.09.14-.19.21-.3l.48 5.6c-.07.24-.15.47-.19.72 0 .04.17.1.27.15.13 7.64.35 15.29.36 22.94.01 24.21 54.83 14.24 68.68 9.73 18.84-6.14 34.42-7.14 36.57 16.28 5.31 57.84-68.81 75.04-112.06 74.78-14.85-.09-1.56 13.62 1.7 19.26 5.34 9.27 10.4 18.71 15.1 28.31 9.71 19.85 18.01 40.5 23.64 61.9 10.96 41.64 11.03 87.19-12.63 124.63-25.93 41.03-78.64 63.39-124.22 73.29-52.99 11.52-107.6 12.01-161.57 10.3-52.55-1.66-105.46-2.26-155.58-20.36-2.1-.76-4.19-1.55-6.26-2.37-42.52-16.84-76.74-46.83-94.94-89.17-18.55-43.14-22.72-92.58-16.11-138.81.48-3.35 1.52-6.72 5.31-7.78 4.29-1.21 7.11 1.57 8.8 4.74 4.38 8.2 9.89 15.57 15.43 22.98 13.49 18.04 35.24 32.82 58.6 25.44 14.2-4.48 25.05-15.96 33.79-28.02 24.8-34.25 50.1-73.32 90.15-91.29 15.01-6.73 31.27-10.61 47.69-11.5 15.19-.82 29.92 2.56 45.06 2.44-14.49-18.2-22.96-39.43-25.88-61.36-5.33-39.99 7.76-82.28 36.28-112.63ZM251.07 622.87c-1.01-.85-2.01-1.71-3.02-2.56-1.5-1.66-2.98-3.34-4.5-4.98-5.62-6.02-5.1 2.32-4.83 6.14.2 2.89.41 5.78.67 8.67 4.9 53.64 23.45 106.71 70.96 136.84 39.69 25.17 90.84 30.87 136.65 34.33 51.55 3.89 104.7 3.24 156.17-1.5 78.61-7.24 178.22-42.86 175.29-137.43-.88-28.35-9.99-55.82-20.94-81.99-15.06-35.98-35.17-68.71-54.08-102.66-1.07-1.91-2.17-4.09-1.57-6.19.36-1.26 1.28-2.27 2.17-3.24 12.45-13.43 23.12-25.12 28.96-42.85 5.08-15.41 6.33-32.13 3.45-48.1-4.51-24.99-19.19-47.95-39.81-62.76-7.68-5.52-16.3-9.56-25.31-12.39-76.9-24.16-160.91 33.27-152.26 117.2 2.01 19.51 9.42 38.37 20.85 54.28 12.28 17.08 27.64 26.43 45.25 37.06 3.87 2.33 7.79 4.71 10.87 8.02 5.01 5.37 9.52 19.16-1.56 20.07-4.22.34-8.21-1.71-11.97-3.65-21.61-11.18-44.25-20.87-68.17-25.33-23.92-4.45-49.32-3.41-71.66 6.23-28.08 12.12-48.89 36.47-66.46 61.51-16.7 23.8-33.61 50.7-61.22 59.8-20.28 6.69-42.83 1.16-59.71-11.17a72.362 72.362 0 0 1-4.24-3.34Zm567.35-153.1c11.41-7.67 20.19-17.25 24.03-30.97 1.28-4.58-.37-4.65-3.86-4.75-10.36-.27-20.25 2.54-30.36 4.06-15.14 2.28-30.25 2.53-45.01-3.48-6.73-2.74-9.73-3.61-13.71 6.03-4.77 11.56-12.61 21.57-20.56 31.24-2.65 3.23-2.28 5.38.54 7.63 4.44 3.54 9.78 4.93 15.27 5.29 5.33.35 10.71.08 16.06.08 20.52.05 40.16-3.42 57.59-15.13Z"
        fill="#3d2202"
      />
      <g
        style={{
          clipPath: "url(#clippath)",
        }}
      >
        <path
          id="olho-globo"
          className={style.patoImg__olho__globo}
          ref={globoRef}
          d="M674.13 354.4c-8.57-1.5-17.76.92-24.2 8.87-7.02 8.66-7.56 21.8-1.3 31.01 12.41 18.25 43.89 13.05 48.21-9.12 3.1-15.93-9.02-28.36-22.71-30.76Z"
          fill="#3d2202"
        />
        <circle
          id="olho-pupila"
          className={style.patoImg__olho__pupila}
          cx={678.11}
          cy={378.73}
          r={7.32}
          ref={pupilaRef}
          fill= "#f2f2f2"
          style={{
            transform: `translate(${coords.x}px, ${coords.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </g>
      <path
        id="pato-corpo-asa"
        className={style.patoImg__corpo__asa}
        d="M368.94 665.14c.96 7.07 6.34 12.64 11.74 17.29 37.98 32.78 96.39 53.42 148.45 51.08 7.49-.34 14.86-1.16 22-2.48 28.87-5.35 46.06-24.56 60.29-48.92 11.79-20.17 16.33-43.39 5.97-65.19-19.21-40.43-63.14-41.43-99.6-26.1-23.94 10.05-45.28 24.8-69.55 34.41-16.51 6.53-33.37 12.1-49.98 18.34-9.72 3.66-31.23 7.35-29.32 21.57Z"
        fill="#fce36b"
      />
      <path
        id="pato-corpo-asa-borda"
        className={style.patoImg__corpo__asa__borda}
        d="M350.55 670.72c3.19 12.23 11.71 23.51 20.93 31.93 22.53 20.59 51.5 32.02 80.43 40.35 31.68 9.12 64.83 15.48 97.82 10.3 46.86-7.33 91.35-54.62 95.77-102.13 3.26-35.11-18.78-66.85-48.24-83.78-9.96-5.72-21.76-7.75-33.77-7.55-14.05.23-28.42 3.5-40.5 7.46-22 7.21-41.2 19.26-61.5 29.73-22.81 11.75-50.12 18.42-74.25 27.29-20.73 7.63-43.47 20.35-36.69 46.41Zm47.71-27.15c16.61-6.25 33.46-11.82 49.98-18.34 24.27-9.61 45.61-24.36 69.55-34.41 36.46-15.34 80.39-14.33 99.6 26.1 10.36 21.8 5.82 45.02-5.97 65.19-14.24 24.36-31.42 43.57-60.29 48.92-7.15 1.32-14.51 2.14-22 2.48-52.06 2.34-110.47-18.3-148.45-51.08-5.4-4.65-10.78-10.22-11.74-17.29-1.91-14.22 19.6-17.91 29.32-21.57Z"
        fill="#3d2202"
      />
    </svg>
  )
};

const Pato = () => {
  return (
    <SvgComponent />
  )
};

export default Pato;