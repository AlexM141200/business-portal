import React from 'react';
import UserInterface from '../components/UserInterface';
import ReactVoiceflow from '../components/ReactVoiceflow';

const Home: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen bg-gray-100">
      <div className="m-4">
        <UserInterface backendName="go" />
        <ReactVoiceflow />
      </div>
    </main>
  );
}

export default Home;