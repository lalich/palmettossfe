import { urlSchool, urlSSS } from "./url";
import { redirect } from 'react-router-dom'

// create schol
export const createSchoolAction = async({request}) => {
    const formData = await request.formData()
    const newSchool = {
        name: formData.get("name"),
        school_photo: formData.get("school_photo"),
        state: formData.get("state"),
        zip_code: formData.get("zip_code"),
        security_description: formData.get("security_description")
    }
    await fetch(urlSchool, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSchool)
    })
    return redirect('/')
}
// Create SSS
export const createSSSAction = async({request}) => {
    const formData = await request.formData()
    const newSSS = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        sss_photo: formData.get("sss_photo"),
        years_experience: formData.get("years_experience"),
        description: formData.get("description"),
        specialty: formData.get("specialty"),
        state: formData.get("state"),
        zip_code: formData.get("zip_code")
    }
    await fetch(urlSSS, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSSS)
    })
    return redirect('/')
}

// update school
export const updateSchoolAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updatedSchool = {
        name: formData.get("name"),
        school_photo: formData.get("school_photo"),
        state: formData.get("state"),
        zip_code: formData.get("zip_code"),
        security_description: formData.get("security_description")
    }
    await fetch(urlSchool + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSchool)
    })
    return redirect(`/post/${id}`)
}

// update SSS
export const updateSSSAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updatedSSS = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        sss_photo: formData.get("sss_photo"),
        years_experience: formData.get("years_experience"),
        description: formData.get("description"),
        specialty: formData.get("specialty"),
        state: formData.get("state"),
        zip_code: formData.get("zip_code")
    }
    await fetch(urlSSS + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSSS)
    })
    return redirect(`/post/${id}`)
}

// delete school

export const deleteSchoolAction = async({params}) => {
    const id = params.id
    await fetch(urlSchool + id + '/', {
        method: "delete"
    })
    return redirect("/")
}

// delete SSS


export const deleteSSSAction = async({params}) => {
    const id = params.id
    await fetch(urlSSS + id + '/', {
        method: "delete"
    })
    return redirect("/")
}