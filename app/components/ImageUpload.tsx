import { useState, useRef } from 'react';
import { FaUpload, FaCamera } from 'react-icons/fa';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        dragActive ? 'border-green-500 bg-green-100' : 'border-gray-300'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={cameraInputRef}
        onChange={handleChange}
        accept="image/*"
        capture="environment"
        className="hidden"
      />
      <p className="text-lg font-semibold mb-4">
        Click to upload or drag and drop
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleUploadClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <FaUpload className="mr-2" /> Upload Image
        </button>
        <button
          onClick={handleCameraClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <FaCamera className="mr-2" /> Take Photo
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Supported formats: JPG, PNG, GIF
      </p>
    </div>
  );
};

export default ImageUpload;