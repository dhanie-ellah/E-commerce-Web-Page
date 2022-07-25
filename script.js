let hamburger = document.getElementById('hamburger');
let links = document.getElementById('links');

let toggle = () => {
    if(links.className === 'links'){
        links.className = 'active';
    } else{
        links.className = 'links';
    }
}