import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
    <div className="App"/>
      <body>

<nav className="col-1">
    <ul>
        <li><a href="#notes">Notes</a></li>
        <li><a href="#reminders">Reminders</a></li>
        <li><a href="#archive">Archive</a></li>
        <li><a href="#trash">Trash</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>

  </nav>
  <div className="col-2"/>

    <header><input type="text" placeholder="Search.."/>
       
        <a href="#" className="button">Search</a>
    </header>
  <main className="content">
  <article></article>

  <form className="w3-container w3-card-4" action="/action_page.php">
    <h2 className="w3-text-blue">Note Taking Application</h2>
    
    <p>      
    <label className="w3-text-blue"><b>Note Label:</b></label>
    <input className="w3-input w3-border" name="Label" type="text"/></p>
    <p>      
    <label className="w3-text-blue"><b>Note:</b></label>
    <input className="w3-input w3-border" name="Note" type="text"/></p>
    <p>      
    <button className="w3-btn w3-blue">Save Note</button></p>
  </form>

  <div className="w3-container">
    <div className="w3-panel w3-pale-blue w3-leftbar w3-rightbar w3-border-blue">
      <p>"Saved notes"</p>
    </div>
    <div className="w3-panel w3-pale-blue w3-leftbar w3-rightbar w3-border-blue">
        <p>"Archived notes"</p>
      </div>

  </div></main>
    



</body>
  </Fragment>
      
    
  );
}

export default App;
