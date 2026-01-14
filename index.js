let indexValue = 0;
const slides = document.querySelectorAll('.slide');
const headerNavs = query('.nav-sections',true);
const welcome =query('.welcome');
const sermons =query('.sermons');
const giving =query('.Giving');
const newsletter=query('.newsletter');




slides.forEach((slide,index) => {
    slide.style.display = indexValue === index ? 'flex': 'none'
});

function toggleState(){
    
    const interval = setInterval(() => {        
        if(indexValue <  3){
            indexValue++
        }else{
            indexValue = 0
        }
            slides.forEach((slide,index) => {
            slide.style.display = indexValue === index ? 'flex': 'none'
            });
    }, 5000);
}

toggleState();

//============ Stored Index =======//

function query(className, isChildren = false){
    if(isChildren) return document.querySelectorAll(className);
    return document.querySelector(className);
}

//================Listeners =================//

headerNavs.forEach((element,index) => {
    element.addEventListener('click',() => {
       switch(index){
        case 0:
           
            break;

        case 1: 
         welcome.scrollIntoView();
            break;
        case 2:
            giving.scrollIntoView();
            break;
        case 3:
            sermons.scrollIntoView();
            break;
        case 4:
            newsletter.scrollIntoView();
            break;

            
        default:
            break;
    }
    });
})
