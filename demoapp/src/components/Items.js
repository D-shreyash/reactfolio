import './Items.css';
import {useState} from 'react';

function Items(prop){

    const [name, setName] = useState(prop.name);

    function clickHandle(){
        setName("rin");
        alert("you have clicked");
    }

    return (
        <div>
            <p className="Nirma"> {name} </p>
            {prop.children} {/* this is to print between <items> </items> tag in app.js */}
            <button onClick={clickHandle}>click hear</button> {/* on clicking the button the name of product should change and alert message should go */}
        </div>
    );
}

export default Items;