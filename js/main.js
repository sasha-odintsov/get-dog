// function getDog() {
        //     let breed = document.getElementById('breed').value
        //     let promise = fetch(`https://dog.ceo/api/breed/${breed}/images`);
        //     if (breed) {
        //         promise
        //             .then(response => response.json())
        //             .then(data => {
        //                 console.log(data)
        //                 let random = data.message[Math.floor(Math.random() * data.message.length)]
        //                 document.getElementById('img').innerHTML = `<img src='${random}' class="photo" alt="dog">`
        //             });
        //     }
        // }
        // document.getElementById('button').onclick = getDog;

    const breed = document.querySelector('#breed');

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const keys = Object.keys(data.message);
            keys.forEach(function(key) {
                breed.insertAdjacentHTML(
                    "beforeend",
                    `<option value="${key}">${key}</option>`
                );              
            });
        });     

    /***async version***/
    // async function getData() {
    //     const response = await fetch('https://dog.ceo/api/breeds/list/all');
    //     const data = await response.json();
    //     console.log(data);
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
            console.log(data);
            const randomPic = data.message[Math.floor(Math.random() * data.message.length)];
            document.getElementById('img-wrap').innerHTML = `<img src='${randomPic}' class="photo" alt="dog">`;
        };
    };

    document.getElementById('button').onclick = getDog;  