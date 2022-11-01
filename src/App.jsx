import './App.css'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Summary from './components/Summary/Summary'
import Experience from './components/Experience/Experience'
import Hobbies from './components/Hobbies/Hobbies'

function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Summary />
        <Experience />
        <Hobbies />
      </Stack>
    </Box>
  )
}

export default App
