let jobcards = document.querySelectorAll('.search-jobcards');

const searchbar ={
    search(){
        let search = document.getElementById("search1").value;
        let searchLoc = document.getElementById("search2").value;
        let searchSp = document.getElementById("search3").value;
    
        for (let i = 0; i < jobcards.length; i++) {
            if (
                jobcards[i].textContent.toLowerCase().includes(search.toLowerCase()) && 
                jobcards[i].textContent.toLowerCase().includes(searchLoc.toLowerCase()) &&
                jobcards[i].textContent.toLowerCase().includes(searchSp.toLowerCase())){
                jobcards[i].classList.remove("hidden");
            } else {
                jobcards[i].classList.add("hidden");
            }   
        }
    },    
}
let salary = document.querySelectorAll('.salary');
function filterSalary (){

}