import './Header.css';

interface HeaderProps {
  onArchiveClick: () => void;
}

export default function Header({ onArchiveClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-center">
          <h1 className="title">
            DAILY TIL
          </h1>
          <p className="subtitle">Today I Learned</p>
        </div>
        <div className="header-right">
          <button onClick={onArchiveClick} className="header-icon-btn">
            📚
          </button>
        </div>
      </div>
    </header>
  );
}
