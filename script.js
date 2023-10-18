      /*Function for showing/hiding menu*/
      var navBar = document.getElementById("nav-id");

      function showNav() {
          if (navBar.style.display === "none" || navBar.style.display === "") { /*If navBar == none OR|| empty string then open nav, else close.*/
            navBar.style.display = "block";
          } 
          else {
            navBar.style.display = "none";
          }
        }
      /*Function for home-button*/
      function refreshPage() {
          location.reload();
        }