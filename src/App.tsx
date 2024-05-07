import './App.css';
import logo from '../src/assets/chatgptLogo.svg'
import addBtn from '../src/assets/add-30.png'
import msgIcon from '../src/assets/message.svg'
import home from '../src/assets/home.svg'
import saved from '../src/assets/bookmark.svg'
import rocket from '../src/assets/rocket.svg'
import sendBtn  from '../src/assets/send.svg'
import userIcon from '../src/assets/user-icon.png'
import gptImgLogo from '../src/assets/chatgptLogo.svg'
import { sendMsgOpenAi } from './components/openai/openai';
import { RefObject, useEffect, useRef, useState } from 'react';


function App() {
  const msgEnd: RefObject<HTMLDivElement> = useRef(null);
  const [input, setInput] = useState("") ;
  const [messages, setMessages] = useState([{
    text:"Hi, I am chatgpt, How can I help you today?",
    isBot: true,
  }]) ;

  useEffect(() => {
    // Check if the current ref object is not null
    if (msgEnd.current) {
        // Assuming you meant `scrollIntoView`
        msgEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
}, [messages]);

 

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages,
      {text, isBot: false}
    ]);
    const res = await sendMsgOpenAi(input ?? "");
    setMessages([...messages,
      {
      text: input ?? "", isBot: false
    },
    {
      text: res || "", isBot: true
    }
  ]);
    console.log(res);
  }

  const handEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleSend();
    }
  }
  









  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="uppserSideTop"><img src= {logo}alt ="logo" className='logo' /> <span className="brand">JustGPT</span></div>
            <button className="midBtn" onClick={()=>{window.location.reload()}}><img src = {addBtn} alt = "New chat" className='addBtn'/>New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt = "Query"/>what is this?</button>
              <button className="query"><img src={msgIcon} alt = "Query"/>What is AI?</button>
            </div>
          </div>
          <div className="lowerSide">
          
              <div className="listItems"><img src ={home} alt = "Home" className='listitemsImg' />Home</div>
              <div className="listItems"><img src={saved} alt = "Saved" className='listitemsImg' />Saved</div>
              <div className="listItems"><img src={rocket} alt = "Rocket" className='listitemsImg' />Upgrade to Pro</div>

          </div>
        </div>
        <div className="main">
        <div className="chats">
  <>

    {messages.map((message, i) => (
      <div className={message.isBot?"chat bot":"chat"} key={i}>
        <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt="ChatGPT" />
        <p className="txt">{message.text}</p>
      </div>
    ))}
    <div ref = {msgEnd}></div>
  </>
</div>

          <div className="chatFooter">
            <div className="inp">
              <input type='text' value ={input} onKeyDown={handEnter} onChange={(e)=>{setInput(e.target.value)}} placeholder = 'Send a message'/> <button className="send" onClick={handleSend}><img src={sendBtn} alt= "Send" /></button>
            </div>
            <p>ChatGPT May produce incorrect Information</p>
          </div>

        </div>
      </div>
     
   
  );
}

export default App;
