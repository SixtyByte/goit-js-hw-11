
import { Notify } from "notiflix" 
import axios from "axios"
export default fetchImages

function fetchImages(name){const base_url=`https://pixabay.com/api/?key=`
const API_KEY=`31935683-a10b01c36d3de5d3933439cde`
    return fetch(`${base_url}${API_KEY}&q=${name}&image_type=photo&orientation =horizontal&safesearch =true`).then(resp=>{if(!resp.ok){
    throw new Error(Notify.failure(`No image`))
      }
      console.log(resp)
      return resp.json()
}).catch(err=>console.error(err))

}
