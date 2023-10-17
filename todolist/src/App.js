import { useEffect } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import webFont from "webfontloader";
function App() {
  useEffect(()=>{
    webFont.load({
      google:{
        families:["Roboto","chilanka","sans-serif"]
      }
    })
  },[])
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
