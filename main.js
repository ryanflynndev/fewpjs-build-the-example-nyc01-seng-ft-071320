// Defining text characters for the empty and full hearts for you to use later.
const errorMessage = document.querySelector('div#modal');
errorMessage.classList.add('hidden');

document.addEventListener('DOMContentLoaded', function (e) {
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  
  // Your JavaScript code goes here!
  

 

  const errorText = document.querySelector('p#modal-message');
  
  document.addEventListener('click', function(e) {
    if(e.target.matches('span.like-glyph')){
      mimicServerCall()
      .then(response => {
        if (e.target.innerText === EMPTY_HEART) {
          e.target.innerText = FULL_HEART;
          e.target.classList.add('activated-heart');
        }
        else if (e.target.innerText === FULL_HEART) {
          e.target.innerText = EMPTY_HEART;
          e.target.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        errorMessage.classList.remove('hidden');
        errorText.innerText = error;
        setTimeout(function() {
          errorMessage.classList.add('hidden');
        }, 5000)
      })
    }
  })

  
  //------------------------------------------------------------------------------
  // Ignore after this point. Used only for demo purposes
  //------------------------------------------------------------------------------
  
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

})
