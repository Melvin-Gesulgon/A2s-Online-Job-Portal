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

let wfh = document.getElementById("wfh");
let office = document.getElementById("office");
let hybrid = document.getElementById("hybrid");

let fulltime = document.getElementById("full-time");
let parttime = document.getElementById("part-time");
let project = document.getElementById("project-based");
let freelance = document.getElementById("freelance");

function jobSetup(){
    for (let x = 0; x < jobcards.length; x++) {
        if (
            wfh.checked && jobcards[x].textContent.includes('work-from-home') ||
            office.checked && jobcards[x].textContent.includes('office-based') ||
            hybrid.checked && jobcards[x].textContent.includes('hybrid') 
            ){
            jobcards[x].classList.remove("hidden");
        } else{
            jobcards[x].classList.add("hidden");
        }
    }   
};



function jobNature(){
    for (let i = 0; i < jobcards.length; i++) {
        if (
            fulltime.checked && jobcards[i].textContent.includes('full-time') ||
            parttime.checked && jobcards[i].textContent.includes('part-time') ||
            project.checked && jobcards[i].textContent.includes('project-based') ||
            freelance.checked && jobcards[i].textContent.includes('freelance')       
            ){
            jobcards[i].classList.remove("hidden");
        } else{
            jobcards[i].classList.add("hidden");
        }
    }   
};

let samplebox = document.getElementById("30");
let salary = document.querySelectorAll('.salary');

function jobSalary0(){
    let sahod0 = document.querySelector("#sahod-0:checked");
         if (sahod0){
            for (let i = 0; i < salary.length; i++) {
                if(Number(salary[i].innerHTML) <= 14999){
                    document.querySelector("#engineer-" + i).classList.remove("hidden");
                }else{
                    document.querySelector("#engineer-" + i).classList.add("hidden");
                }
            }
        } else{
            // jobcards[i].classList.add("hidden");
            
        } 
}

function jobSalary1(){
    let sahod1 = document.querySelector("#sahod-1:checked");
         if (sahod1){
            for (let i = 0; i < salary.length; i++) {
                if(
                    Number(salary[i].innerHTML) >= 15000 &&
                    Number(salary[i].innerHTML) <= 29999
                    ){
                    document.querySelector("#engineer-" + i).classList.remove("hidden");
                }else{
                    document.querySelector("#engineer-" + i).classList.add("hidden");
                }
            }
        } else{
            // jobcards[i].classList.add("hidden");
            
        } 
}

function jobSalary2(){
    let sahod2 = document.querySelector("#sahod-2:checked");
         if (sahod2){
            for (let i = 0; i < salary.length; i++) {
                if(
                    Number(salary[i].innerHTML) >= 30000 &&
                    Number(salary[i].innerHTML) <= 59999
                    ){
                    document.querySelector("#engineer-" + i).classList.remove("hidden");
                }else{
                    document.querySelector("#engineer-" + i).classList.add("hidden");
                }
            }
        } else{
            // jobcards[i].classList.add("hidden");
            
        } 
}

function jobSalary3(){
    let sahod3 = document.querySelector("#sahod-3:checked");
         if (sahod3){
            for (let i = 0; i < salary.length; i++) {
                if(Number(salary[i].innerHTML) >= 60000){
                    document.querySelector("#engineer-" + i).classList.remove("hidden");
                }else{
                    document.querySelector("#engineer-" + i).classList.add("hidden");
                }
            }
        } else{
            // jobcards[i].classList.add("hidden");
            
        } 
}

function salaryFilter(){
    let a = document.querySelector("#sahod-0:checked");
    let b = document.querySelector("#sahod-1:checked");
    let c = document.querySelector("#sahod-2:checked");
    let d = document.querySelector("#sahod-3:checked");
    if (a && document.querySelector("#sahod-1")){
        jobSalary0();   
    } else if (b){
        jobSalary1();  
    } else if (c){
        jobSalary2();
    } else if (d){
        jobSalary3();  
    }
}

function submit (){
    let a = "Application submitted"
    alert(a);
}