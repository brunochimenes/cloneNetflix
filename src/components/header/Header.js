import React from "react";
import "./Header.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="Netflix" />
        </a>
      </div>
      <div className="header-user">
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png" alt="avatar" />
        </a>
      </div>
    </header>
  );
}