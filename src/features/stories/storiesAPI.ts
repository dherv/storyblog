import Api from '../../app/api';
import { IStory } from '../../app/types';

export const getStories = () => Api.get("/stories");
export const postStory = (text: string, type: string) =>
  Api.post("/stories", { text });
export const putStory = (story: IStory) =>
  Api.put(`/stories/${story.id}`, story);
export const deleteFocus = (id: string) => Api.delete(`/stories/${id}`);
