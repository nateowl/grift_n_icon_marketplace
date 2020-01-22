const iconsAll = document.querySelectorAll(".icon");

// For each icon in the icon container it calls a funciton
iconsAll.forEach((icon) => {

   // Adds an eventListener to each icon - When clicked it toggles class and logs ID
   icon.addEventListener('click',() => {
      console.log(icon.id);
      icon.classList.toggle('selected');
   });

});
