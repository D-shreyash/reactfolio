import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //tow use state 

  // const[firstName, setFirstName] = useState('');
  // const[LastName,setLastName] = useState('');
  // function changeFirstNameHnadler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHnadler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  //use only one useState 


  const[formData,setFormData]=useState({firstName:'',lastName:'',email:'',comments:'',mode:'',invisible:true,favcar:''});

  function changeHnadler(event){
    const{name,value,checked,type}=event.target

    setFormData(prviData=>{
      return{
        ...prviData,
        [name]:type==="checkbox" ? checked:value 
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("final data");
    console.log(formData);
  }
 
  return (
    <div className='flex flex-col items-center bg-red'> 
    <div className="bg-blue-500 text-white">Hello, Tailwind!</div>
      <form>
        <input 
              type="text" 
              placeholder='first name' 
               onChange={changeHnadler}
               name='firstName'
               value={formData.firstName}//to maintain the value inside component
               >
        </input>
        <input
        
        type='text'
        
        >
        </input>
        <br></br> 
        <br/>
        <input type='text'
              placeholder='last name'
              onChange={changeHnadler}
              name='lastName'
              value={formData.lastName}//to maintain the value inside component
              >
        </input>
        <br></br>
        <br></br>
        <input
          type='email'
          placeholder='email'
          onChange={changeHnadler}
          name='email'
          value={formData.email} //to maintain the value inside component
        >
        </input>

        <br></br>
        <br></br>
        <textarea
          placeholder='enter your comments hear'
          name='comments'
          onChange={changeHnadler}
          value={formData.comments}
        ></textarea>
        <br></br>
        <input
          type='checkbox'
          onChange={changeHnadler}
          name='invisible'
          checked={formData.invisible}
          id='invisible'
        ></input>
        <label htmlFor='invisible'>Am i visible?</label> 

        <br></br>
        <br></br>
        <input
          type='radio'
          onChange={changeHnadler}
          name='mode'
          value='online_mode'
          id='online_mode'
          checked={formData.mode==="online_mode"}
        ></input>
        <label htmlFor='online_mode'>online mode</label>
        <input
          type='radio'
          onChange={changeHnadler}
          name='mode'
          value='offline_mode'
          id='offline_mode'
          checked={formData.mode==="offline_mode"}
        ></input>
        <label htmlFor='offline_mode'>offline mode</label>

        <br></br>
        <br></br>

        <select
          name="favcar"
          id='favcar'
          value={formData.favcar}
          onChange={changeHnadler}
        >
          <option value="scorpio">scarpio</option>
          <option value="thar">thar</option>
          <option value="marcedice">marcidise</option>
          <option value="supra">supra</option>
        </select>

        <input
          type='submit'
           onClick={submitHandler}
        ></input>


      </form>
    </div>
  );
}

export default App;
