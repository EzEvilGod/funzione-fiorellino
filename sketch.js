let w = 600
let h = 300
let d = 80

let x1 = 300
let y = 150

let alpha = 1

let x = x1-x1
let f = w
let directionFiore= x - x1

let fx

function setup () 
{
	createCanvas(w, h)
}

function fiore(x, y, d) {
	let r = d/2

	stroke("rgb(0,0,0)")
	strokeWeight(2)

	fill("rgb(51,255,51)")
	circle(x-r, y-r, d)
	circle(x+r, y+r, d)
	circle(x-r, y+r, d)
	circle(x+r, y-r, d)
	fill("rgb(255,51,0)")
	circle(x, y, d)
}




function draw() {
	
	directionFiore = directionFiore + alpha
	x1 = x1 + alpha
	x = x + alpha
	f = f + alpha

	background("pink")
	fiore(directionFiore, y, d) 

	fiore(x1, y, d)					 
	fiore(x, y, d)				 
	fiore(f, y, d) 	 

	if (x1 == 600) {
		x = 0
		x1 = 300

		directionFiore = x - x1
		f = w
		fx = directionFiore - x1

		fiore(iterazioneFlowerOrigine, y, d)		
	}



}

