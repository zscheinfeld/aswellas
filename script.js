$( document ).ready(function() {





var nodes = null;
var edges = null;
var network = null;
var clicked;
var expanded = 0;
var slideno = 0;
var slidemax; 

function clickitem (test){
  if (test == 0){
    $("#sidepanel").removeClass("infocontainer")
    $("#sidepanel").addClass("infocontainerexpand")
    $("#mynetwork").removeClass("griditem")
    $("#mynetwork").addClass("griditemsmall")
    expanded = 1
  }
  else{
    expanded = 0
  }
}


function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [
    { id: 1, value: 150, label: "Recursive" , font: {face: 'Roboto Mono', color: "rgb(0, 110, 255)", size: 12}, images: ["img/1/1.jpg"],description:"adjective: Characterized by recurrence or repetition."},
    { id: 2, value: 400, label: "break;" , shape: "image", image: "img/2.png", font: {face: 'Roboto Mono', size: 8}, images: ["img/2/1.gif","img/2/2.gif","img/2/3.gif","img/2/4.jpg","img/2/5.jpg"], description:"A loop is a repeated set of instructions.\n Loops are useful, but loops can also be dangerous. The most important part of any loop is the break: the moment when a condition is met, and the program moves on to the next task.\nA loop can be personal.\nA loop can also be a poem. It can be a fantasy, a protest, or an act of radical hope."},
    { id: 3, value: 400, label: "Inbox Interpreter" , shape: "image", image: "img/3.png", font: {face: 'Roboto Mono', size: 8}, images: ["img/3/1.gif","img/3/2.jpg","img/3/3.jpg","img/3/4.jpg","img/3/5.jpg","img/3/6.jpg","img/3/7.jpg","img/3/8.jpg"], description:"Website poems generated from email keywords including 'good morning', 'wondering', 'overdue', 'forward to', and 'end of day.' The websites were presented on monitors and laptops as a physical loop and 'slow walk around' your email."},
    { id: 4, value: 40, label: "Penelope Umbrico" , shape: "image", image: "img/4.jpg", font: {face: 'Roboto Mono', size: 12}, images: ["img/4/1.jpg","img/4/2.jpg","img/4/3.jpg","img/4/4.jpg","img/4/5.jpg"], description: '"Perhaps part of the beauty of taking a picture of a sunset is that while you are doing it it’s likely that a million other people are doing it as well – at exactly the same time. I love this idea of collective practice, something we all engage in despite any artistic concern, knowing that there have been millions before and there will be millions after." - Penelope Umbrico',},
    { id: 5, value: 100, label: "Evan Roth", image: "img/5.png", shape: "image", font: {face: 'Roboto Mono', size: 12}, images: ["img/5/1.jpg","img/5/3.jpeg"], description:"Evan Roth played Angry Birds from start to finish (a monumental task) with inked fingers, and created a repetitive system for scanning the imprint of his thumb-flicks onto phone-sized sheets of transfer paper. The result is “Level Cleared,” a gridded mural of hundreds of sheets that record Roth’s gesture over a span of countless hours, visualizing an experience that is common to millions of players. Seeing this loop physically manifested is eye opening, and was formative to my perspective as an artist and designer. It showed me the value of unearthing, critically analyzing, and re-contextualizing commonplace software — of making loops visible and tangible."},
    { id: 6, value: 15, label: "Langdon" , font: {face: 'Roboto Mono', size: 12}, images: [],},
    { id: 7, value: 40, label: "Fractal" , image: "img/7.png", shape: "image",font: {face: 'Roboto Mono', size: 12}, images: ["img/7/1.gif",], description:"In mathematics, a fractal is a geometric shape containing detailed structure at arbitrarily small scales. Many fractals appear similar at various scales."},
    { id: 8, value: 40, label: "Las Meninas", image: "img/8.jpg", shape: "image", font: {face: 'Roboto Mono', size: 12}, 
    description: "Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age. It has been regarded as one of the most widely analyzed works in Western painting, due to the way its complex and enigmatic composition raises questions about reality and illusion, and the uncertain relationship it creates between the viewer and the figures depicted.",
    images: ["img/8/1.jpg","img/8/2.jpg","img/8/3.jpg","img/8/4.jpg","img/8/5.jpg","img/8/6.jpg"], },
    

    //Modular
    { id: 9, value: 50, label: "spirograph tool" , image: "img/9.png", shape: "image", font: {face: 'Roboto Mono', size: 12}, images: ["img/9/1.gif",], description:"Spirograph animator is a re-tooling of the original Spirograph toy from 1965. In the spirit of the original Spirograph, the animator allows for experimentation and discovery in the form of a playful web-based interface."},
    { id: 10, value: 50, label: "down, where they walk", image: "img/10.jpg", shape: "image",font: {face: 'Roboto Mono', size: 12}, images: ["img/10/1.jpg","img/10/2.jpg","img/10/3.jpg"], },
    {
        id: 11,
        value: 40,
        label: "Modular Alphabet",
        font: {face: 'Roboto Mono', size: 8}, 
        image: "img/S.png",
        shape: "image",
        images: ["img/11/1.jpg"],
      },
    {
        id: 12,
        value: 40,
        label: "Karl Martens",
        font: {face: 'Roboto Mono', size: 12},
        image: "img/12.png",
        shape: "image",
        description: "His monoprints series was created using found metal objects taken from discarded car parts, disks, and other miscellaneous objects collected from the side of the road. He uses these objects to print ink on found paper.",
        images: ["img/km/1.jpeg", "img/km/02.png", "img/km/03.png", "img/km/04.png", "img/km/05.png", "img/km/06.png"]
    },

    {
        id: 13,
        value: 40,
        label: "Karl Nawrot",
        font: {face: 'Roboto Mono', size:12},
        image: "img/13.png",
        shape: "image",
        description: "Karl Nawrot creates type, illustrates, and draws abstract graphic compositions. Nawrot uses techniques usually associated with the architectural process to create letterforms drawn using various media.",
        images: ["img/13/1.jpg","img/13/2.jpg"],
    },
    { id: 14, value: 150, label: "Modular", font: {face: 'Roboto Mono', color: "rgb(0, 110, 255)", size: 12, }, images: [], },

    { id: 15, value: 50, label: "clothes.digital", font: {face: 'Roboto Mono', size: 12, }, images: [], },

    { id: 16, value: 40, image: "img/16.png", shape: "image",label: "Modular Identity", font: {face: 'Roboto Mono', size: 12, }, images: ["img/16/1.jpg","img/16/2.jpg","img/16/3.jpg"], },

    // and also

    { id: 17, value: 200, image: "img/17.png", shape: "image",label: "Drawing Programs", font: {face: 'Roboto Mono', size: 12, }, images: [], },

    { id: 18, value: 150,label: "Breakable", font: {face: 'Roboto Mono', size: 12, }, images: [], },
    { id: 19, value: 150,label: "Scalable", font: {face: 'Roboto Mono', size: 12, }, images: [], },
    { id: 20, value: 150,label: "Flexible", font: {face: 'Roboto Mono', size: 12, }, images: [], },
    { id: 21, value: 150,label: "Unknown Term", font: {face: 'Roboto Mono', size: 12, }, images: [], },
    // { id: 22, value: 150,label: "Efficient", font: {face: 'Roboto Mono', size: 12, }, images: [], },
    // { id: 23, value: 150,label: "Useful", font: {face: 'Roboto Mono', size: 12, }, images: [], },
    // { id: 24, value: 150,label: "Original", font: {face: 'Roboto Mono', size: 12, }, images: [], },
  
  
  ];

    

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [

    // recursive
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4},
    { from: 1, to: 5},
    { from: 1, to: 6},
    { from: 1, to: 7},
    { from: 1, to: 8},


    
    
    // Modular
   
    { from: 14, to: 9},
    { from: 14, to: 10},
    { from: 14, to: 11},
    { from: 14, to: 12},
    { from: 14, to: 13},
    { from: 14, to: 15},
    { from: 14, to: 16},

    //and also
    { from: 1, to: 17},
    { from: 14, to: 17},
    { from: 18, to: 17},
    { from: 19, to: 17},
    { from: 20, to: 17},
    { from: 21, to: 17},
    

  ];

  // Instantiate our network object.
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    nodes: {
      borderWidthSelected: 2,
      color: { 
        background: "rgb(255, 0, 225)", 
        border: "none",  
        highlight: { 
          background: "rgb(255, 0, 225)", 
          border: "black" 
        }, 
        hover: { 
          background: "rgb(255, 0, 225)", 
          border: "black" 
        },     
        },
      shape: "dot",
      scaling: {
        customScalingFunction: function (min, max, total, value) {
          return value / total;
        },
        min: 5,
        max: 150,
      },
    },
    edges:{
        color:"lightgrey",
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
      hover: true,
    },
  };
  network = new vis.Network(container, data, options);

  network.on("click", function (params) {
    slideno = 0
    
    clickitem(expanded);
    clicked = this.getSelection().nodes[0] - 1
    slidemax = nodes[clicked].images.length - 1
    // console.log(slidemax)
    // console.log(network.getPosition(clicked))
    $(".header").text(nodes[clicked].label)
    $(".body").text(nodes[clicked].description)
    $(".image").html(`<img src=${nodes[clicked].images[slideno]}>`)
    // network.focus(clicked + 1, {scale:2, offset:{x:0, y:0}, animation:{duration:1, easingFunction:"easeInOutQuad"}})
    network.focus(clicked + 1, {scale:2, animation:true})
      // easingFunction: "easeInOut"

      
      
      
      
    //   {
    //     scale: 50,
    //     offset: {x:0, y:0},
    //     locked: false,
    //     animation: { // -------------------> can be a boolean too!
    //       duration: 2,
    //       easingFunction: "ease-in-out"
    //     }
    //   }
    // ])
   

  });
}

window.addEventListener("load", () => {
  draw();
});

$(".image").click(function(){
  if (slideno < slidemax){
  slideno = slideno + 1
  $(".image").html(`<img src=${nodes[clicked].images[slideno]}>`)
  }
  else{
  slideno = 0
  $(".image").html(`<img src=${nodes[clicked].images[slideno]}>`)
  }
})

// jquery 



});