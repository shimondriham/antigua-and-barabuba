function burger_init(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_burger = document.querySelector("#nav_burger");

  burger_btn.addEventListener("click", function(){
    // אם נאב בורגר במצב דיספליי שונה מבלוק כלומר בלתי נראה
    // יהפוך לבלוק
    // אחרת הופך לנאן - בלתי נראה
    if(nav_burger.style.display != "block"){
      nav_burger.style.display = "block";
    }
    else{
      nav_burger.style.display = "none";
    }
  })
}


burger_init();