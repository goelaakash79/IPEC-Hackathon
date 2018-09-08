<script>
  var i = 0;
  var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptas doloremque.';
  var speed = 50;

  window.onload = function typeWriter() {
    if (i < txt.length) {
      document.getElementById("aakash").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
</script>
