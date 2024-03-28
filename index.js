// remove the DOM node 'main#main'
document.querySelector('main#main').remove();

// create a newHeader variable that points to an <h1> node
let newHeader = document.createElement('h1');

// assign an id of 'victory' to the newHeader variable
newHeader.id = 'victory';

// assign the text "YOUR-NAME is the champion" to the newHeader variable
newHeader.innerHTML = "Sharon is the champion";
