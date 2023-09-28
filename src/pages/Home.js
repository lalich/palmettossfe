import SSS from '../components/SSS'
import Schools from '../components/Schools'
import { useLoaderData, Form } from 'react-router-dom'
import { ssssAndSchoolsLoader } from '../loaders'
import Header from '../components/Header'

const Home = () => {

    const { ssss, schools } = useLoaderData(ssssAndSchoolsLoader())
        console.log(ssss)
        console.log(schools)
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
    {ssss.map((sss) => <SSS key={sss.id} specialist={sss}/>)}
    <h3>Schools we Protect</h3>
    {schools.map((school) => <Schools key={school.id} school={school}/>)}
    <h3>Become a Protected School</h3>
    <Form method='post' action="/create/School">
            <input type="text" name='name' placeholder='School Name'/>
            <input type="text" name='school_photo' placeholder='School Photo' />
            <input type="text" name='state' placeholder='State (two letters)' />
            <input type="text" name='zip_code' placeholder='Zip Code' />
            <input type="text" name='description' placeholder='Provide a 300 character or less description of your services.' />
           
     
            <button>Join PSS</button>
            <h5>All Fields Required to Join</h5>
            </Form>
    </>
}

export default Home