import React from 'react';
let object={
	photo:"/image.jpg",
	Name:{firstName:"Nadia ", lastName:"Rahmeni"},
	profileLink:"www.facebook.com"
}

function App() {
  return (
    <div>
     <img src={object.photo} alt='..'/> 
     <p>{object.Name.firstName}</p> 
     <p>{object.Name.lastName} </p>
     <button onClick={() => object.profileLink.length!==0? window.open(object.profileLink):'#'}>see profil</button>
    </div>
   
  );
}

export default App;
