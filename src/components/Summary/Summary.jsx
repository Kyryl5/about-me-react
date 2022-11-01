import user from '../../user.json'
import Paper from '@mui/material/Paper'

function Summary() {
  return (
    <Paper sx={{ p: 2 }} elevation={8}>
      <div>
        <h2>Short Summary</h2>
        <h3>Name: {user.name}</h3>
        <div>
          <h3>Education</h3>
          <ul>
            <li>Specialist Degree: {user.education['Degree Specialist']} </li>
            <li>Bachelor Degree: {user.education['Degree Bachelor']} </li>
          </ul>
        </div>
      </div>
    </Paper>
  )
}

export default Summary
