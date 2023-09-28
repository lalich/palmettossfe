import { urlSchool, urlSSS } from './url'

export const ssssAndSchoolsLoader = async () => {
    const ssssResponse = await fetch(`${urlSSS}`)
        const ssss = await ssssResponse.json()

    const schoolsResponse = await fetch(`${urlSchool}`)
        const schools = await schoolsResponse.json()
    console.log('ssss', ssss)
    console.log('schoools', schools)
    return { ssss, schools}
}

export const schoolIndexLoader = async () => {
    const response = await fetch(urlSchool)
    const schools = await response.json()
    return schools
}

export const schoolShowLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(urlSchool + id)
    const school = await response.json()
    return school
}

export const sssIndexLoader = async () => {
    const response = await fetch(urlSSS)
    const ssss = await response.json()
    return ssss
}

export const sssShowLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(urlSSS + id)
    const sss = await response.json()
    return sss
}