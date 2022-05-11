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


//Start of man cave modal
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const adult = document.getElementById('adult');
const rmdate = document.getElementById('checkin-date');
const room = document.getElementById('room-selection');


open.addEventListener('click',() => {
    modal_container.classList.add('show');
    fname.value='';
    email.value='';
    adult.value='';
    rmdate.value='';
    room.value='';

});

close.addEventListener('click',() => {
    modal_container.classList.remove('show');
});


async function getApi() {
  const api_url = 'https://excuser.herokuapp.com/v1/excuse'
  const response = await fetch (api_url);
  const data = await response.json();
  console.log(data)
  const {excuse} = data[0];
  console.log(excuse);
  document.getElementById('excuse').textContent = excuse;
  } 
