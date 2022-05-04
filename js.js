const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-items')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})

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