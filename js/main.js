let elsButton = document.querySelectorAll('.btn');
let elDownloadContant = document.querySelector('.download__contant');

elsButton.forEach(function(btn){
  btn.addEventListener('click', function(){
    btn.closest('.first-wrapper').classList.toggle('wrapper__active');
  })
}
)