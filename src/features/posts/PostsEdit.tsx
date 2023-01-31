import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { postUpdated } from './postsSlice';

export const EditPostForm = ({ match } : {match:any}) => {
  const { postId } = match.params

  const post = useAppSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post!.title)
  const [content, setContent] = useState(post!.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = (e:any) => setTitle(e.target.value)
  const onContentChanged =(e:any) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}