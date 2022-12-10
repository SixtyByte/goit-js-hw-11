import axios from 'axios';
import './css/styles.css';
import {Notify} from 'notiflix'
let totalLoad;



const form=document.querySelector(`#search-form`)
const gallery=document.querySelector(`.gallery`)
const loadMore=document.querySelector(`.load-more`)
let pages=1;
loadMore.hidden=true
console.log(loadMore)
loadMore.addEventListener(`click`, onload);




form.addEventListener(`click`, onSerch )

function onSerch(event){
pages=1;
totalLoad=0;
event.preventDefault();
const formEl=event.currentTarget.elements;
let text=formEl.searchQuery.value
if (text=='') {return Notify.failure("Напиши щось")
  
}
if (text==""){clearMarkupAll()}
fetchImages(text,1).then(data=>{createGallery(data); if(data.data.hits.length<40&data.data.hits.length>1){ loadMore.disabled=true; Notify.failure(`We're sorry, but you've reached the end of search results.".`);}
else if(data.data.hits.length>=40){loadMore.hidden=false;} else if (data.data.hits.length==0) {Notify.failure(`Oops, there no image`);loadMore.hidden=true;
}}

);

}

function onload(){pages+=1;fetchImages(form.elements.searchQuery.value).then(data=>{createGallery(data);totalLoad+=Number(data.data.hits.length);console.log(totalLoad);if(data.data.hits.length<40){ loadMore.disabled=true; Notify.failure(`We're sorry, but you've reached the end of search results.".`);}})}

function clearMarkupAll(){ photoCard.innerHTML = ''}

function createGallery(arr){ 
console.log(arr)
const markup=arr.data.hits.map(item=>`<div class="photo-card">
<img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" class="image-item" />
<div class="info">
  <p class="info-item">
    <b>Likes ${item.likes}</b>
  </p>
  <p class="info-item">
    <b>Views ${item.views}</b>
  </p>
  <p class="info-item">
    <b>Comments ${item.comments}</b>
  </p>
  <p class="info-item">
    <b>Downloads ${item.downloads}</b>
  </p>
</div>
</div>`).join('');
gallery.innerHTML =markup 
}


function fetchImages(name,page){const base_url=`https://pixabay.com/api/?key=`
  const API_KEY=`31935683-a10b01c36d3de5d3933439cde`
  return axios.get(`${base_url}${API_KEY}&q=${name}&image_type=photo&orientation =horizontal&safesearch =true&per_page=40&page=${pages}`).then(resp=>{return resp;}).catch(err=>console.error(err))
  
  }


