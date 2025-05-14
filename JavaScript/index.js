const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("load", function(){
    const dropBoxe = document.getElementById("dropdownBoxing");
    dropBoxe.style.display = "none";

    const dropMotorcycle = document.getElementById("dropdownMotorcycle");
    dropMotorcycle.style.display = "none";

    const dropHelp = document.getElementById("dropdownHelping");
    dropHelp.style.display = "none";

    document.getElementById("btnBoxing").addEventListener("click", clickBtnBoxing);
    document.getElementById("btnMotorcycle").addEventListener("click", clickBtnMotorcycle);
    document.getElementById("btnHelping").addEventListener("click", clickBtnHelping);
})

function clickBtnBoxing(){
    const dropBoxe = document.getElementById("dropdownBoxing");
    if (dropBoxe.style.display === "none" || dropBoxe.style.display === ""){
        this.classList.add('showing');
        this.classList.remove('notShowing');
        dropBoxe.style.display = "block";
    } else 
    {
        this.classList.remove('showing');
        this.classList.add('notShowing');
        dropBoxe.style.display = "none";
    }
}

function clickBtnMotorcycle(){
    const dropMotorcycle = document.getElementById("dropdownMotorcycle");
    if (dropMotorcycle.style.display === "none" || dropMotorcycle.style.display === ""){
        this.classList.add('showing');
        this.classList.remove('notShowing');
        dropMotorcycle.style.display = "block";
    } else 
    {
        this.classList.remove('showing');
        this.classList.add('notShowing');
        dropMotorcycle.style.display = "none";
    }
}

function clickBtnHelping(){
    const dropHelp = document.getElementById("dropdownHelping");
    if (dropHelp.style.display === "none" || dropHelp.style.display === ""){
        this.classList.add('showing');
        this.classList.remove('notShowing');
        dropHelp.style.display = "block";
    } else 
    {
        this.classList.remove('showing');
        this.classList.add('notShowing');
        dropHelp.style.display = "none";
    }
}