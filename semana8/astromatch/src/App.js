import AppContainer from './components/AppContainer'
import styled from 'styled-components'

const AppCenter = styled.div`
  height: 100vh;
  width:100vw;
  display: flex;
  justify-content: center;
  background-color:#efefef;
  align-items: center;
`;

function App() {
  return (
    <AppCenter>
      <AppContainer/>
    </AppCenter>
  );
}

export default App;
