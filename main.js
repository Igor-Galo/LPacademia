const body = document.querySelector("body"),
    nav = document.querySelector("nav"), 
    sidebarOpen = document.querySelector(".siderbarOpen"),
    sidebarClose = document.querySelector(".siderbarClose");

    //js toggle sidebar 
    sidebarOpen.addEventListener("click", () =>{
        nav.classList.add("active");
    })

    body.addEventListener("click" , e =>{
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("siderbarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active")
        }
    })