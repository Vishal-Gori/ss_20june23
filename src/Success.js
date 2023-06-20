import {useState} from "react";
import axios from "axios"

export default function Success(){

    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [pkg,setPkg] = useState("");
    const [ans,setAns] = useState("");

    const hName = (event) => {setName(event.target.value);}
    const hCompany = (event) => {setCompany(event.target.value);}
    const hPkg = (event) => {setPkg(event.target.value);}

    const save = (event) => {
        event.preventDefault();
        let urladd = "http://localhost:5000/save";
        let data = {name, company, pkg}
        axios.post(urladd, data)
        .then(res=> {
            setAns("Record Saved");
            setName("");
            setCompany("");
            setPkg("");
        })
        .catch(err => setAns("Issue "+err));
    }

    return(
        <>
        <center>
            <h1>Success Story App</h1>
            <form onSubmit={save}>
                <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
                <br/><br/>
                <input type="text" placeholder="Enter Company Name" onChange={hCompany} value={company}/>
                <br/><br/>
                <input type="number" placeholder="Enter Package" onChange={hPkg} value={pkg}/>
                <br/><br/>
                <input type="submit" />
                <br/><br/>
            </form>
            <h1>{ans}</h1>
        </center>
        </>
    );
}