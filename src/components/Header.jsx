import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://rusclean.net/wp-content/uploads/2016/12/envato-logo-small.svg"
        alt="Here img"
      />
    </header>
  );
};

export default Header;
