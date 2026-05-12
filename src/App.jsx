import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import { SnackbarProvider } from "./contexts/SnackbarContext";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

// function Dashboard() {
//   return <h1>Dashboard Page</h1>;
// }

// function Home() {
//   return <h1>Home Page</h1>;
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;