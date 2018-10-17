import axios from 'axios'

export function FetchList(){
    return{
        type:'FETCH_LIST',
        payload:axios({
            method:'GET',
            url:'http://35.237.4.180:5000/api/heroes/',
        })
    }
}

export function CreateList(value) {
    return {
        type: 'CREATE_LIST',
        payload: axios({
            method: 'POST',
            url: 'http://35.237.4.180:5000/api/heroes/',
            data: value,
        })
    }
}

export function DeleteList(id) {
    return {
        type: 'DELETE_LIST',
        payload: axios({
            method: 'DELETE',
            url: `http://35.237.4.180:5000/api/heroes/${id}`,
            
        })
    }
}