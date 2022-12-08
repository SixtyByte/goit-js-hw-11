import axios from 'axios';
import debounce from 'lodash.debounce';
import './css/styles.css';
import {Notify} from 'notiflix'
import fetchImages from './fetchImages.js';


const form=document.querySelector(`#search-form`)
const photoCard=document.querySelector(`.photo-card`)




form.addEventListener(`submit`, onSerch )

function onSerch(event){
event.preventDefault();
const formEl=event.currentTarget.elements;
let text=formEl.searchQuery.value

if (text==""){clearMarkupAll()}
fetchImages(text).then(data=>{console.log(data)}

);

}



function clearMarkupAll(){ countryInfo.innerHTML = ''; listOfCoutrys.innerHTML=``}

function createGallery(arr){ 
const markup=arr.map(item=>`<img src="${item.webformatURL}" alt="" loading="lazy" />
<div class="info">
  <p class="info-item">
    <b>Likes</b>
  </p>
  <p class="info-item">
    <b>Views</b>
  </p>
  <p class="info-item">
    <b>Comments</b>
  </p>
  <p class="info-item">
    <b>Downloads</b>
  </p>
</div>`).join('');
photoCard.innerHTML =markup 
}
