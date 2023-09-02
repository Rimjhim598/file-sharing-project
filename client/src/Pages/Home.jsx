import '../App.css';
import { useRef } from 'react';
const Home=()=>{
    const fileInputRef=useRef();
    return(
    <div className='container'>
        <h1>Filebin </h1>
        <p>Conveneint file sharing without Registeration</p>
        <p><span>1
            </span>
            <input type='file'
            ref={fileInputRef}
            style={{ display: "none" }}/>
            <button onClick={()=>fileInputRef.current.click()}>Select files to upload</button>&nbsp;
            drag-drop the file in this window</p>
        <p><span>2</span>wait until file upload complete</p>
        <p><span>3</span>This file will be available at URI which you can share</p>
        <p className='info'>The files can be deleted manually at any time and will in any case be deleted automatically 6 days from now.</p> 
    </div>
    )
}
export default Home;