import { useState } from 'react';

import MainHeader from './components/MainHeader';
import PostList from './components/PostList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHadler() {
    setModalIsVisible(false);
  }

  function showModalHadler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHadler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHadler} />
      </main>
    </>
  );
}

export default App;
