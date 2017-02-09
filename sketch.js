/**
* Aileen Lian <al7168@bard.edu>
* 9 Feb 2017
* IDEA 135
* Sketch 4: Avatar
* I worked alone on this assignment.
* Reflection: I initially wanted to create a different kind of character for my avatar (a maybe a little fairy, or a waffle, etc.), but I realized that it'd be too difficult without further skill learning. I wanted to create a simple but aesthetically pleasing avatar that. Creating this avatar also forced me to visualize images in terms of coordinates, which was challenging but very beneficial. 
*/

function setup() {
createCanvas(500, 420);
background(150, 150, 150);
}

function draw() {
stroke(0);
//ears
    fill(231, 225, 242);
ellipse(287, 170, 30, 30); 
ellipse(213, 170, 30, 30); 
    fill(255, 255, 255);
ellipse(287, 170, 20, 20);   
ellipse(213, 170, 20, 20);

//arms
    fill(231, 225, 242);
quad(190, 270, 223, 235, 240, 235, 203, 285);
quad(270, 255, 275, 235, 318, 276, 300, 287);
    
    fill(231, 225, 242);
ellipse(310, 285, 25, 25);
ellipse(190, 283, 25, 25);
    
//legs
rect(215, 290, 20, 50);
rect(265, 290, 20, 50);
ellipse(220, 340, 32, 20);
ellipse(280, 340, 32, 20);
    
//body
    fill(231, 225, 242);
ellipse(250, 270, 90, 90); 
    fill(255, 255, 255);
ellipse(250, 270, 70, 70);

//head
    fill(231, 225, 242);
ellipse(250, 200, 90, 80);
    
//eyes
    strokeWeight(1.5);
arc(230, 195, 9, 9, 0, radians(180));
arc(270, 195, 9, 9, 0, radians(180));

//nose
    fill(173, 166, 188);
triangle(245, 200, 255, 200, 250, 210);
line(250, 210, 250, 218);
    
//mouth
    fill(0, 0, 0)
ellipse(251, 227, 7, 7);
    
//text
fill(255, 226, 226);
    
textSize(40);
text("z", 308, 220);

textSize(60);
text("z", 340, 200);
    
textSize(80);
text("z", 375, 180);
    
textSize(20);
text("THE", 30, 60);

textSize(30);
text("SLEEPER", 30, 90);
    

}
