'use client';

import style from "./Background.module.scss";
// import video from '../../../public/assets/videos/bg_video.mp4';
// import video from 'assets/videos/background.mp4';

const Background = () => {

  return (
    <div className={style.bg}>
      <div className={style.bg__overlay} />
      <video playsInline autoPlay muted loop className={style.bg__video}>
        <source src='/assets/videos/bg_video.mp4' type="video/mp4" />
      </video>
    </div>

  )
};


export default Background;
