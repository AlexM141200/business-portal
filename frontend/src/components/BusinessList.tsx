import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './BusinessCard';
import BusinessCard from './BusinessCard';

interface Business {
  id: number;
  name: string;
  address: string;
}

interface BusinessInterfaceProps {
  backendName: string; //go
}

const BusinessInterface: React.FC<BusinessInterfaceProps> = ({ backendName }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  const [businesses, setBusinesses] = useState<Business[]>([]);
 
  const backgroundColors: { [key: string]: string } = {
    go: 'bg-cyan-500',
  };

  const buttonColors: { [key: string]: string } = {
    go: 'bg-cyan-700 hover:bg-blue-600',
  };

  const bgColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-gray-200';
  const btnColor = buttonColors[backendName as keyof typeof buttonColors] || 'bg-gray-500 hover:bg-gray-600';

  // Fetch all businesses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/${backendName}/businesses`);
        setBusinesses(response.data.reverse());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [backendName, apiUrl]);


  return (
    <div>

      {/* display users */}
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {businesses.map((business) => (
             <div className={`user-interface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded shadow`}>
          <div key={business.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <BusinessCard card={business} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default BusinessInterface;