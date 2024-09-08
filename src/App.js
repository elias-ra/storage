import './App.css';

function App() {
  return (
    <div className="App">
      <div className="tools">
        <div className="fylo">
          {/* <span class="material-symbols-outlined">article</span> */}
          <i className="material-icons">article</i>
          <i class="material-icons">cloud</i>
        </div>
        <div className="icons"></div>
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
        </div>
        <span className="noGB"></span>
        <span className="allGB"></span>
      </div>
    </div>
  );
}

export default App;
