import React from 'react';
import { useParams } from 'react-router-dom';

export default function MyComponent() {
  const { email, nextSession } = useParams();

  return (
    <div>
      <h2>Welcome to Your Page</h2>
      <p>Email: {email}</p>
      <p>Next Session: {nextSession}</p>
    </div>
  );
}
