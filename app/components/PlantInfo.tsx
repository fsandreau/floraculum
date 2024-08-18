import Image from 'next/image';

interface PlantInfoProps {
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
    more: string
  };
}

const PlantInfo: React.FC<PlantInfoProps> = ({ name, info, imageUrl, additionalInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-3xl font-bold mb-4 text-green-700">{name}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4">{info}</p>
          <table className="w-full border-collapse border border-green-500">
            <tbody>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Scientific Name</td>
                <td className="border border-green-500 p-2">{additionalInfo.scientificName}</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Family</td>
                <td className="border border-green-500 p-2">{additionalInfo.family}</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Origin</td>
                <td className="border border-green-500 p-2">{additionalInfo.origin}</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Sunlight</td>
                <td className="border border-green-500 p-2">{additionalInfo.sunlight}</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Watering</td>
                <td className="border border-green-500 p-2">{additionalInfo.watering}</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Toxic to pets</td>
                <td className="border border-green-500 p-2">{additionalInfo.toxic}</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-semibold">Additionnal information</td>
                <td className="border border-green-500 p-2">{additionalInfo.more}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;