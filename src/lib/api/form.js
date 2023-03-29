import { deleteJSON, getJSON, postJSON, putJSON, BASE_URL } from "."
import {toast} from 'react-toastify';

const URL = `${BASE_URL}/posts`

const ZeldaAPI = {
create(post, token) {
const data = postJSON(URL, { body: post, token })
toast.success("Successful created post")
return data
},
readAll() {
return getJSON(`${URL}?_sort=id&_order=desc`)
},
read(id) {
return getJSON(`${URL}/${id}`)
},
update(post, token) {
const data = putJSON(`${URL}/${post.id}`, { body: post, token })
toast.success("Successful updated post")
return data
},
delete(post, token) {
const data = null
try {
data = deleteJSON(`${URL}/${post.id}`, { token })
} catch (error) {
toast.error("The post couldn't be deleted")
}

toast.success("Successful deleted post")
return data
    }
}

export default ZeldaAPI