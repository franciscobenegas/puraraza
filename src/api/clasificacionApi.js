import {API_URL} from '../utils/constants';

// API Clasificaicones

export async function getCalsificacionApi(auth){
    try {
        const url = `${API_URL}/clasificacions?usuario=${auth.idUser}`;
        const params = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${auth.token}`
            },
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function postCalsificacionApi(auth,formData){
    try {
        const url = `${API_URL}/clasificacions`;
        const params = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${auth.token}`
            },
            body:JSON.stringify({usuario:auth.idUser, ...formData})
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteCalsificacionApi(auth, idClasificacion){
    try {
        const url = `${API_URL}/clasificacions/${idClasificacion}`;
        const params = {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${auth.token}`
            },
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCalsificacionIdApi(auth, idClasificacion){
    try {
        const url = `${API_URL}/clasificacions/${idClasificacion}`;
        const params = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${auth.token}`
            },
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function updateCalsificacionApi(auth, formData, codClasificacion){
    try {
        const url = `${API_URL}/clasificacions/${codClasificacion}`;
        const params = {
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${auth.token}`
            },
            body:JSON.stringify(formData)
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}