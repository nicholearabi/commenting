var comments;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


comments = [];


document.getElementById('enter').addEventListener('click', (event) => {
  comments.push(document.getElementById('comment').value);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = comments.slice(-1)[0];

  element_list.appendChild(new_li);

});