import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies/Hobbies";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <header>
            <Header />
          </header>
          <section>
            <Summary />
          </section>
          <section>
            <Experience />
          </section>
          <section>
            <Hobbies />
          </section>
        </Stack>
      </Box>
    </main>
  );
}

export default App;
