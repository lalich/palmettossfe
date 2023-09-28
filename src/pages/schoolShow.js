import { Link, useLoaderData, Form } from "react-router-dom";
import Header from '../components/Header'
import { schoolShowLoader } from "../loaders";

const schoolShow = () => {
  const school = schoolShowLoader

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };
 
  return (
    <div style={div}>
       <Header>
    
    </Header>
            <h2>{school.name}</h2>
            <img src={school.school_photo} alt="School Image" />
            <h4>State: {school.state}</h4>
            <h4>Zip: {school.zip_code}</h4>
            <h5>Security Needs Description: {school.security_description}</h5>
            
      
      <div style={{ textAlign: "center" }}>
        <h2>Update Your Specialist</h2>
        <Form method="post" action={`/update/${school.id}`}>
            <input type="text" name='name' placeholder='Schools Name' defaultValue={school.name}/>
            <input type="text" name='school_photo' placeholder='School Photo'  defaultValue={school.school_photo}/>
            <input type="text" name='state' placeholder='State (two letters)'  defaultValue={school.state}/>
            <input type="text" name='zip_code' placeholder='Zip Code' defaultValue={school.zip_code} />
            <input type="text" name='security_description' placeholder='Provide a 300 character or less description of your security needs.'  defaultValue={school.security_description}/>
            
            
          <button>Update My Profile Beeze</button>
          </Form>
          <Form method="post" action={`/delete/${school.id}`}>
            <button>We no longer feel the need for protection!</button>
        </Form>
        
      </div>
      <Link to="/">Back to the Marketplace</Link>
    </div>
  );
}

export default schoolShow;