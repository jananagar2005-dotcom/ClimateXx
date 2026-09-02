let light =document.querySelector("#theme-btn")
let dark =document.querySelector("#theme-btn2")

let savedTheme = localStorage.getItem("theme") 
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}


if(light && dark){
        if (savedTheme === "dark"){
               dark.classList.add("active");
        light.classList.remove("active");
    } else {
        light.classList.add("active");
        dark.classList.remove("active");
    }
}

    light.addEventListener("click", function () {

        document.body.classList.remove("dark-mode");

        localStorage.setItem("theme", "light");

        light.classList.add("active");
        dark.classList.remove("active");
    });


        dark.addEventListener("click", function () {

        document.body.classList.add("dark-mode");

        localStorage.setItem("theme", "dark");

        dark.classList.add("active");
        light.classList.remove("active");
    });
