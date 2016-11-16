import React from 'react'
const Home = () => (
   
    <div>
    <h1>Redux principles</h1>
     <h2>1st</h2>
    Reperesent whole state of an application as a Single JS object
     <h2>2nd</h2>
    State tree is read only, need to dispatch an action to change the state tree.
    <h2>3rd</h2>
    Changes are made with pure functions<br />
    Reducer: take the previous state, the dispatch action and returns the next start.
    </div>
)

export default Home