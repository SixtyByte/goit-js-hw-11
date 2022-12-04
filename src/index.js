import debounce from 'lodash.debounce';
import './css/styles.css';
import {Notify} from 'notiflix';

import fetchCountries from './fetchImages.js';
const form=document.querySelector(`#search-box`)
const listOfCoutrys=document.querySelector(`.country-list`)
const countryInfo=document.querySelector(`.country-info`)
const DEBOUNCE_DELAY = 300;



form.addEventListener(`input`, debounce(onSerch,DEBOUNCE_DELAY) )

function onSerch(){
const serchInput=form.value.trim();
if (serchInput==""){clearMarkupAll()}
fetchCountries(serchInput).then(data=>
{if(data==undefined){console.log("Немає такої країни ")}
else if(data.length===1){createCountryInfo(data); listOfCoutrys.innerHTML=``}
else if(data.length>=2 && data.length<=10){createList(data);countryInfo.innerHTML = '';}
else if (data.length>10){Notify.failure(`Too many matches found. Please enter a more specific name.`)}
});


}


function clearMarkupAll(){ countryInfo.innerHTML = ''; listOfCoutrys.innerHTML=``}

function createCountryInfo(arr){ 
const markup=arr.map(item=>`<ul class="country-info-list" style="list-style-type: none">
<li><img src="${item.flags.svg}" alt="flag" height =50px,width=50px><h1> ${item.name}</h1>
<h2><b>Capital:</b>${item.capital}</h2>
<h2><b>Population:</b>${item.population}</h2>
<h2><b>Language:</b>${item.languages.map(({name})=>`<span>${name}</span>`).join(``)}</h2>
</li>
</ul>`).join('');
countryInfo.innerHTML =markup 
}
function createList (arr){const listMarkup=arr.map(item=>`<li class="country-result"><img src="${item.flags.svg}" alt="" height =10px,width=10px>${item.name}</li>`).join(``);
listOfCoutrys.innerHTML=listMarkup;}