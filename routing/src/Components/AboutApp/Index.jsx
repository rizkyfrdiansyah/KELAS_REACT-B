import style from "./style.module.css";

const AboutApp = () => {
  return (
    <div className={style.Wrapper}>
      <div>
        <h1>About App</h1>
        <p>Apps ini adalah kombinasi dari 3 tugas yaitu event handling, Hook, dan router. inti dari apps ini adalah membuat todo list yang dapat di masukan baru dan dapat di hapus dari list</p>
      </div>
    </div>
  );
};

export default AboutApp;
