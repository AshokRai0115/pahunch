const searchBar= document.getElementsByClassName('toggle-search')[0];
const searchToggler = document.getElementById('search-toggler');
const bar = document.getElementById('search-toggler');
const navElements = document.querySelectorAll(".underlining");


const helpfulTopics =[
    {
        imgUrl: "./assets/images/anatomy.svg",
        helpfulTopicsSubheading: "Human body and anatomy",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/gender.svg",
        helpfulTopicsSubheading: "Gender, Sex and Sexuality",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/contraceptive.svg",
        helpfulTopicsSubheading: "Contraception",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/pregnant.svg",
        helpfulTopicsSubheading: "Pregnancy",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/safe abortion.svg",
        helpfulTopicsSubheading: "Safe Abortion",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/gender based violence.svg",
        helpfulTopicsSubheading: "Gender Based Violence",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/HIV and STIs.svg",
        helpfulTopicsSubheading: "HIV and STIs",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/harmful practices.svg",
        helpfulTopicsSubheading: "Harmful practices",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/laws of SRHR.svg",
        helpfulTopicsSubheading: "Laws in SRHR in Nepal",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    },
    {
        imgUrl: "./assets/images/referral services.svg",
        helpfulTopicsSubheading: "Referral Services",
        helpfulTopicsSubheadingContent: "Contraception, also known as birth control, encompasses a range of methods and techniques designed to prevent pregnancy. It allows individuals and couples to have cont..."
    }

]

searchToggler.addEventListener('click', ()=>{
    if(searchBar.classList.contains('hide')){
        searchBar.classList.remove('hide');
        searchBar.classList.add('show');
        searchBar.classList.add('form-control');
        
    }else{
        searchBar.classList.remove('show');
        searchBar.classList.remove('form-control');
        searchBar.classList.add('hide');
    }

})

window.addEventListener("resize", ()=>{
    if(window.innerWidth < 992){
        searchBar.classList.remove('hide');
        searchBar.classList.add('form-control');
        searchBar.classList.add('show');
    }else{
        searchBar.classList.remove('show');
        searchBar.classList.remove('form-control');
        searchBar.classList.add('hide');
    }
})

// Helpful topics

const helpfulTopicsContainer = document.getElementsByClassName('helpful-topics-container')[0];

for(i = 0; i < helpfulTopics.length; i++){
    helpfulTopicsContainer.appendChild(createCard(helpfulTopics[i]));
}

function createCard(topic){
    const cardContainer = document.createElement('div');
    cardContainer.className = "card";
    cardContainer.classList.add('card-size');

    const cardImg = document.createElement('img');
    cardImg.className = "card-img-top";
    cardImg.src = topic.imgUrl;
    cardContainer.appendChild(cardImg);
     
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    cardBody.classList.add('card-inner-contents');
    cardContainer.appendChild(cardBody);

    const subHeader = document.createElement('h5');
    subHeader.className = "card-title";
    subHeader.classList.add('sub-heading');
    subHeader.innerText = topic.helpfulTopicsSubheading;
    cardBody.appendChild(subHeader);


    const subHeaderDescription = document.createElement('p');
    subHeaderDescription.className = "card-text";
    subHeaderDescription.innerText = topic.helpfulTopicsSubheadingContent;
    cardBody.appendChild(subHeaderDescription);

    const cardLink = document.createElement('a');
    cardLink.className = "link-underline-primary";
    cardLink.href = "#";
    cardLink.innerHTML = "Learn More &nbsp;"
    cardBody.appendChild(cardLink);


    const fontAwsomeIcon = document.createElement('i');
    fontAwsomeIcon.className = "fa-solid";
    fontAwsomeIcon.classList.add('fa-arrow-right', 'icon-color');
    cardLink.appendChild(fontAwsomeIcon);

    return cardContainer;
}

function navbarStyling(){
    navElements.forEach(element=>{
        element.addEventListener("click", (event)=>{
            element.classList.add("active");
            event.stopPropagation();
        })
    })
}

navbarStyling()