
import { useState } from 'react';
import './App.css';

function App() {
const[formData,setFormData] = useState({
  firstName:''
})

function changeHandler(event){
  const{name,value,checked,type} = event.target;
  setFormData((prev)=>
    ({
      ...prev,
      [name]:value
    })
  )
}

console.log(formData);

  return (
   <div>
    <form>
      <input
        type='text'
        name='firstName'
        onChange={changeHandler}
        id='firstName'
        placeholder='shreyash'
        value={formData.firstName}
      ></input>
    </form>
   </div>
  );
}

export default App;
