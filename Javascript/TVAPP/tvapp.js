const form = document.querySelector('#searchform');

form.addEventListener('submit',async (e)=>{e.preventDefault();
    console.log('submitted!!!')

    // we are accessing the elements of the form such as input
    const searchValue = form.elements.query.value;

    
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
    console.log(res.data);
    makeImg(res.data);
})


const makeImg = function (data){
    
    for(let show of data){
        if(show.show.image.medium!=null){
        const img = document.createElement('Img');
        img.src = show.show.image.medium;
        img.style = "height:500px; width:520px";
        document.body.append(img);
        }
    }
}

