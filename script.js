var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guesses=[];
var livess;
var counter;
var space;
categories = [
    ["apna-bana-le",
     "janam-janam",
      "munda-sona-hoon-main",
      "desi-girl",
      "malang-sajna ", 
      "keariya",
      "pheli-dafa"],
    [
        "sholay",
        "pink",
        "tu-jhoothi-main-makkaar",
        "bajrangi-bhaijaan",
        "kuch-kuch-hota-hai",
        "pathaan",
        "brahmāstra:part-one-shiva",
        "dilwale",
        "bhediya"
    ],
    ["manchester", "milan", "madrid", "amsterdam", "prague"]
];
hints = [
    [
        "By Arijit Singh from movie Bhediya", 
        "From movie Dilwale",
        "From Shehzada",
        "From Dastana",
        "By Sachet Tendon",
        "From Brahmastra",
        "By Atif Aslam,Shiraz Uppal"],
    [
        "Featuring Amitabh Bachchan,released in 1975",
        "Featuring Amitabh Bachchan, Tapsee Pannu",
        "Featuring Ranbir Kapoor , Shraddha Kapoor, 2023 movie",
        "Featuring Salman Khan,Kareena Kapoor , 2015",
        "Featuring Salman Khan,Shah Rukh Khan",
        "Featuring Deepika Padukone,Shah Rukh Khan ,2023",
        "Featuring Alia Bhatt,Ranbir Kapoor 2022",
        "Featuring Shah Rukh Khan,Kajol , 2015",
        "Featuring Varun Dhawan,Kriti Sanon , 2022"
    ],
    ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];
var guess;
window.onload=()=>{
function keyboard(){
     alphabet_list=document.createElement("ul");
    for(var i=0;i<alphabet.length;i++){
        var alphabet_box=document.createElement("li");
        var but=document.createElement("button");
        but.addEventListener("click",act);
        but.setAttribute("class","but");
        but.innerHTML=alphabet[i];
        alphabet_list.appendChild(alphabet_box);
        alphabet_box.appendChild(but);
    }
    document.getElementById("alphabet").appendChild(alphabet_list);    
}

var selectedcategory=()=>{
    if(chosencat==categories[0])
    categoryname.innerHTML="The Chosen Category Is Songs";
    else if(chosencat==categories[1])
    categoryname.innerHTML="The Chosen Category Is Films";
    else
    categoryname.innerHTML="The Chosen Category Is Cities";
}

var result=()=>{
     ulist=document.createElement("ul");
    for(var i=0;i<word.length;i++){
        var list=document.createElement("li");
        list.setAttribute("class","guessword");
        if(word[i]=="-"){
        list.innerHTML="-";
        space++;
        }
        else
        list.innerHTML="___";
        ulist.appendChild(list);
        guesses.push(list);
    }
   
    hold.appendChild(ulist);
}


function hintsfunction(){
    var indexofchosencat=categories.indexOf(chosencat);
    var indexofword=chosencat.indexOf(word);
    clue.innerHTML="Clue - "+hints[indexofchosencat][indexofword];
}

function comments(){
    lives.innerHTML="You have "+ livess + " lives left";
    if(livess<1){
    lives.innerHTML="Game Over!! Try again";
    setTimeout(()=>{
        resets();
      },2000)
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          lives.innerHTML = "You Win!";
          setTimeout(()=>{
            resets();
          },2000)
        }
      }
     
}
hint.addEventListener("click",hintsfunction);

function act(){
    this.setAttribute("class","active");
    var guess=this.innerHTML;
    this.onclick=null;
    for(var i=0;i<word.length;i++){
        if(word[i]===guess){
            counter++;
            guesses[i].innerHTML=guess;
        }
    }
    var j=(word.indexOf(guess));
    if(j==-1){
    livess--;
    comments();
    }
    else
    comments();
}

var start=()=>{
    chosencat=categories[Math.floor(Math.random()*categories.length)];
    console.log(chosencat)
    word=chosencat[Math.floor(Math.random()*chosencat.length)];
    console.log(word);
    livess=10;
    guesses= [ ];
    counter=0;
    space=0;
    keyboard();
    result();
    comments();
    selectedcategory();
}

    start();

reset.addEventListener("click",resets);
function resets(){
    ulist.parentNode.removeChild(ulist);
    alphabet_list.parentNode.removeChild(alphabet_list);
    clue.innerHTML="";
    start();
}
}