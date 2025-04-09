
import BoxLeft from "../BoxLeft";
import BoxRight from "../BoxRight";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <main className={style.main}>
      <BoxLeft />
      <BoxRight />
    </main>
  )
}

export default Main;