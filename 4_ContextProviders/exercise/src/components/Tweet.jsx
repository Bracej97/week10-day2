import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Tweet({ username, content }) {
  const { userId } = useContext(AppContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h4>@{userId}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Tweet;
