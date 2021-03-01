import { ThemeProvider } from '@material-ui/styles';
import React ,{useState}from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import theme from './Constants/theme';
import Router from './Router/Router'



function App() {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header
            rightButton ={rightButton}
            setRightButton = {setRightButton}
          />
          <Router
            setRightButton = {setRightButton}
          />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
