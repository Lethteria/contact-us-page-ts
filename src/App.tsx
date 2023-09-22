import React from 'react';
import Footer from "./components/footerLayout/footer";
import Header from "./components/headerLayout/header";
import ContactUsPage from "./pages/contactUsPage";

import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "./theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header />
          <ContactUsPage />
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
