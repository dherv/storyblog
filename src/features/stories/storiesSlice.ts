import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../app/api';
import { RootState } from '../../app/store';
import { IStory } from '../../app/types';

export interface StoryState {
  stories: IStory[];
  status: "idle" | "loading" | "failed" | "succeeded";
  error?: string;
}

const initialState: StoryState = {
  stories: [] as IStory[],
  status: "idle",
  error: "",
};

export const fetchStories = createAsyncThunk(
  "stories/fetchStories",
  async () => {
    const response = await Api.get("/stories");
    return response;
  }
);

export const addStory = createAsyncThunk(
  "stories/addStory",
  async (body: IStory) => {
    const response = await Api.post("/stories", body);
    return response;
  }
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    updateStory(state, action) {},
    deleteStory(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.stories = state.stories.concat(action.payload);
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(addStory.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(addStory.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.stories.push(action.payload);
    });
  },
});

export default storiesSlice.reducer;

export const getStories = (state: RootState) => state.stories.stories;
export const getStoriesByUser = (state: RootState, userId: number) =>
  state.stories.stories.filter((story) => story.userId === userId);
