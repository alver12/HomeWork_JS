console.log('hello');
var areas = document.querySelectorAll('.area');
var areaClickHandler = function(e) {
    var target = e.target;
    console.log('areaClickHandler');
    // if (target.className !== 'area') {
    //   return;
    // }
    if (!target.classList.contains('area')) {
      return;
    }
    var color = colorInput.value;

    var isCircle = isCircleCheck.checked;
    var el = document.createElement('div');
    el.classList.add('figure');
    console.log('sdfsdfsdfd', isCircle);
    if (isCircle) {
      el.classList.add('figure--circle');
      el.style.width = document.getElementById('w').value + 'px';
      el.style.height = document.getElementById('w').value + 'px';
      console.log('wwwwwwwwwwwwwww',el);
    }
    el.style.top = e.offsetY + 'px';
    el.style.left = e.offsetX + 'px';
    el.style.backgroundColor = color;
    target.appendChild(el);
    var isOval = isOvalCheck.checked;
    RadioCheck();
    var el = document.createElement('div');
    el.classList.add('figure');
    if (isOval) {
      el.classList.add('figure--oval');
      el.style.width = document.getElementById('w').value + 'px';
      el.style.height = document.getElementById('h').value + 'px';
    }
    el.style.top = e.offsetY + 'px';
    el.style.left = e.offsetX + 'px';
    el.style.backgroundColor = color;
    target.appendChild(el);

    var isSquare = isSquareCheck.checked;
    RadioCheck();
    var el = document.createElement('div');
    el.classList.add('figure');
    if (isSquare) {
      el.classList.add('figure--square');
      el.style.width = document.getElementById('w').value + 'px';
      el.style.height = document.getElementById('w').value + 'px';
    }
    el.style.top = e.offsetY + 'px';
    el.style.left = e.offsetX + 'px';
    el.style.backgroundColor = color;
    target.appendChild(el);

    var isRectangle = isRectangleCheck.checked;
    RadioCheck();
    var el = document.createElement('div');
    el.classList.add('figure');
    if (isRectangle) {
      el.classList.add('figure--rectangle');
      el.style.width = document.getElementById('w').value + 'px';
      el.style.height = document.getElementById('h').value + 'px';
    }
    el.style.top = e.offsetY + 'px';
    el.style.left = e.offsetX + 'px';
    el.style.backgroundColor = color;
    target.appendChild(el);
  }
  
  
  for (var i = 0; i < areas.length; i++) {
    areas[i].addEventListener('click', areaClickHandler);

  }

  function RadioCheck() {
    if (document.getElementById('isCircleCheck').checked) {
      document.getElementById('w').style.display = 'block';
      document.getElementById('h').style.display = 'none';
      console.log('onesize');
      console.log('w');
    } else  if (document.getElementById('isSquareCheck').checked){
      document.getElementById('w').style.display = 'block';
      document.getElementById('h').style.display = 'none';
      console.log('twosize');
      console.log('h');
    } else  if (document.getElementById('isOvalCheck').checked){
      document.getElementById('w').style.display = 'block';
      document.getElementById('h').style.display = 'block';
      console.log('twosize');
      console.log('h');
    } else  if (document.getElementById('isRectangleCheck').checked){
      document.getElementById('w').style.display = 'block';
      document.getElementById('h').style.display = 'block';
      console.log('twosize');
      console.log('h');
    } else {
      console.log('onesize', 'twosize');
    }
  }
  