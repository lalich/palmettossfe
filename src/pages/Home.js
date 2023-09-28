import React, { useState } from 'react'
import SSS from '../components/SSS'
import School from '../components/Schools'
import SimpleMap from '../components/Map'
import { useLoaderData, Form, Link } from 'react-router-dom'
import { ssssAndSchoolsLoader } from '../loaders'
import Header from '../components/Header'

const Home = () => {
    const { ssss, schools } = useLoaderData(ssssAndSchoolsLoader())
    // zip code 
    const [zipCode, setZipCode] = useState('')
    //zip function
    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value)
    }

    return<>
    <div style={{textAlign: "center"}}>
        <Header></Header>
        <div>

            <h3>Enter Zip Code: </h3>
                <input type='text' value={zipCode}
                onChange={handleZipCodeChange} placeholder='Enter Zip code' />
           
            <SimpleMap zipCode={zipCode} />

        </div>
    </div>

    <Link to="/School"><h2>Schools we Protect</h2></Link>
    <Link to="/SSS"><h2>Our Current Specialists</h2></Link>

    
    
    </>
}

export default Home