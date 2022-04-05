import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/social-network-97-1040773.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
