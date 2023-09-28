import {Link} from 'react-router-dom';

// describe the post prop
const SSS = ({specialist}) => {

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/sss/${specialist.id}`}>
            <h1>{specialist.first_name}</h1>
            <h2>{specialist.last_name}</h2>
            <img src={specialist.sss_photo} alt="Profile Image" />
            <h3>{specialist.years_experience} Years of Experience</h3>
            <h5>Personal Description: {specialist.description}</h5>
            <h3>Specialty: {specialist.specialty}</h3>
            <h4>State: {specialist.state}</h4>
            <h4>Zip: {specialist.zip_code}</h4>
     
        </Link>
    </div>
}

export default SSS;