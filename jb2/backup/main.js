window.addEventListener("load",()=>{window.setTimeout(()=>{document.getElementsByClassName("outer")[0].classList.remove("*:opacity-0")},200),window.setTimeout(()=>{document.getElementsByClassName("inner")[0].classList.remove("inner-collapsed")},400),window.setTimeout(()=>{document.getElementsByClassName("overlay")[0].classList.add("bg-opacity-40")},1e3)});