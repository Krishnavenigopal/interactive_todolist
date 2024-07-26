import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="p-8 h-full">
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
