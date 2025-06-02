import { useState } from 'react';
import { checkHealth } from "@/api/checkHealth";

export default function useHealth() {
    const [healthData, setHealthData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const checkApiHealth = async () => {
        setIsLoading(true);
        try {
            const healthStatus = await checkHealth();

            // Create a copy to avoid mutating the original response
            const modifiedStatus = { ...healthStatus };

            if (healthStatus.status === 'healthy') {
                modifiedStatus.statusMessage = 'API';
            }

            if (healthStatus.model_loaded) {
                modifiedStatus.modelMessage = 'Modelo cargado';
            }

            setHealthData(modifiedStatus);
            setError(null);
        } catch (error) {
            setError(error);
            setHealthData(null);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        healthData,
        error,
        isLoading,
        checkApiHealth
    };
}
