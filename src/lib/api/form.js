import { deleteJSON, getJSON, postJSON, putJSON, BASE_URL } from "."
import {toast} from 'react-toastify';

const URL = `${BASE_URL}/posts`

const ZeldaAPI = {
create(form, token) {
const data = postJSON(URL, { body: form, token })
toast.success("Successful created post")
return data
},
readAll() {
return getJSON(`${URL}?_sort=id&_order=desc`)
},
read(id) {
return getJSON(`${URL}/${id}`)
},
update(form, token) {
const data = putJSON(`${URL}/${form.id}`, { body: form, token })
toast.success("Successful updated post")
return data
},
delete(form ,token) {
let data = null
try {
data = deleteJSON(`${URL}/${form.id}`, { token })
} catch (error) {
toast.error("The post couldn't be deleted")
}

toast.success("Successful deleted post")
return data
    }
}

export default ZeldaAPI