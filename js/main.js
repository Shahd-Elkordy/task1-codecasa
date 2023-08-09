
var sections=document.querySelectorAll('section');
onscroll = function(){
var scrollposition=document.documentElement.scrollTop;
sections.forEach( section => {
if(scrollposition >= section.offsetTop -  section.offsetHeight *.25 && scrollposition <section.offsetTop + 
    section.offsetHeight-  section.offsetHeight *.25 ){
        var currentId =section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);

    }
})
};
var removeAllActiveClasses= function(){
document.querySelectorAll('nav a').forEach((el)=>{
    el.classList.remove("active");
})
};
var addActiveClass= function(id){
    var selector=`nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
}
