//Start of Nav Bar Hamburger Function
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-items')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})
//End of Nav Bar Hamburger Function

//Start of Menu Accordion Function
const accordHeaders = document.querySelectorAll(".accord-header");
accordHeaders.forEach((ach) => {
    ach.addEventListener("click", toggleItem,false);
});

function toggleItem(){
    const currentContentElement=this.nextElementSibling;

    const isCollapsed = currentContentElement.classList.contains("collapse");

    accordHeaders.forEach ((ach) => {
        const contentElement = ach.nextElementSibling;
        if(!contentElement.classList.contains("collapse")) {
        contentElement.classList.add("collapse");
        }

        });
if(isCollapsed){
    currentContentElement.classList.remove("collapse");
}
}
//End of Menu Accordion Function

//Start of Events Carousel Function
document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
 
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });

//End of carousel

//Start of man cave form
const currentDateTime = new Date();
const year = currentDateTime.getFullYear();
const month = (currentDateTime.getMonth() + 1);
const date = (currentDateTime.getDate() + 1);

//if(date < 10) {
   // date = '0' + date;
 // }
  //if(month < 10) {
   // month = '0' + month;
 // }

const dateTomorrow = year + "-" + month + "-" + date;
const checkinElem = document.querySelector("#checkin-date");
const checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}
//End of man cave form

//Start of man cave modal
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click',() => {
    modal_container.classList.add('show');
});

close.addEventListener('click',() => {
    modal_container.classList.remove('show');
});