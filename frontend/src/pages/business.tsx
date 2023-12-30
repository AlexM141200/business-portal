import React from 'react';
import BusinessInterface from '../components/BusinessInterface';

export default function Business() {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen bg-gray-100">
      <div className="m-4">
        <BusinessInterface backendName="go" />
      </div>
    </main>
  );
}
