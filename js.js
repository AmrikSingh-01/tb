function fun(keep,imid,slideid,scid)
{
    clicked=document.getElementById(keep);
    let clickimg=document.getElementById(imid);
    let path=clickimg.getAttribute("src");
    document.getElementById("sideim").src=path;
    let topim=document.getElementById("sideim");
    children=document.getElementById("prizecon").children;
    slide=document.getElementById(slideid);
    sc=document.getElementById(scid);
    if(!(clicked.classList.contains("yes")))
    {
        clicked.classList.add("yes");
        for(let i=1;i<children.length-10;i++)
        {
            let child=children[i];
            
            if(!(child.classList.contains("yes")))
            {
                child.style.opacity="0";
                child.style.transition="opacity 0.5s";
            }
        }
        clicked.style.opacity="0";
        clicked.style.transition="opacity 0.2s 0.6s";
        topim.style.opacity="1";
        topim.style.transform="rotate(360deg)";
        topim.style.transition="opacity 1s 0.8s, transform 1s 1.7s";
        slide.style.left="0px";
        slide.style.transition="left 1s 1.7s";
        sc.style.display="flex";
        setTimeout(exp, 3000, sc);
       
        setTimeout(pe,900);
    }
}
function exp(sc)
{
    sc.style.opacity="1";
    sc.style.transition="opacity 1s";
    hi=sc.offsetHeight;
    boxy=document.getElementById("prizecon");
    boxy.style.minHeight= hi + 100 + "px";
    boxy.style.transition="minHeight 1s ";
    for(let i=1;i<children.length-10;i++)
    {
        let child=children[i];
        
            child.style.display="none";
        
    }
}

function pe()
{
    for(let i=1;i<children.length-10;i++)
    {
        let child=children[i];
        child.style.pointerEvents="none";
    }
    document.getElementById("sideim").style.pointerEvents="auto";
    document.getElementById("sideim").style.cursor="pointer";

}
function fun2(im)
{
    im.style.opacity="0";
    im.style.transform="rotate(0deg)";
    im.style.transition="opacity 1s 2s, transform 1s 0.8s";
    clicked.classList.remove("yes");
    slide.style.left="-100%";
    slide.style.transition="left 1s 0.8s";
    setTimeout(pe2,2400,im);
    setTimeout(disp,3000, sc);
    sc.style.opacity="0";
    sc.style.transition="opacity 1s";
    
}
function disp(sc)
{
    for(let i=1;i<children.length-10;i++)
    {
        let child=children[i];
        
            child.style.display="initial";
        
    }
    sc.style.display="none";
    boxy.style.minHeight="80px";
    boxy.style.transition="minHeight ";

}
function pe2(im)
{
    for(let i=1;i<children.length-10;i++)
    {
        let child=children[i];
        child.style.pointerEvents="auto";
        child.style.opacity="1";
        child.style.transition="opacity 0.5s, transform 0.5s";
    }
    im.style.pointerEvents="none";
    im.style.cursor="default";
}

function showCoords(event) {
    var len=document.getElementById("capsule").offsetHeight;
    var y = event.clientY;
    if(y<60)
    document.getElementById("nav").style.top = "10px";
    else if(y > len - 116)
    document.getElementById("nav").style.bottom ="10px";
    else
    document.getElementById("nav").style.top = (y-50) + "px";
  
  }

function navbut(nb)
{
    if(!(nb.classList.contains("tog")))
    {
        nb.classList.add("tog");
    nb.style.backgroundImage="url('left-arrow.png')";
    nb.style.filter="invert(1)";
    document.getElementById("nav").style.left="-10px";
    document.getElementById("nav").style.top="55px";
    document.getElementById("nav").style.transition="left 0.3s linear";
    }
    else
    {
        nb.classList.remove("tog"); 
        nb.style.backgroundImage="url('right-arrow.png')";
        nb.style.filter="invert(0)";
        document.getElementById("nav").style.left="-55px";
        document.getElementById("nav").style.transition="left 0.3s linear";
        document.getElementById("nav").style.top="55px";
    }
    
}

var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})