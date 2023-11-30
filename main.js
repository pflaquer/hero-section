const navBar = ()=>{
  return `
  
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-gradient">
     <div class="topnav">
<div>
     <ul class="navbar-nav sm-icons">
     
      <a class="nav-link" style="color:white;font-weight:400;" href="tel:"><i class="bi bi-geo-alt-fill"></i> 15028 Hwy 99, Lynnwood, WA</a></li>
     
     <ul class="navbar-nav sm-icons">
     <a class="nav-link" href="tel:2065555555"><i class="bi bi-envelope"></i> </a></li>
     <li><a class="nav-link" href="tel:2065555555"><i class="bi bi-phone"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-facebook"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-instagram"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-twitter"></i></a></li>
        
      </ul>
      
  
     
       <hr style="color:red;margin-top:-2px;height:10px;">
     </div>
     </div>
     <hr style="color:red;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="logo" src="https://raw.githubusercontent.com/pflaquer/dealer-site/main/logo_recon.png"></img></a>
      <button class="navbar-toggler bg-primary bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Used Autos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d">Contact Us</a>
          </li>
        </ul>
        
        
        
       
      </div>
    </div>
  </nav>
  
  
  `
}

document.getElementById("NavBar").innerHTML = navBar()
