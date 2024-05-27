// src/components/TrafficLightsContainer.tsx
import React, { useEffect, useState } from 'react';
import TrafficLight from './TrafficLights';
import { Grid } from '@mui/material';

interface TrafficLightData {
  direction: string;
  currentStateColor: string;
  isRightTurnActive: boolean;
}

const TrafficLightsContainer: React.FC = () => {
  const [trafficLights, setTrafficLights] = useState<TrafficLightData[]>([]);

  useEffect(() => {
    const fetchTrafficLights = async () => {
      try {
        const response = await fetch('trafficlights');
        const data = await response.json();
        setTrafficLights(data);
      } catch (error) {
        console.error('Failed to fetch traffic lights', error);
      }
    };

    fetchTrafficLights();
    const interval = setInterval(fetchTrafficLights, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container justifyContent="center">
      {trafficLights.map((light) => (
        <TrafficLight
          key={light.direction}
          direction={light.direction}
          currentState={light.currentStateColor}
          isRightTurnActive={light.isRightTurnActive}
        />
      ))}
    </Grid>
  );
};

export default TrafficLightsContainer;
