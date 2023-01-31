import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectPosts } from './postsSlice';

export const PostsList : FC = () => {
  const posts = useAppSelector(selectPosts)
  return <ul>{posts.map(post => <li>{post.content}</li>)}</ul>
}