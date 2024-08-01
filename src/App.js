import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
const [data,setData] = useState(null)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => setData(response.data))
  },[])
  return(
    <>
    {data ? (
      data.map((post) =>
        <ul>
      <li key={post.id}>{post.title}</li></ul>)
    ):(<p>Loading...</p>)}
    </>
  )
}

export default App;
