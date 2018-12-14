let L1_c1 = document.getElementById("Ligne1_Colone1");
let L1_c2 = document.getElementById("Ligne1_Colone2");
let L1_c3 = document.getElementById("Ligne1_Colone3");
let L1_c4 = document.getElementById("Ligne1_Colone4");

let L2_c1 = document.getElementById("Ligne2_Colone1");
let L2_c2 = document.getElementById("Ligne2_Colone2");
let L2_c3 = document.getElementById("Ligne2_Colone3");
let L2_c4 = document.getElementById("Ligne2_Colone4");
let L2_c5 = document.getElementById("Ligne2_Colone5");

let L3_c1 = document.getElementById("Ligne3_Colone1");

let L3_c2_haut = document.getElementById("Ligne3_Colone2_haut");
let L3_c3_haut = document.getElementById("Ligne3_Colone3_haut");
let L3_c4_haut = document.getElementById("Ligne3_Colone4_haut");

let L3_c2_bas = document.getElementById("Ligne3_Colone2_bas");
let L3_c3_bas = document.getElementById("Ligne3_Colone3_bas");
let L3_c4_bas = document.getElementById("Ligne3_Colone4_bas");


L1_c1.addEventListener("click",classItem, false);
L1_c2.addEventListener("click",classItem, false);
L1_c3.addEventListener("click",classItem, false);
L1_c4.addEventListener("click",classItem, false);

L2_c1.addEventListener("click",classItem, false);
L2_c2.addEventListener("click",classItem, false);
L2_c3.addEventListener("click",classItem, false);
L2_c4.addEventListener("click",classItem, false);
L2_c5.addEventListener("click",classItem, false);


L3_c1.addEventListener("click",classItem, false);


L3_c2_haut.addEventListener("click",classItem, false);
L3_c3_haut.addEventListener("click",classItem, false);
L3_c4_haut.addEventListener("click",classItem, false);


L3_c2_bas.addEventListener("click",classItem, false);
L3_c3_bas.addEventListener("click",classItem, false);
L3_c4_bas.addEventListener("click",classItem, false);


function classItem()
{
  if (this.classList.contains("Bg_white") == true)
  {
    this.classList.remove("Bg_white");
    this.classList.add("Bg_red");
  }


  //tansforme les cases rouge

   else if (this.classList.contains("Bg_red") == true)
   {

    this.classList.remove("Bg_red");
    this.classList.add("Bg_blue");

  }

  //trnanforme les cases blue


  else if (this.classList.contains("Bg_blue") == true)
  {

    this.classList.remove("Bg_blue");
    this.classList.add("Bg_yellow");

  }

  //trnanforme les cases jaune

  else if(this.classList.contains("Bg_yellow") == true)
  {

    this.classList.remove("Bg_yellow");
    this.classList.add("Bg_white");

  }
}
