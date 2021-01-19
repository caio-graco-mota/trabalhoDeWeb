window.onload = function() {

    var leftMenu =  document.getElementsByClassName("menu-left")[0];
    var rightMenu =  document.getElementsByClassName("menu-right")[0];
    var carousel = document.getElementById("comments");
    var carouselItemWidth = document.getElementsByClassName("carousel-item")[0].clientWidth || 0;

    rightMenu.onclick = function(){
        console.log(carousel.scrollLeft + carouselItemWidth);
        carousel.scrollLeft = carousel.scrollLeft + carouselItemWidth;
    };

    leftMenu.onclick = function(){
        if(carousel.scrollLeft - carouselItemWidth < 0){
            carousel.scrollLeft = 0;
        }else{
            carousel.scrollLeft = carousel.scrollLeft - carouselItemWidth;
        }
    };

    setBackground();
    addComment();

    let btnWindow = document.getElementById("showCreditos");
    btnWindow.onclick = function(){
        let window = document.getElementsByClassName("window")[0];
        window.classList.add("show");
    };
};

function setBackground(){
    let btn1 = document.getElementById("btnColor1");
    let btn2 = document.getElementById("btnColor2");
    let btn3 = document.getElementById("btnColor3");

    btn1.onclick = function(){
        setBck("#9e00ff");
        this.classList.add("selected");
        btn2.classList.remove("selected");
        btn3.classList.remove("selected");
    };

    btn2.onclick = function(){
        setBck("#00e0ff");
        this.classList.add("selected");
        btn1.classList.remove("selected");
        btn3.classList.remove("selected");
    };

    btn3.onclick = function(){
        setBck("#ffd500");
        this.classList.add("selected");
        btn1.classList.remove("selected");
        btn2.classList.remove("selected");
    };

    function setBck(value){
        let page = document.getElementsByClassName("page")[0];
        let bck = document.getElementsByClassName("bck-2");
        page.style.backgroundColor = value;
        for(let i = 0; i < bck.length; i++){
            bck[i].style.backgroundColor = value;
        }
    }
}

function addComment(){

    let subMessage = document.getElementById("subMessage");
    subMessage.onclick = function(){
        //form
        let nameForm = document.getElementById("nameAuthorAD");
        let messageForm = document.getElementById("messageAuthorAD");

        //carousel
        let carousel = document.getElementById("comments-carousel");
        //carousel-item
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        //carousel-item-content
        let carouselItemCon = document.createElement("div");
        carouselItemCon.classList.add("carousel-item-content");
        carouselItemCon.classList.add("d-flex");
        //carousel-item-message
        let message = document.createElement("p");
        message.classList.add("message");
        //carousel-item-author
        let author = document.createElement("div");
        author.classList.add("author");
        author.classList.add("d-flex");
        //author-name
        let authorName = document.createElement("span");
        authorName.classList.add("name");
        authorName.appendChild(document.createTextNode("De: " + nameForm.value));
        //
        author.appendChild(authorName);
        message.appendChild(document.createTextNode(messageForm.value));
        carouselItemCon.appendChild(message);
        carouselItemCon.appendChild(author);
        carouselItem.appendChild(carouselItemCon);
        carousel.appendChild(carouselItem);
        //
        let btnExcluir = document.createElement("button");
        btnExcluir.appendChild(document.createTextNode("Excluir"));
        btnExcluir.classList.add("btn");
        btnExcluir.classList.add("apagarMensagem");
        // evento de remoção
        btnExcluir.onclick = function(){
            carouselItem.remove();
        };

        carouselItemCon.appendChild(btnExcluir);
    };
}
