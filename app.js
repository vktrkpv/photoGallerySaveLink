// Selectors 
const urlInput = document.querySelector("#url");
const textInput = document.querySelector("#describe");
const btn = document.querySelector("#form_submit");
const gallery = document.querySelector("#gallery-container");

// Events 
document.addEventListener("DOMContentLoaded", getPhotos);
btn.addEventListener("submit", addPhoto);
gallery.addEventListener('click',detelePhoto);

// Functions 

function addPhoto(e) {
    e.preventDefault();

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv");
    itemsDiv.innerHTML = `<img src="${urlInput.value}" alt="${textInput.value}" width="150px">`;

    const textDiv = document.createElement("div");
    textDiv.classList.add('textDiv');
    textDiv.innerText = textInput.value;

    saveLocalPhotos(urlInput.value, textInput.value);

    urlInput.value = "";
    textInput.value = "";

    itemsDiv.appendChild(textDiv);

    const deteleBtn = document.createElement('button');
    deteleBtn.innerHTML = `<i class="fa-solid fa-xmark" style="color: #e32400;"></i>`;
    deteleBtn.classList.add("trash-btn");

    itemsDiv.appendChild(deteleBtn);
    gallery.appendChild(itemsDiv);
}


function detelePhoto(e) {
    const item = e.target.parentNode;
 
    removeLocalPhotos();
    item.remove();

}

function saveLocalPhotos(url, description) {

    let photos;
    if(localStorage.getItem("gallery-container") === null ){
        photos =[];
    } else {
        photos = JSON.parse(localStorage.getItem("gallery-container"))
    }

    photos.push({ url, description });
    localStorage.setItem('gallery-container', JSON.stringify(photos));
}

function removeLocalPhotos(photoUrl){

    let photos;
    if(localStorage.getItem("gallery-container") === null ){
        photos =[];
    } else {
        photos = JSON.parse(localStorage.getItem("gallery-container"))
    }

    photos = photos.filter(photo => photo.url !== photoUrl);
    localStorage.setItem("gallery-container", JSON.stringify(photos));

}


function getPhotos() {
    let photos;

    if(localStorage.getItem("gallery-container") === null ){
        photos =[]; 
    } else {
        photos = JSON.parse(localStorage.getItem("gallery-container"))
    }

    photos.forEach(function(photo){

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv");
    itemsDiv.innerHTML = `<img src="${photo.url}" alt="${photo.description}" width="150px">`;

    const textDiv = document.createElement("div");
    textDiv.classList.add('textDiv');
    textDiv.innerText = photo.description;

    itemsDiv.appendChild(textDiv);

    const deteleBtn = document.createElement('button');
    deteleBtn.innerHTML = `<i class="fa-solid fa-xmark" style="color: #e32400;"></i>`;
    deteleBtn.classList.add("trash-btn");

    itemsDiv.appendChild(deteleBtn);
    gallery.appendChild(itemsDiv);
  
    })

}



    
// localStorage.clear();