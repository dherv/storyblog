import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { TemplateApp } from './components/templates/TemplateApp';
import { Post } from './features/posts/Post';
import { AddPostForm } from './features/posts/PostsAdd';
import { PostsList } from './features/posts/PostsList';
import { StoryAdd } from './features/stories/StoryAdd';
import { StoryList } from './features/stories/StoryList';
import { StoryListUser } from './features/stories/StoryListUser';

export default function App() {
  return (
    <Router>
      <TemplateApp>
        <Switch>
          <Route exact path="/stories" component={StoryList} />
          <Route exact path="/stories/add" component={StoryAdd}></Route>
          <Route
            exact
            path="/stories/:userId"
            component={StoryListUser}
          ></Route>
     
          <Redirect to="/stories" />
        </Switch>
      </TemplateApp>
    </Router>
  );
}
