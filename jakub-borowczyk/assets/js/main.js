window.addEventListener("load",()=>{if("complete"===document.readyState){const e=document.getElementById("email"),t=document.getElementById("wrapper"),i=document.getElementById("video"),a=document.getElementById("header"),s=document.getElementById("main"),l=document.getElementById("footer"),d=document.getElementById("inner"),o=document.getElementById("close"),c=document.querySelectorAll("button[data-article]"),n=document.getElementsByTagName("article"),m=document.getElementsByClassName("lightgallery"),r=()=>{s.classList.add("opacity-0"),window.setTimeout(()=>{s.classList.add("h-0","invisible"),a.classList.remove("opacity-0","h-0","invisible"),l.classList.remove("opacity-0","h-0","invisible"),i.classList.remove("scale-110","blur-lg")},500)},y="aNmIFCrEdTWRIYuFaU3CJK6OeFXFNN6IdCGE9TmRLYmFJUvCcKmO9F3FYN3IpC5EaT0RBYnFbUWCFKpObFCF5NjIbC2E0T=";e.innerText=atob(y.split("").filter((e,t)=>t%2==0).join("")),window.setTimeout(()=>{a.classList.remove("opacity-0"),l.classList.remove("opacity-0")},200),window.setTimeout(()=>{d.classList.remove("collapsed")},400),window.setTimeout(()=>{t.classList.add("bg-opacity-50")},1e3),s.addEventListener("click",e=>{e.stopPropagation()}),Array.from(c).forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation(),Array.from(n).forEach(e=>{e.classList.add("hidden")}),document.getElementById(e.target.dataset.article).classList.remove("hidden"),i.classList.add("scale-110","blur-lg"),a.classList.add("opacity-0"),l.classList.add("opacity-0"),window.setTimeout(()=>{a.classList.add("h-0","invisible"),l.classList.add("h-0","invisible"),s.classList.remove("opacity-0","h-0","invisible")},500),t.addEventListener("click",r,{once:!0}),o.addEventListener("click",r,{once:!0})})}),Array.from(m).forEach(e=>{lightGallery(e,{plugins:[lgZoom,lgThumbnail,lgHash],galleryId:e.dataset.galleryId,licenseKey:"0000-0000-000-0001"})})}});