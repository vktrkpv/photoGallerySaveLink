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

    // start creating where to save pics 

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv");
    itemsDiv.innerHTML = `<img src="${urlInput.value}" alt="${textInput.value}" width="150px">`;

    const textDiv = document.createElement("div");
    textDiv.classList.add('textDiv');
    textDiv.innerText = textInput.value;

    saveLocalPhotos(urlInput.value);

    // clear the value

    urlInput.value = "";
    textInput.value = "";

    itemsDiv.appendChild(textDiv);


    // create delete button 

    const deteleBtn = document.createElement('button');
    deteleBtn.innerHTML = `<i class="fa-solid fa-xmark" style="color: #e32400;"></i>`;
    deteleBtn.classList.add("trash-btn");


    // append child to gallery 

    itemsDiv.appendChild(deteleBtn);
    gallery.appendChild(itemsDiv);
}


function detelePhoto(e) {
    const item = e.target.parentNode;
    removeLocalPhotos();
    item.remove();

}

function saveLocalPhotos(photo) {

    let photos;
    if(localStorage.getItem("gallery-container") === null ){
        photos =[];
    } else {
        photos = JSON.parse(localStorage.getItem("gallery-container"))
    }

    photos.push(photo);
    localStorage.setItem('gallery-container', JSON.stringify(photos));
}

function removeLocalPhotos(photo){

    let photos;
    if(localStorage.getItem("gallery-container") === null ){
        photos =[];
    } else {
        photos = JSON.parse(localStorage.getItem("gallery-container"))
    }

    // remove the position of the elemen 

    console.log(photo.children[0]);

}


function getPhotos() {
    let photos;

    if(localStorage.getItem("gallery-container") === null ){
        photos =[]; 
    } else {
        photos = JSON.parse(localStorage.getItem("gallery-container"))
    }

    photos.forEach(function(photo, text){

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv");
    itemsDiv.innerHTML = `<img src="${photo}" width="150px">`;

    const textDiv = document.createElement("div");
    textDiv.classList.add('textDiv');
    textDiv.innerText = itemsDiv;

    itemsDiv.appendChild(textDiv);

    const deteleBtn = document.createElement('button');
    deteleBtn.innerHTML = `<i class="fa-solid fa-xmark" style="color: #e32400;"></i>`;
    deteleBtn.classList.add("trash-btn");

    itemsDiv.appendChild(deteleBtn);
    gallery.appendChild(itemsDiv);
  
    })

}



    
// localStorage.clear();