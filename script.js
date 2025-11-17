let main=document.querySelector("#main")
let btn=document.querySelector("button")

let arr=[
  "The light you seek outside is already shining within you.",
  "Do your duty without attachment, for that is the path to peace. — Bhagavad Gita",
  "Every sunrise is a reminder that you can rise again with new strength.",
  "When your mind is calm, your path becomes clear.",
  "Small steps taken with faith create big transformations.",
  "Trust the timing of your life; the universe never rushes.",
  "Hard times are not sent to break you but to shape you.",
  "Your strength is greater than any challenge that stands before you.",
  "Let go of what does not serve your soul.",
  "The divine is within you—walk with confidence.",
  "Success begins when excuses end.",
  "Stay consistent even when results are not visible.",
  "Discipline turns dreams into reality.",
  "Be patient. What is yours will find its way to you.",
  "Gratitude turns what you have into enough.",
  "Your only limit is the belief you place on yourself.",
  "Kindness is a language understood by every heart.",
  "Where there is faith, fear has no place.",
  "Progress is still progress, no matter how slow.",
  "You are exactly where you need to be to learn what your soul needs to learn."
]


btn.addEventListener("click",function(){

    let h1=document.createElement("h1")
    let a=Math.floor(Math.random()*arr.length)
    h1.textContent=arr[a]
    
    h1.style.fontSize="18px"
    h1.style.position="absolute"
    h1.style.whiteSpace="nowrap"

    let x=Math.random()*98
    let y=Math.random()*98
    h1.style.left= x+"%"
    h1.style.top= y + "%"

    main.appendChild(h1)
})