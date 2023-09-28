import {Link} from 'react-router-dom';
import { schoolIndexLoader } from '../loaders';

// describe the post prop
const School = ({schooly}) => {
    if (!schooly || !schooly.id) {
        return <div>Error: Invalid school data</div>;
    }
    
    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/school/${schooly.id}`}>
            <h1>{schooly.name}</h1>
            <img src={schooly.school_photo} alt="School Image" />
            <h4>State: {schooly.state}</h4>
            <h4>Zip: {schooly.zip_code}</h4>
            <h5>Security Description: {schooly.security_description}</h5>
            
      
        </Link>
    </div>
}

export default School;