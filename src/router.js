import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App";
import Home from "./pages/Home";
import SssShow from "./pages/SssShow";
import SssI from "./pages/SssI"
import {schoolIndexLoader, schoolShowLoader, sssIndexLoader, sssShowLoader, ssssAndSchoolsLoader} from "./loaders";
import {createSchoolAction, createSSSAction, updateSchoolAction, updateSSSAction, deleteSchoolAction, deleteSSSAction} from "./actions";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>} loader={ssssAndSchoolsLoader}/>
            <Route path="sss" element={<SssI/>} loader={sssIndexLoader} />
            <Route path="sss/:id" element={<SssShow/>} loader={sssShowLoader}/>
            <Route path="create/SSS" action={createSSSAction}/>
            <Route path="create/School" action={createSchoolAction}/>
            <Route path="update/:id" action={updateSSSAction}/>
            <Route path="update/:id" action={updateSchoolAction}/>
            <Route path="delete/:id" action={deleteSSSAction}/>
            <Route path="delete/:id" action={deleteSchoolAction}/>
        </Route>
    </>
));

export default router;