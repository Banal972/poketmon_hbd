import { Route, Routes } from 'react-router-dom';
import Main from './page/main/Main';
import Layout from './components/common/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
  );
}

export default App;
