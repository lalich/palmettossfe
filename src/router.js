import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/sssShow";
import {schoolIndexLoader, schoolShowLoader, sssIndexLoader, sssShowLoader, ssssAndSchoolsLoader} from "./loaders";
import {createSchoolAction, createSSSAction, updateSchoolAction, updateSSSAction, deleteSchoolAction, deleteSSSAction} from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={ssssAndSchoolsLoader}/>
            <Route path="post/:id" element={<Show/>} loader={sssShowLoader}/>
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