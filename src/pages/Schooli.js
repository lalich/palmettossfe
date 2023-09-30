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
        <Link to="/">Back to the Marketplace</Link>
    <h3 style={{ textDecoration: "underline", fontSize: "xx-large"}}>Become a Protected School</h3>
    <Form method='post' action="/create/School/">
            <input type="text" name='name' placeholder='School Name'/>
            <input type="text" name='school_photo' placeholder='School Photo' />
            <input type="text" name='state' placeholder='State (two letters)' />
            <input type="text" name='zip_code' placeholder='Zip Code' />
            <input type="text" name='security_description' placeholder='Provide up to a 300 character or less description of your services.' />
           
     
            <button type="submit">Get Protected</button>
            <h5>(All Fields Required to Join)</h5>
            </Form>
    </div>
    <h2>Currently Protected Schools</h2>
    {schools.map((school, index) => <School key={school.id} schooly={school}/>)}
   
   
    </>
}

export default Schooli