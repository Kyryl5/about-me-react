import './App.css'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Summary from './components/Summary/Summary'
import Experience from './components/Experience/Experience'
import Hobbies from './components/Hobbies/Hobbies'
import Header from './components/Header/Header'

function App() {
  const aboutUser = {
    name: 'Kyryl Savytskyi',
    education: {
      'Degree Specialist':
        'University of Emerging Technologies by NAU. Land Management and Cadastre Engineer',
      'Degree Bachelor':
        'College of Information Technology and Land Management. Cartography, Geodesy and Land Management',
    },
    'professional-experience': [
      'Shop assistant',
      'Sales manager',
      'Event maintenance engineer',
      'Event support manager',
      'Conference service manager',
    ],
    hobbies: ['running', 'kayaking'],
  }

  return (
    <main>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <header>
            <Header />
          </header>
          <section>
            <Summary aboutUser={aboutUser} />
          </section>
          <section>
            <Experience aboutUser={aboutUser} />
          </section>
          <section>
            <Hobbies aboutUser={aboutUser} />
          </section>
        </Stack>
      </Box>
    </main>
  )
}

export default App
