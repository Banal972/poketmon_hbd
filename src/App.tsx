import { Route, Routes } from 'react-router-dom';
import Main from './page/main/Main';
import Layout from './components/common/Layout/Layout';
import Search from './page/search/Search';
import Complete from './page/complete/Complete';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='search' element={<Search/>}/>
        <Route 
          path='complate' 
          element={<Complete/>}
        />
      </Route>
    </Routes>
  );
}

export default App;
