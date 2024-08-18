'use client';

import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import PlantInfo from './components/PlantInfo';
import { FaUpload, FaRobot, FaInfoCircle, FaLeaf, FaTint, FaSun } from 'react-icons/fa';
import Logo from './components/Logo';


export default function Home() {
  const [plantInfo, setPlantInfo] = useState<{
    name: string;
    info: string;
    imageUrl: string;
    additionalInfo: {
      scientificName: string;
      family: string;
      origin: string;
      sunlight: string;
      watering: string;
      toxic: string;
      more: string;
    };
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to identify plant');
      }

      const data = await response.json();
      setPlantInfo({
        ...data,
        imageUrl: URL.createObjectURL(file),
      });
    } catch (error) {
      console.error('Error identifying plant:', error);
      alert('Failed to identify plant. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <Logo />
          <h1 className="text-5xl font-bold text-green-800 ml-4 font-lora">
            Floraculum
          </h1>
        </div>
        <p className="text-xl text-green-700">
          Discover the magic of nature, one plant at a time
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-xl p-8 mb-12">
  <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
    How It Works
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="bg-green-400 rounded-full p-4 inline-block mb-4">
        <FaUpload className="text-gray-900 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-400">Upload Image</h3>
      <p className="text-gray-300">Simply upload a photo of any plant you want to identify</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="bg-green-400 rounded-full p-4 inline-block mb-4">
        <FaRobot className="text-gray-900 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-400">AI Analysis</h3>
      <p className="text-gray-300">Our AI instantly analyzes and identifies the plant species</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="bg-green-400 rounded-full p-4 inline-block mb-4">
        <FaInfoCircle className="text-gray-900 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-400">Get Details</h3>
      <p className="text-gray-300">Receive comprehensive information about the identified plant</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="bg-green-400 rounded-full p-4 inline-block mb-4">
        <FaLeaf className="text-gray-900 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-400">Plant Characteristics</h3>
      <p className="text-gray-300">Learn about the plant's family, origin, and unique features</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="bg-green-400 rounded-full p-4 inline-block mb-4">
        <FaSun className="text-gray-900 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-400">Care Instructions</h3>
      <p className="text-gray-300">Get tips on sunlight requirements and optimal growing conditions</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="bg-green-400 rounded-full p-4 inline-block mb-4">
        <FaTint className="text-gray-900 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-400">Watering Guide</h3>
      <p className="text-gray-300">Discover the ideal watering schedule for your identified plant</p>
    </div>
  </div>
</div>

      <ImageUpload onImageUpload={handleImageUpload} />
      
      {isLoading && (
        <div className="text-center mt-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          <p className="text-white mt-4">Identifying plant...</p>
        </div>
      )}
      
      {plantInfo && (
        <PlantInfo
          name={plantInfo.name}
          info={plantInfo.info}
          imageUrl={plantInfo.imageUrl}
          additionalInfo={plantInfo.additionalInfo}
        />
      )}
    </main>
  );
}