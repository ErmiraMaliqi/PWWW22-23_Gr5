window.addEventListener("load",function(){

    //shtojme mouse over/out event handlerat per imazhe
    var featured = this.document.getElementById("featured1");
    featured.addEventListener("mouseover", function(e){
        //shfaqe pershkrimin ne pamje
        var caption = document.querySelector("#featured1 figcaption");
        caption.style.transition = "opacity 1.0s";
        caption.style.opacity = 0.75;
        caption.innerHTML = document.querySelector("#featured1 img").title;
    });
    featured.addEventListener("mouseout",function(e){
        var caption = document.querySelector("#featured1 figcaption");
        caption.style.transition = "opacity 0.5s";
        caption.style.opacity = 0;
    });
});

window.addEventListener("load",function(){

    //shtojme mouse over/out event handlerat per imazhe
    var featured = this.document.getElementById("featured2");
    featured.addEventListener("mouseover", function(e){
        //shfaqe pershkrimin ne pamje
        var caption = document.querySelector("#featured2 figcaption");
        caption.style.transition = "opacity 1.0s";
        caption.style.opacity = 0.75;
        caption.innerHTML = document.querySelector("#featured2 img").title;
    });
    featured.addEventListener("mouseout",function(e){
        var caption = document.querySelector("#featured2 figcaption");
        caption.style.transition = "opacity 0.5s";
        caption.style.opacity = 0;
    });
});

window.addEventListener("load",function(){

    //shtojme mouse over/out event handlerat per imazhe
    var featured = this.document.getElementById("featured3");
    featured.addEventListener("mouseover", function(e){
        //shfaqe pershkrimin ne pamje
        var caption = document.querySelector("#featured3 figcaption");
        caption.style.transition = "opacity 1.0s";
        caption.style.opacity = 0.75;
        caption.innerHTML = document.querySelector("#featured3 img").title;
    });
    featured.addEventListener("mouseout",function(e){
        var caption = document.querySelector("#featured3 figcaption");
        caption.style.transition = "opacity 0.5s";
        caption.style.opacity = 0;
    });
});