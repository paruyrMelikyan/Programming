function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(140);
            if (r < 20) r = 0;
            else if (r < 80) r = 1;
            else if (r < 90) r = 2;
            else if (r < 100) r = 3;
            else if (r < 110) r = 4;
            else if (r < 130) r = 5;
            else if (r < 140) r = 6;
            matrix[y][x] = r;
        }
    }
    return matrix;
}


var matrix;
var w = 30;
var h = 30;
var side = 16;
var grassArr = [], xotakerArr = [], gishatichArr = [], hrdehArr = [], rainArr = [], argelqArr = [];
exanak = "";
          
function weather() {
    setTimeout(function () { exanak = "Գարուն"; console.log(exanak); }, 2500);
    setTimeout(function () { exanak = "Ամառ"; console.log(exanak); }, 5000);
    setTimeout(function () { exanak = "Աշուն"; console.log(exanak); }, 7500);
    setTimeout(function () { exanak = "Ձմեռ"; console.log(exanak); weather(); }, 10000);
}

weather();

function Mrrik(x, y) {
    console.log("k-1");
	for (var i in grassArr) {
		if (grassArr[i].x == x && grassArr[i].y == y) {
            grassArr.splice(i, 1);
            console.log("xot");
		}
	}
	for (var i in xotakerArr) {
		if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
            xotakerArr.splice(i, 1);
            console.log("xotaker");
		}
	}
	for (var i in gishatichArr) {
		if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
            gishatichArr.splice(i, 1);
            console.log("gishatich");
		}
	}
	for (let i in hrdehArr) {
		if (hrdehArr[i].x == x && hrdehArr[i].y == y) {
            hrdehArr.splice(i, 1);
            console.log("hrdeh");
		}
	}
	for (let i in rainArr) {
		if (rainArr[i].x == x && rainArr[i].y == y) {
            rainArr.splice(i, 1);
            console.log("andzrev");
		}
	}
}

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w, side * h);
    background("#acacac");
    frameRate(5);
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3));
            }
            else if (matrix[y][x] == 4) {
                hrdehArr.push(new Hrdeh(x * 1, y * 1, 4));
            }
            else if (matrix[y][x] == 5) {
                rainArr.push(new Rain(x * 1, y * 1, 5));
            }
            else if (matrix[y][x] == 6) {
                argelqArr.push(new Argelq(x * 1, y * 1, 6));
            }
        }
    }
}

function draw() {

    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("#F0F3F4");

                if (exanak == "Գարուն") {
                    fill("#8BC34A");
                }
                else if (exanak == "Ամառ") {
                    fill("green");
                }
                else if (exanak == "Աշուն") {
                    fill("#DAF7A6");
                }
                else if (exanak == "Ձմեռ") {
                    fill("#F0F3F4");
                }

            }
            else if (matrix[y][x] == 2) {
                fill("#FFF667");
                if (exanak == "Գարուն") {
                    fill("#FFE000");
                }
                else if (exanak == "Ամառ") {
                    fill("#5CC640");
                }
                else if (exanak == "Աշուն") {
                    fill("#9EFC60");
                }
                else if (exanak == "Ձմեռ") {
                    fill("#FFF667");
                }
            }
            else if (matrix[y][x] == 3) {
                fill("#ff9933");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("#7AB0FF");
            }
            else if (matrix[y][x] == 6) {
                fill("#404040");
            }
            rect(x * side, y * side, side, side);
        }
    }





    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

    for (var i in hrdehArr) {
        hrdehArr[i].bazmanal();
        hrdehArr[i].utel();
        hrdehArr[i].mahanal();
    }

    for (var i in rainArr) {
        rainArr[i].bazmanal();
        rainArr[i].utel();
        rainArr[i].mahanal();
    }



}

function mouseClicked() {   
    var xClick = Math.floor(mouseX / side);
    var yClick = Math.floor(mouseY / side);
    if (xClick >= 0 && yClick >= 0 && xClick < matrix[0].length && yClick < matrix.length){    
        Mrrik(xClick, yClick);
        console.log("karevor 2");
    }
}