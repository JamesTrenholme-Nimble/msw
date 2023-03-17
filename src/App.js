import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

if (process.env.REACT_APP_ENV === "development") {
  console.log(process.env.REACT_APP_ENV);
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  const [useData, setData] = useState({});

  useEffect(() => {
    (async () => {
      const { results } = await import("./mocks/data.json");
      setData(results.rankings);
    })();
  }, []);

  console.log(useData);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Mock Service Worker - Demo
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
