// src/App.tsx
import './App.css';
import TrafficLightsContainer from './Components/TrafficLightsContainer';
import { CssBaseline, Container, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <header className="App-header">
          <Typography variant="h4" component="h1" gutterBottom>
            Traffic Lights System
          </Typography>
          <TrafficLightsContainer />
        </header>
      </Container>
    </div>
  );
}

export default App;
