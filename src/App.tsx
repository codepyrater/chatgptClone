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



function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="uppserSideTop"><img src= {logo}alt ="logo" className='logo' /> <span className="brand">ChatGPT</span></div>
            <button className="midBtn"><img src = {addBtn} alt = "New chat" className='addBtn'/>New Chat</button>
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
            <div className="chat">
              <img className='chatImg' src={userIcon}alt = "ChatGPT"/><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore nemo delectus ratione placeat vero incidunt, dicta voluptatum eaque quo id illum eius! Debitis doloribus quasi rerum molestiae nostrum harum.</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptImgLogo}alt = "ChatGPT"/><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore nemo delectus ratione placeat vero incidunt, dicta voluptatum eaque quo id illum eius! Debitis doloribus quasi rerum molestiae nostrum harum.</p>
            </div>

          </div>

          <div className="chatFooter">
            <div className="inp">
              <input type='text' placeholder = 'Send a message'/> <button className="send"><img src={sendBtn} alt= "Send" /></button>
            </div>
            <p>ChatGPT May produce incorrect Information</p>
          </div>

        </div>
      </div>
     
   
  );
}

export default App;
