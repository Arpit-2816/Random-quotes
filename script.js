var h1=document.querySelector("h1")
var h2=document.querySelector("h2")
var btn=document.querySelector("button")
var mn=document.querySelector("main")
let arr=[
    {
        team:"MI",
        fullname:"Mumbai Indians",
        Title:5,
        primary:"Blue",
        secondary:"Gold"

    },
    {
        team:"CSK",
        fullname:"Chennai Super Kings",
        Title:5,
        primary:"Yellow",
        secondary:"Blue"
    
    },
    {
        team:"KKR",
        fullname:"Kolkata Knight Riders",
        Title:3,
        primary:"Purple",
        secondary:"Gold"
    
    },
    {
        team:"SRH",
        fullname:"Sunrisers Hyderabad",
        Title:2,
        primary:"Orange",
        secondary:"gray"
    },
    {
        team:"RR",
        fullname:"Rajasthan Royals",
        Title:1,
        primary:"Pink",
        secondary:"Blue"
    },
    {
        team:"GT",
        fullname:"Gujrat Titans",
        Title:1,
        primary:"Navy",
        secondary:"Gold"
    },
    {
        team:"RCB",
        fullname:"Royal Challengers Banglore",
        Title:1,
        primary:"Red",
        secondary:"DarkBlue"
    },
    {
        team:"DC",
        fullname:"Delhi Capitals",
        Title:0,
        primary:"Blue",
        secondary:"Red"
        
    },
    {
        team:"PBKS",
        fullname:"Punjab Kings",
        Title:0,
        primary:"Crimson",
        secondary:"Gold"
    },
    
    {
        team:"LSG",
        fullname:"Lucknow Super Giants",
        Title:0,
        primary:"skyblue",
        secondary:"Orange",

    }
]

btn.addEventListener('click',function(){
    var winner=arr[Math.floor(Math.random()*arr.length)]
    h1.textContent=winner.team
    h2.textContent=winner.fullname
    h1.style.backgroundColor=winner.secondary
    mn.style.backgroundColor=winner.primary
    mn.style.backgroundImage=winner.backgroundImage
})