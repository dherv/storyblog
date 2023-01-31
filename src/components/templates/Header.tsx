import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="p-4 font-thin">
      <NavLink to="/">
        <h1>StoryBlog</h1>
      </NavLink>
      <NavLink to="/stories/1">Account</NavLink>
    </header>
  );
};
