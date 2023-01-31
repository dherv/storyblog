import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { getStoriesByUser } from './storiesSlice';

export const StoryListUser: FC = () => {
  const params = useParams() as { userId?: string };
  const stories = useAppSelector(state => getStoriesByUser(state, 1));
  return (
    <section>
      <ul>
        {stories.map((story) => (
          <li className="w-full shadow-md p-4 m-4" key={story.id}>
            {story.title}
          </li>
        ))}
      </ul>
      <NavLink to="/stories/add">
        <button>add a story</button>
      </NavLink>
    </section>
  );
};
