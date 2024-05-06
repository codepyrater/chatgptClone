import './App.css';
import logo from '../src/assets/chatgptLogo.svg'
import addBtn from '../src/assets/add-30.png'
import msgIcon from '../src/assets/message.svg'
import home from '../src/assets/home.svg'
import saved from '../src/assets/bookmark.svg'
import rocket from '../src/assets/rocket.svg'
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="uppserSideTop"><img src= {logo}alt ="logo" className='logo' /> <span className="brand">chatGpt</span></div>
            <button className="midBtn"><img src = {addBtn} alt = "New chat" className='addBtn'/>New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt = "Query"/>what is this?</button>
              <button className="query"><img src={msgIcon} alt = "Query"/>What is AI?</button>
            </div>
          </div>
          <div className="lowerSide">
          
              <div className="listItems"><img src ={home} alt = "Home" className='listitemsImg' />Home</div>
              <div className="listItems"><img src={saved} alt = "Saved" className='listitemsImg' />Save</div>
              <div className="listItems"><img src={rocket} alt = "Rocket" className='listitemsImg' />Upgrade to Pro</div>

          </div>
        </div>
        <div className="main">

        </div>
      </div>
     
   
  );
}

export default App;
