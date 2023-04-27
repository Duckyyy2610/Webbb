var btnElement = document.querySelectorAll('.buy-ticket');
var modelForm = document.querySelector('.model');
var modelContainer = document.querySelector('.model-container');
var modelFormClose = document.querySelector('.model-close');
btnElement.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
        // e.preventDefault();
        modelForm.style.display = 'flex';
    });
})

function close(e) {
    // e.preventPropagation();
    modelForm.style.display = 'none';
}
modelFormClose.onclick = close;
modelForm.onclick = close;
modelContainer.onclick = function(e) {
    e.stopPropagation();
    // modelForm.style.display = 'none';
}




// console.log("hello world");
// console.log(modelForm);