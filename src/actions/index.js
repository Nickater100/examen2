import axios from "axios";

function recargar () {
    window.location.href = window.location.href;
}
    export function allProduct(){
        return function(dispatch){
            return axios.get("http://127.0.0.1:8000/productos?format=json")
            .then(res => {
               dispatch({type:"GET_ALL_PRODUCTOS", payload: res.data})
            })
        }
    }

    export function getProduct(id){
        return function(dispatch){
            return axios.get(`http://127.0.0.1:8000/productos/${id}/`)
            .then(res => {
                dispatch({type:"GET_PRODUCTO", payload: res.data})
            })
        }
    }

    export function putProduct(id, payload){
        return function(dispatch){
            return axios.put(`http://127.0.0.1:8000/productos/${id}/`, payload)
            .then(res => {
                recargar()
            })
        }
    }

    export function delProduct(id){
        return function(dispatch){
            const respuesta = axios.delete(`http://127.0.0.1:8000/productos/${id}/`)
            recargar()
        }
    }

    export function addProduct(payload){
        return function(dispatch){
            const respuesta =  axios.post(`http://127.0.0.1:8000/productos`, payload)
            recargar()
        }
    }

    export function getMongo(){
        return function(dispatch){
            return axios.get(`http://127.0.0.1:8000/mongo`)
            .then(res => {
                dispatch({type:"GET_MONGO", payload: res.data})
            })
        }
    }


