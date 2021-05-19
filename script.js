"use strict";
window.onload = function() {
    const canvas = document.getElementById("canvas");
	if(canvas.getContext) {
		const ctx = canvas.getContext("2d");
		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx.font = "30px monospace";
		const writing = Array.prototype.map.call(canvas.children, (line, i) => line.innerText.split("")
		    .map((character, j) => ({
				  character: character,
				  x: j * 16.5,
				  y: i * 40,
				  xSpeed: Math.random() - 0.5,
				  ySpeed: Math.random() - 0.5
			})));
		const width = canvas.width - 16.5;
		const height = canvas.height - 55.2;
		let tick = 0;
		window.setInterval(() => {
	    	ctx.clearRect(0, 0, canvas.width, canvas.height);
		    draw(ctx, writing, width, height, tick++);
		}, 100);
    }
}

function draw(ctx, writing, width, height, tick) {
	const multiplier = tick < 157 ? 0 : Math.sin(tick / 50) * 5;
    for(let line of writing) {
		for(let c of line) {
			if(c.x < 0 || c.x > width) c.xSpeed *= -1;
			if(c.y < 0 || c.y > height) c.ySpeed *= -1;
		    c.x += c.xSpeed * multiplier;
			c.y += c.ySpeed * multiplier;
			ctx.fillStyle = [ "rgb(", c.y / height * 255, ",", c.x / width * 255, ",", multiplier * 1.27 + 127, ")" ].join("");
	        ctx.fillText(c.character, c.x, c.y + 22.2);
		}
	}
}
