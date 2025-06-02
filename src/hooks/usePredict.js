import { useState } from 'react';
import { predictEmotion } from "@/api/predictEmotion";


export default function usePredict() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const predict = async (imageData) => {
        setIsLoading(true);
        setError(null);
        setResult(null); // Reset previous result
        try {
            const prediction = await predictEmotion(imageData);
            setResult(prediction);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => {
        setResult(null);
        setError(null);
    };

    return { isLoading, error, result, predict, reset };
}