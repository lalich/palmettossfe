import {Link} from 'react-router-dom';

// describe the post prop
const Schools = ({school}) => {

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/school/${school.id}`}>
            <h1>{school.name}</h1>
            <img src={school.school_photo} alt="School Image" />
            <h4>State: {school.state}</h4>
            <h4>Zip: {school.zip_code}</h4>
            <h5>Security Description: {school.security_description}</h5>
            
      
        </Link>
    </div>
}

export default Schools;