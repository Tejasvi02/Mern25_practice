import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const email = 'tej@123.com';
    const nextSession = 'React';
    navigate(`/tej/${email}/${nextSession}`);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleNavigate}>My Route</button>
    </div>
  );
}
