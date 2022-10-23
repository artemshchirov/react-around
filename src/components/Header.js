import logo from '../images/logo-around.svg';

export default function Header() {
  return (
    <header className="header page__header">
      <a
        href="https://github.com/artemshchirov"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt="logo 'Around'" className="logo button" />
      </a>
    </header>
  );
}
