import ImageCard from '@/components/common/ImageCard';
import { ImageProps } from '@/interfaces';
import { useState } from 'react';

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);
    const resp = await fetch('/api/generate-image', {
      method: 'POST',
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!resp.ok) {
      setIsLoading(false);
      return;
    }

    const data = await resp.json();
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p>Generate stunning images based on your prompts!</p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter you prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">
            {/* {
            isLoading ? "Loading..." : "Generate Image"
            } */}
            Generate Image
          </button>
        </div>

        {imageUrl && (
          <ImageCard
            action={() => setImageUrl(imageUrl)}
            imageUrl={imageUrl}
            prompt={prompt}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
