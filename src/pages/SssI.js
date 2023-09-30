import SSS from '../components/SSS'
import { useLoaderData, Form, Link } from 'react-router-dom'
import { sssIndexLoader } from '../loaders'
import Header from '../components/Header'

const SssI = () => {
    const ssss = useLoaderData(sssIndexLoader())
    console.log(ssss)
       
    
    return<>
    <div style={{textAlign: "center"}}>
        <Header></Header>
        <Link to="/">Back to the Marketplace</Link>
        <h2 style={{ textDecoration: "underline", fontSize: "x-large"}}>Join PSS and become a Skilled Security Specialists</h2>
        <Form method='post' action="/create/SSS">
            <input type="text" name='first_name' placeholder='First Name'/>
            <input type="text" name='last_name' placeholder='Last Name' />
            <input type="text" name='sss_photo' placeholder='Your Photo' />
            <input type="text" name='years_experience' placeholder='How Many Years of Experience?' />
            <input type="text" name='description' placeholder='Provide up to a 300 character or less description of your services.' />
            <input type="text" name='specialty' placeholder='Your Specialty' />
            <input type="text" name='state' placeholder='State (two letters)' />
            <input type="text" name='zip_code' placeholder='Zip Code' />
            <button type="submit">Start the SSS Evolution</button>
            <h4>(All Fields Required to Join)</h4>
            <h5>(Military/Civil Service Preferred)</h5>
            </Form>
            
    </div>
    <h2>Current SSS</h2>
    {ssss.map((sss, index) => <SSS key={sss.id} specialist={sss}/>)}

    
    
   
    </>
}

export default SssI