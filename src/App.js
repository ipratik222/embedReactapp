import './web-components/ChatModal.js'
import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {
  
  const inputRef = useRef(null);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    inputRef.current.addEventListener('getmessage', (e) => {
      setChat(chat.concat(e.detail.message));
      const chatEmit = new Event('chatemit', {
        bubbles: true,
        cancelable: true,
        detail: {
          chat: chat
        }
      });
      inputRef.current.dispatchEvent(chatEmit)
    })
  }, [chat])

  return (
    <div className="App">
      <chat-modal ref={inputRef} chat={chat}></chat-modal>
    </div>
  );
}

export default App;
