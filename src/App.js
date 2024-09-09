import './App.css';
import folder from './assests/icon-folder.svg'
import upload from './assests/icon-upload.svg'
import document from './assests/icon-document.svg'
import logo from './assests/logo.svg'

function App() {
  return (
    <div className="App">
      <div className="tools">
        <div className="fylo">
          <img src={logo}/>
        </div>
        <div className="icons">
          <img src={document} className="document" onClick={e => alert("You've clicked on document icon")}/>
          <img src={folder} className="folder" onClick={e => alert("You've clicked on folder icon")}/>
          <img src={upload} className="upload" onClick={e => alert("You've clicked on upload icon")}/>
        </div>
      </div>
      <div className="storage">
        <div className="leftGB">
          <span className='number'>185</span>
          <span className='text'>GB Left</span>
        </div>
        <div className="information">
          <p>You've used <span>815 GB</span> of your storage</p>
          <div className="line">
            <div><span></span></div>
          </div>
          <div className="GB">
            <span className="noGB">0 GB</span>
            <span className="allGB">1000 GB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
