/*function addingEventListener() {
  const input2 = document.querySelectorAll('div')[5];
  input2.addEventListener('click', function() {
    alert('I was clicked');
  });
};*/

function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
};