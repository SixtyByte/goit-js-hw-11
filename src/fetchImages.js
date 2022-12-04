import { Notify } from "notiflix" 
export default fetchCountries

function fetchCountries(name){const base_url=`https://restcountries.com/v2/name/`
    return fetch(`${base_url}${name}?fields=name,capital,population,flags,languages`).then(resp=>{if(!resp.ok){
    throw new Error(Notify.failure(`Oops, there is no country with that name`))
      }
      return resp.json()
}).catch(err=>console.error(err))

}
