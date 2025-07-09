import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Consciência Verde</h1>
      <nav>
        <ul>
          <li><a href="/conteudos">Conteúdos</a></li>
          <li><a href="/listas">Listas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
