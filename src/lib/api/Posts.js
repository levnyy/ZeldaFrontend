import { deleteJSON, getJSON, postJSON, putJSON, BASE_URL } from "./index"
import {toast} from 'react-toastify';

const URL = `${BASE_URL}/posts`

const ZeldaAPI = {
    create(post, token) {
        const data = postJSON(URL, { body: post, token })
        toast.success("Successful created post")
        return data
    },
    
    update(post, token) {
        const data = putJSON(`${URL}/${post.id}`, { body: post, token })
        toast.success("Successful updated post")
        return data
    },
    getLocations() {
        return getJSON(`${URL}/locations`)
    },
    getLocationsById(id) {
        return getJSON(`${URL}/locations/${id}`)
    },
    getCreatures() {
        return getJSON(`${URL}/creatures`)
    },
    getCreaturesById(id) {
        return getJSON(`${URL}/creatures/${id}`)
    },
    getBosses() {
        return getJSON(`${URL}/bosses`)
    },
    getBossesById(id) {
        return getJSON(`${URL}/bosses/${id}`)
    },
    getCharacters() {
        return getJSON(`${URL}/characters`)
    }
}

export default ZeldaAPI
