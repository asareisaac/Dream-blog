

import Menu from './Menu'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
  


function App() {
  
  return (
    <Router>
    <div className="App">
    <Menu />
    <div className="content">
     <switch>
     <Route exact path="/">
     <Home/>
     </Route >
      <Route path="/create">
      <Create/>
      </Route>
      <Route path="/blogs/:id">
      <BlogDetails/>
      </Route>
     </switch>
    
    </div> 
    </div>
    </Router>
  );
    
};

export default App;
