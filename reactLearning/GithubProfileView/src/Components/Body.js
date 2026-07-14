import { useEffect,useState } from "react";
import Header from "./Header";
export default function Body(){

    const [Profile,setProfile] = useState([]);
    const [NumberOfProfile,setNumberOfProfile]=useState("");


    async function generateProfile(count=10){

        const ran = Math.floor(1+Math.random()*10000);

        const url=`https://api.github.com/users?since=${ran}&per_page=${count}`;
        

        try{
            const res=await fetch(url);

            const data=await res.json();

            console.log(data);
            setProfile(data);
        }
        catch(err){
            console.log("error is given",err);
        }
    }
    useEffect(()=>{
        generateProfile();
    },[]);
    
    return(
        <>
            <Header count={NumberOfProfile} countFunc={setNumberOfProfile} countSearch={generateProfile}/>

            <div className="profiles">
                {
                    Profile.map((value)=>{
                        return (
                            <div className="profile" key={value.id}>
                                <img src={value.avatar_url} className="cardImg"></img>
                                <h2>{value.login}</h2>
                                <a href={value.html_url} target="_blank">See Profile</a>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
