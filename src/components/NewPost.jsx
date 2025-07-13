import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enterdAuthor, setEnterdAuthor] = useState('');

  function handlerBodyChange(event) {
    setEnteredBody(event.target.value);
  }
  function handlerAuthorChage(event) {
    setEnterdAuthor(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const postData = {
      id: Date.now(),
      body: enteredBody,
      author: enterdAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={handlerBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={handlerAuthorChage} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
