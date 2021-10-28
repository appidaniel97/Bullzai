var hamburguer = document.querySelector(".Menuhamburger");

hamburguer.addEventListener("click", function()
{
    document.querySelector(".container").classList.toggle("show-menu");
});



// window.onscroll=function(){
//     fixarMenuNoTopo();
// }
// const menu=document.getElementsByTagName("menu")[0];
// const topoNav=menu.offsetTop;

// function fixarMenuNoTopo(){
// 	if(window.pageYOffset >= topoNav){
// 	nav.classList.add("FixoNoTopo");
// 	}else{
// 	        nav.classList.remove("FixoNoTopo");
//     }

// }           