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
        <h2>Skilled Security Specialists Signup</h2>
        <Form method='post' action="/create/SSS">
            <input type="text" name='first_name' placeholder='First Name'/>
            <input type="text" name='last_name' placeholder='Last Name' />
            <input type="text" name='sss_photo' placeholder='Your Photo' />
            <input type="text" name='years_experience' placeholder='How Many Years of Experience?' />
            <input type="text" name='description' placeholder='Provide a 300 character or less description of your services.' />
            <input type="text" name='specialty' placeholder='Your Specialty' />
            <input type="text" name='state' placeholder='State (two letters)' />
            <input type="text" name='zip_code' placeholder='Zip Code' />
            <button>Join PSS</button>
            <h5>All Fields Required to Join</h5>
            </Form>
            
    </div>
    <h3>Our Current Specialists</h3>
    {ssss.map((sss, index) => <SSS key={sss.id} specialist={sss}/>)}

    
    
    <Link to="/">Back to the Marketplace</Link>
    </>
}

export default SssI