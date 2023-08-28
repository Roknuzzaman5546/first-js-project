const loadphone = async (searcvalue, isshowall) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searcvalue}`)
    const data = await res.json();
    const phones = data.data;
    phonecard(phones, isshowall)
}

const phonecard = (phones, isshowall) =>{
    const parenttag = document.getElementById('push-div');
    parenttag.textContent = " ";

    const btn = document.getElementById('show-btn')
    if(phones.length > 12 && !isshowall){
        btn.classList.remove('hidden')
    }
    else{
        btn.classList.add('hidden')
    }
    console.log('isshowall', isshowall)
    if(!isshowall){
        phones = phones.slice(0,12);
    }
    phones.forEach(element => {
        console.log(element);
        const childdiv = document.createElement('div');
        childdiv.classList = `card bg-gray-100 shadow-xl`;
        childdiv.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${element.image}" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${element.phone_name}</h2>
        <p>${element.brand}</p>
        <div class="card-actions">
          <button onclick="detailsclick('${element.slug}')" class="btn btn-primary">Buy Now</button>
        </div>
      </div>    
        `
        parenttag.appendChild(childdiv);
    });
    loadingfun(false);
}

const searchclick = (isshowall) =>{
    loadingfun(true)
    const inputsearch = document.getElementById('search-input');
    const searcvalue = inputsearch.value;
    loadphone(searcvalue, isshowall)
}
// const searchclick2 = () =>{
//     loadingfun(true) 
//     const inputsearch = document.getElementById('search-input2');
//     const searcvalue = inputsearch.value;
//     loadphone(searcvalue)
// }

const loadingfun = (isloading) =>{
    const load = document.getElementById('loading-btn');
    if(isloading){
        load.classList.remove('hidden');
    }
    else{
        load.classList.add('hidden')
    }
}
const detailsclick = async (id) => {
    // console.log('abir', id)
    const res = await fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089');
    const data = await res.json();
    console.log(data.data)
}

const showallclick = () =>{
    searchclick(true);
}

