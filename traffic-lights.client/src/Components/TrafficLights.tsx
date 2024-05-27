// src/components/TrafficLight.tsx
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';

interface TrafficLightProps {
  direction: string;
  currentState: string;
  isRightTurnActive: boolean;
}

const Light = styled(Paper)(({ color }) => ({
  height: '100px',
  width: '100px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '10px',
}));

const TrafficLight: React.FC<TrafficLightProps> = ({
  direction,
  currentState,
  isRightTurnActive,
}) => {
  const getColor = (state: string) => {
    switch (state) {
      case 'Green':
        return 'limegreen';
      case 'Yellow':
        return 'yellow';
      case 'Red':
        return 'red';
      default:
        return 'grey'; // default color when state is unknown
    }
  };

  return (
    <div>
      <Light color={getColor(currentState)} elevation={4}>
        {direction}
      </Light>
      {isRightTurnActive && direction === 'North' && (
        <div style={{ color: 'green', marginTop: '10px', fontSize: '24px' }}>
          <FontAwesomeIcon icon={faArrowsTurnRight} /> Turn Right
        </div>
      )}
    </div>
  );
};

export default TrafficLight;
