
  var canvas = document.getElementById("myCanvas");
  var c = canvas.getContext("2d"); 
  var img = document.getElementById('image');

var openFile = function(e)  {

    var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    
    img.src = url;
    
    img.onload = function() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(img, 0, 0,256,256);
    }};


    colour = 'white';
    mousedown = false;
    function draw() {
        if (mousedown) {
          // set the colour
          c.fillStyle = colour; 
          // start a path and paint a circle of 20 pixels at the mouse position
          c.beginPath();
          c.arc( mouseX, mouseY, 10 , 0, Math.PI*2, true );
          c.closePath();
          c.fill();
        }
      }
      
      // get the mouse position on the canvas (some browser trickery involved)
      canvas.addEventListener( 'mousemove', function( event ) {
        if( event.offsetX ){
          mouseX = event.offsetX;
          mouseY = event.offsetY;
        } else {
          mouseX = event.pageX - event.target.offsetLeft;
          mouseY = event.pageY - event.target.offsetTop;
        }
        // call the draw function
        draw();
      }, false );
      
      canvas.addEventListener( 'mousedown', function( event ) {
          mousedown = true;
      }, false );
      canvas.addEventListener( 'mouseup', function( event ) {
          mousedown = false;
      }, false );
      
      var link = document.createElement('a');
          link.innerHTML = 'Apply Model';
          link.className='download';
      link.addEventListener('click', function(ev) {
          link.href = canvas.toDataURL();
          link.download = "mypainting.png";
      }, false);
      document.body.appendChild(link);
      

      var clearbtn = document.createElement('a');
      clearbtn.innerHTML = 'clear mask';
      clearbtn.className='clearbtn';

  clearbtn.addEventListener('click', function(ev) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(img, 0, 0,256,256);
  }, false);
  document.body.appendChild(clearbtn);


