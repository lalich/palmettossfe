import React, { useState } from 'react'
import SSS from '../components/SSS'
import School from '../components/Schools'
import SimpleMap from '../components/Map'
import { useLoaderData, Form, Link } from 'react-router-dom'
import { ssssAndSchoolsLoader } from '../loaders'
import Header from '../components/Header'
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker'

const Home = () => {
    const { ssss, schools } = useLoaderData(ssssAndSchoolsLoader())
    console.log(ssss, schools)
    // zip code 
    const [zipCode, setZipCode] = useState('')
    //zip function
    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value)
    }

    return<>
    <div style={{textAlign: "center"}}>
        <Header></Header>
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "black",
                    textDecoration: "underline"}}>
        <Link to="/School"><h2>PSS Protected Schools</h2></Link>
        <Link to="/SSS"><h2>Our Current Specialists</h2></Link>
        </div>
        
<div>
            <h3>Enter Zip Code: </h3>
                <input type='text' value={zipCode} onChange={handleZipCodeChange} placeholder="Browse your zip code!" />
                <SimpleMap zipCode={zipCode} schools={schools.zip_code} ssss={ssss.zip_code} />

        </div>
    </div>
    
  

    
    
    </>
}

export default Home