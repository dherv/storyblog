import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addStory } from './storiesSlice';

const initialState = {
  title: "",
  text: "",
  type: "",
};
export const StoryAdd: FC = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const storyStatus = useAppSelector((state) => state.stories.status);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addStory({ id: nanoid(), ...state, up: 0, userId: 1 })).then(() =>
      history.push("/stories/1")
    );
  };

  if (storyStatus === "loading") return <p>Loading...</p>;
  return (
    <section>
      <h2 className="form-title">Add a new story</h2>
      <form className="min-h-screen">
        <label className="form-label" htmlFor="title">
          title
        </label>
        <input
          id="title"
          className="form-element"
          name="title"
          value={state.title}
          onChange={handleChange}
        ></input>
        <label className="form-label" htmlFor="type">
          type
        </label>
        <select
          id="type"
          className="form-element"
          name="type"
          onChange={handleChange}
          defaultValue={state.type}
        >
          <option value={undefined} disabled>
            choose a type
          </option>
          <option value="sci-fi">Sci-fi</option>
          <option value="action">Action</option>
        </select>
        <label className="form-label" htmlFor="story">
          story
        </label>
        <textarea
          id="story"
          value={state.text}
          name="text"
          onChange={handleChange}
          className="form-element p-6 h-full min-h-full"
        ></textarea>
        <button onClick={handleSubmit} className="btn ml-auto">
          add
        </button>
      </form>
    </section>
  );
};
