import School from '../components/Schools'
import { useLoaderData, Form, Link } from 'react-router-dom'
import { schoolIndexLoader } from '../loaders'
import Header from '../components/Header'

const Schooli = () => {
    const schools = useLoaderData(schoolIndexLoader())
    console.log(schools)
       
    
    return<>
    <div style={{textAlign: "center"}}>
        <Header></Header>
 
    <h3>Become a Protected School</h3>
    <Form method='post' action="/create/School/">
            <input type="text" name='name' placeholder='School Name'/>
            <input type="text" name='school_photo' placeholder='School Photo' />
            <input type="text" name='state' placeholder='State (two letters)' />
            <input type="text" name='zip_code' placeholder='Zip Code' />
            <input type="text" name='security_description' placeholder='Provide a 300 character or less description of your services.' />
           
     
            <button type="submit">Join PSS</button>
            <h5>All Fields Required to Join</h5>
            </Form>
    </div>
    <h3>Protected Schools</h3>
    {schools.map((school, index) => <School key={school.id} schooly={school}/>)}
   
    <Link to="/">Back to the Marketplace</Link>
    </>
}

export default Schooli