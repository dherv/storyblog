import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchStories, getStories } from './storiesSlice';

export const StoryList: FC = () => {
  const dispatch = useAppDispatch()
  const stories = useAppSelector(getStories);
  const storiesStatus = useAppSelector((state) => state.stories.status);
  const error = useAppSelector(state => state.stories.error)

  // fetch stories
  useEffect(() => {
    if (storiesStatus === "idle") {
      dispatch(fetchStories());
    }
  }, [storiesStatus, dispatch]);

  if(storiesStatus === 'loading') return <p>Loading...</p>
  if(storiesStatus === 'failed') return <p>{error}...</p>
  return (
    <section>
      <ul>
        {stories.map((story) => (
          <li className="w-full shadow-md p-4 m-4" key={story.id}>
            {story.title}
          </li>
        ))}
      </ul>
    </section>
  );
};
