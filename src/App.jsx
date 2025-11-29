import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SerachBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import WeatherApp from './WeatherApp.jsx';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <SerachBox />
        <InfoBox /> */}
        <WeatherApp />
        {/* <h2>Material UI Demo</h2>
      <Button variant="contained">Click Me1!</Button> &nbsp;
       <Button
        variant="contained"
        color="success"
        size="small"
        >Click Me2!</Button> <br></br><br></br>
          <Button variant="contained" startIcon={<DeleteIcon />} color="error">Delete</Button> &nbsp;
          <Alert severity="warning">This is an error alert — check it out!</Alert> */}
       </div>
    </>
  )
}

export default App
