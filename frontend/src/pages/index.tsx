import React from 'react';
import UserInterface from '../components/UserInterface';
import ReactVoiceflow from '../components/ReactVoiceflow';
import BusinessList from '@/components/BusinessList';

const Home: React.FC = () => {
  return (
    <main className="flex flex-wrap items-start min-h-screen bg-gray-100">
    <BusinessList backendName='go'/>
    </main>
  );
}

export default Home;