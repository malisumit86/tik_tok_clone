import React, { useState, useEffect } from 'react'
import Video from "./Video"
import "./App.css"
import { db } from "./Firebase"
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //fires once when the component loads and never be again
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }, [videos]);

  return (
    //BEM 

    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares,poster }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
              poster = {poster}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
