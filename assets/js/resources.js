const toggleCircle = document.getElementsByClassName('resources-toggle-circle')[0];
const toggleContainer = document.getElementsByClassName('resources-section-toggle') [0];
const navElements = document.querySelectorAll(".underlining");
var toggleValue = "NE";


toggleCircle.addEventListener('click',()=>{
    if(toggleValue == "NE"){
        toggleContainer.classList.add("toggle-background");
        toggleCircle.classList.add("move-circle-right");
        toggleCircle.classList.remove("move-circle-left");
        toggleValue = "EN";
        toggleCircle.style.backgroundColor = "white";

    }
    else{
        toggleContainer.classList.remove("toggle-background");
        toggleCircle.style.backgroundColor = " #0a66c2";
        toggleCircle.classList.add("move-circle-left");
        toggleCircle.classList.remove("move-circle-right");
        toggleValue = "NE";

    }
    
})





const articles =[
    {
        id:1,
        tag: "Health",
        heading: "Empowering Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    {
        id:2,
        tag: "Contraception",
        heading: "Contraception Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    {
        id:3,
        tag: "Pregnancy",
        heading: "Empowering Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    {
        id:4,
        tag: "Health",
        heading: "Empowering Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    {
        id:5,
        tag: "Contraception",
        heading: "Contraception Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    {
        id:1,
        tag: "Health",
        heading: "Empowering Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    {
        id:2,
        tag: "Contraception",
        heading: "Contraception Abilities: Stories of Triumph and Resilience",
        writer: "Sita Nakarmi",
        date: "May 7, 2019",
        content: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure."
    },
    
] 

var articlesPerPage = 4;
var paginationNumber = 1;
var articleBreaker = 4;


const carouselContainer = document.getElementsByClassName('carousel-container')[0];

// render content dynamically
function renderArticle(articles){
    for(i = 0; i < articles.length; i++){
        let carouselCard = document.createElement("div");
        carouselCard.classList.add("card", "carousel-card");
        let carouselRow = document.createElement("div");
        carouselRow.classList.add("row","carousel-row");
    
        let carouselImgContainer = document.createElement("div");
        carouselImgContainer.classList.add("col-4","card-body-img");
        carouselImg = document.createElement("img");
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body","category-card-body", "col-8");
        let cardTag = document.createElement("p");
        cardTag.classList.add("category-tag");
        let cardHeading = document.createElement("h5");
        cardHeading.classList.add("card-title", "sub-heading", "carousel-hard-heading");
        let contentRow = document.createElement("div");
        contentRow.classList.add("row")
        let carouselAuthor = document.createElement("div");
        carouselAuthor.classList.add("col-12", "col-lg-4", "carousel-author", "resources-section-author")
        let carouselDate = document.createElement("div");
        carouselDate.classList.add("col-12", "col-lg", "carousel-date", "resources-section-date")
        let carouselContent = document.createElement("p");
        carouselContent.classList.add("card-text", "carousel-content", "resource-section-text")
    
    
        carouselImg.setAttribute('src', "./assets/images/health1.svg");
        cardTag.innerText = articles[i].tag;
        cardHeading.innerText = articles[i].heading
        carouselContent.innerText = articles[i].content;
        carouselDate.innerText = articles[i].date;
        carouselAuthor.innerText = articles[i].writer;
        carouselImgContainer.appendChild(carouselImg)
        carouselRow.appendChild(carouselImgContainer);
        carouselCard.appendChild(carouselRow)
        carouselContainer.appendChild(carouselCard)
        cardBody.appendChild(cardTag)
        contentRow.appendChild(carouselDate)
        contentRow.appendChild(carouselAuthor);
        cardBody.appendChild(contentRow)
        cardBody.appendChild(cardHeading)
        cardBody.appendChild(carouselContent);
        carouselRow.appendChild(cardBody);

    }
}

var numberOfContent = 4;
var pageNumber = 1;
var currentTag = 0;

const category = document.querySelectorAll('.category');
var selectedTags = [];
var selectedCategory = null; 


// filtering content based on category

    category.forEach(li=>{
        li.addEventListener("click",(event)=>{
            event.stopPropagation();
            selectedCategory = li.innerText;
            filterArticles(selectedCategory);

        })
    });


// render card with the tag that matches clicked category
function filterArticles(a){
    tags.forEach((tag, index)=>{
        if(tag.innerText == a){
            selectedTags.push(articles[index])
            tag.parentNode.parentNode.parentNode.classList.remove("hide");

        }else{
            tag.parentNode.parentNode.parentNode.classList.add("hide");
        }

    })
    
    displayFilteredTags(selectedTags)

}
    

    const pageLink = document.querySelectorAll(".page-link-a");
    pageLink.forEach(page=>{
    page.addEventListener("click", (event)=>{
        event.stopPropagation();
        pageNumber = page.innerText;
        carouselContainer.setAttribute('id', `page-${pageNumber}`);
        console.log(`page-${pageNumber}` + "page")
    })})



renderArticle(articles);
const tags = document.querySelectorAll(".category-tag");

