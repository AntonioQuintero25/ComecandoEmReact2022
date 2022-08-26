import { useState } from "react";
import { Tweet } from "./components/Tweet";
import './App.css';
import { AppRoutes } from "./Route";

function App() {

  const [tweet, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4'
  ]);


  function createTweet()
  {
    setTweets([...tweet,'Tweet 5'])
  }

 return (
   <AppRoutes />
//  <div>
//    {tweet.map(tweet =>{
//      return <Tweet text={tweet}/>
//    })}
//    <button style={{backgroundColor:'red',
//     border:'0px',
//     padding:'24px'}} 
//     onClick={createTweet}>
//       Adicionar Tweet
//       </button>
//    </div>
   );
}

export default App
