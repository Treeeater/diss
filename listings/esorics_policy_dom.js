<div id="a" RACL="1,2" WACL="1">
  Username: Alice
</div>
<script worldID = "1">
  var b=document.getElementById('a'); // OK
  b.innerHTML = 'changed'; // OK
</script>
<script worldID = "2">
  var b=document.getElementById('a'); // OK
  b.innerHTML = 'changed'; // error: 2 not in WACL
</script>
<script worldID = "3">
  var b=document.getElementById('a'); 
	// error: a not readable
</script>