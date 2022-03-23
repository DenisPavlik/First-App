import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <div className={s.dialog}>Masha</div>
        <div className={s.dialog}>Artem</div>
        <div className={s.dialog}>Lena</div>
        <div className={s.dialog}>Oleg</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Denys</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is you IT course?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
