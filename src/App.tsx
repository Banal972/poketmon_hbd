import { Route, Routes } from 'react-router-dom';
import Main from './page/main/Main';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
  );
}

export default App;
