const breed = document.querySelector('#breed');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const keys = Object.keys(data.message);
        keys.forEach(breeds => {
            const subBreed = data.message[breeds];
            if (!subBreed.length) {
                breed.insertAdjacentHTML(
                    "beforeend",
                    `<option value="${breeds}">${breeds}</option>`
                ); 
            };
            subBreed.forEach(subBreeds => {
                breed.insertAdjacentHTML(
                    "beforeend",
                    `<option value="${breeds}/${subBreeds}">${breeds} ${subBreeds}</option>`
                ); 
            });       
        });
    });     

/***async version***/
// async function getData() {
//     const response = await fetch('https://dog.ceo/api/breeds/list/all');
//     const data = await response.json();
//         const keys = Object.keys(data.message);
//         keys.forEach(function(key) {
//             breed.insertAdjacentHTML(
//                 "beforeend",
//                 `<option value="${key}">${key}</option>`
//             );              
//         });
// } 
// getData();

async function getDog() {     
    const response = await fetch(`https://dog.ceo/api/breed/${breed.value}/images`);
    const data = await response.json();
    if (breed.value) {
        const randomPic = data.message[Math.floor(Math.random() * data.message.length)];
        document.getElementById('img-wrap').innerHTML = `<img src='${randomPic}' class="photo" alt="dog">`;
    };
};

document.getElementById('button').onclick = getDog;  