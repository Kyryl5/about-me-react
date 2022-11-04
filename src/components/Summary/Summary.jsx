import Paper from '@mui/material/Paper'

function Summary({ aboutUser }) {
  return (
    <Paper sx={{ p: 2 }} elevation={8}>
      <h2>Short Summary</h2>
      <h3>Name: {aboutUser.name}</h3>
      <div>
        <h3>Education</h3>
        <ul>
          <li>
            Specialist Degree: {aboutUser.education['Degree Specialist']}{' '}
          </li>
          <li>Bachelor Degree: {aboutUser.education['Degree Bachelor']} </li>
        </ul>
      </div>
    </Paper>
  )
}

export default Summary
