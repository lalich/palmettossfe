import { Link, useLoaderData, Form } from "react-router-dom";
import Header from '../components/Header'
import { sssShowLoader } from "../loaders";

const SssShow = () => {
  const specialist = useLoaderData(sssShowLoader);
console.log(specialist)
  const div = {
    textAlign: "center",
    border: "3px solid purple",
    width: "80%",
    margin: "30px auto",
  };
 
  return (
    <>
    <Header />
    <div style={div}>
     
      <h2>{specialist.first_name}</h2> 
      <h2>{specialist.last_name}</h2>
            
            <img src={specialist.sss_photo} alt="Profile Image" />
            <h3>{specialist.years_experience} Years of Experience</h3>
            <h4>Personal Description: {specialist.description}</h4>
            <h3>Specialty: {specialist.specialty}</h3>
            <h4>State: {specialist.state}</h4>
            <h4>Zip: {specialist.zip_code}</h4>
      <div style={{ textAlign: "center" }}>
        <h2>Update Your Specialist</h2>
        <Form method="post" action={`/update/SSS/${specialist.id}`}>
            <input type="text" name='first_name' placeholder='First Name' defaultValue={specialist.first_name}/>
            <input type="text" name='last_name' placeholder='Last Name'  defaultValue={specialist.last_name}/>
            <input type="text" name='sss_photo' placeholder='Your Photo'  defaultValue={specialist.sss_photo}/>
            <input type="text" name='years_experience' placeholder='How Many Years of Experience?'  defaultValue={specialist.years_experience}/>
            <input type="text" name='description' placeholder='Provide a 300 character or less description of your services.'  defaultValue={specialist.description}/>
            <input type="text" name='specialty' placeholder='Your Specialty'  defaultValue={specialist.specialty}/>
            <input type="text" name='state' placeholder='State (two letters)'  defaultValue={specialist.state}/>
            <input type="text" name='zip_code' placeholder='Zip Code' defaultValue={specialist.zip_code} />
          
          <button>Update My Profile Beeze</button>
          </Form>
          <Form method="post" action={`/delete/SSS/${specialist.id}`}>
            <button>I am done with this GiG, please delete my profile!</button>
        </Form>
        
      </div>
      <Link to="/">Back to the Marketplace</Link>
    </div>
    </>
  );
}

export default SssShow;