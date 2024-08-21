import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI, Part } from '@google/generative-ai';
import { Console } from 'console';

console.log("GOOGLE_GEMINI_API_KEY = " + process.env.GOOGLE_GEMINI_API_KEY!);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);


export async function POST(req: NextRequest) {
  const data = await req.formData();
  const image = data.get('image') as File;

  if (!image) {
    return NextResponse.json({ error: 'No image provided' }, { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Identify this plant and provide the following information:
    1. Plant name
    2. Brief description
    3. Scientific name
    4. Family
    5. Origin
    6. Sunlight requirements
    7. Watering needs
    8. Whether the plant is toxic to pets
    9. Any additional information

    Please format the response as follows:
    Plant Name: [name]
    Description: [description]
    Scientific Name: [scientific name]
    Family: [family]
    Origin: [origin]
    Sunlight: [sunlight requirements]
    Watering: [watering needs]
    Toxic: [yes/no]
    More: [additional information]`;

    const imageBytes = await image.arrayBuffer();
    const uint8Array = new Uint8Array(imageBytes);

    const imagePart: Part = {
      inlineData: {
        data: Buffer.from(uint8Array).toString('base64'),
        mimeType: image.type,
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // Parse the response
    const lines = text.split('\n');
    const plantInfo: any = {};

    lines.forEach(line => {
      const [key, value] = line.split(': ');
      if (key && value) {
        console.log(key, value);
        plantInfo[key.toLowerCase().replace(' ', '')] = value.trim();
      }
    });

    return NextResponse.json({
      name: plantInfo.plantname,
      info: plantInfo.description,
      additionalInfo: {
        scientificName: plantInfo.scientificname,
        family: plantInfo.family,
        origin: plantInfo.origin,
        sunlight: plantInfo.sunlight,
        watering: plantInfo.watering,
        toxic: plantInfo.toxic,
        more: plantInfo.more,
      },
    });
  } catch (error) {
    console.error('Error identifying plant:', error);
    return NextResponse.json({ error: 'Failed to identify plant' }, { status: 500 });
  }
}