import user from "../../user.json";
import Paper from "@mui/material/Paper";

function Experience() {
  return (
    <Paper sx={{ p: 2 }} elevation={8}>
      <h2>Professional Experience</h2>
      <ul>
        {user["professional-experience"].map((experience) => (
          <li key={experience}>{experience}</li>
        ))}
      </ul>
    </Paper>
  );
}

export default Experience;
