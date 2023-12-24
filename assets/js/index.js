const searchBar= document.getElementsByClassName('toggle-search');
const searchToggler = document.getElementById('search-toggler');

const bar = document.getElementById('search-toggler');

console.log(searchBar[0].classList);
console.log(searchToggler);
searchToggler.addEventListener('click', ()=>{
    if(searchBar[0].classList.contains('hide')){
        searchBar[0].classList.remove('hide');
        searchBar[0].classList.add('show');
        searchBar[0].classList.add('form-control');
        
    }else{
        searchBar[0].classList.remove('show');
        searchBar[0].classList.remove('form-control');
        searchBar[0].classList.add('hide');
    }
    console.log(searchBar[0].classList)
})


