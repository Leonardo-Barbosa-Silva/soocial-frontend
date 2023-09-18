import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme';
import { useMemo } from 'react';
import AuthPage from "pages/Auth";
import HomePage from "pages/Home";
import ProfilePage from "pages/Profile";



function App() {
  const mode = useSelector( state => state.users.mode )
  const theme = useMemo( () => createTheme(themeSettings(mode)), [mode] )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </Router>
    </ThemeProvider>
  )
}

export default App;
