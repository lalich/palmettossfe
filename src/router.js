import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App";
import Home from "./pages/Home";
import SssShow from "./pages/sssShow";
import SssI from "./pages/SssI";
import SSS from "./components/SSS"
import SchoolShow from "./pages/schoolShow"
import Schooli from "./pages/Schooli"
import School from "./components/Schools"
import {schoolIndexLoader, schoolShowLoader, sssIndexLoader, sssShowLoader, ssssAndSchoolsLoader} from "./loaders";
import {createSchoolAction, createSSSAction, updateSchoolAction, updateSSSAction, deleteSchoolAction, deleteSSSAction} from "./actions";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>} loader={ssssAndSchoolsLoader}/>
            <Route path="SSS" element={<SssI/>} loader={sssIndexLoader} />
            <Route path="School" element={<Schooli/>} loader={schoolIndexLoader} />
            <Route path="SSS/:id" element={<SssShow/>} loader={sssShowLoader}/>
            <Route path="School/:id" element={<SchoolShow/>} loader={schoolShowLoader}/>
            <Route path="create/SSS/" element={<SSS/>} action={createSSSAction}/>
            <Route path="create/School/" element={<School/>} action={createSchoolAction}/>
            <Route path="update/SSS/:id" action={updateSSSAction}/>
            <Route path="update/School/:id" action={updateSchoolAction}/>
            <Route path="delete/SSS/:id" action={deleteSSSAction}/>
            <Route path="delete/School/:id" action={deleteSchoolAction}/>
        </Route>
    </>
));

export default router;