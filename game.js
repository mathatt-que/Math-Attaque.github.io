/*const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
const largeure = canvas.width
const hauteure = canvas.height

function genereParabole() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    ctx.reset()

    ctx.beginPath()
    ctx.strokeStyle = "blue"

    const diminution = 20
    for (let x = 0; x <= largeure; x++) {
        let yDessin = (a * x * x + b * x + c)
        yDessin = (-1 * (yDessin * diminution)) + hauteure
        let xDessin
    }
    ctx.stroke()
}
*/



const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
const largeure = canvas.width
const hauteure = canvas.height
drawEnemyTank()
drawTank()

function genereParabole() {
    let a = parseFloat(document.getElementById("a").value) || 1
    let b = parseFloat(document.getElementById("b").value) || 0
    let c = parseFloat(document.getElementById("c").value) || 0
    ctx.reset()
    drawEnemyTank()
    drawTank()
    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2

    const diminution = 20
    ctx.moveTo(0, c)
    for (let x = 0; x <= 1000; x++) {
        let mathX = x / diminution
        let mathY = (a * Math.pow(mathX, 2) + (b * mathX) + c)
                 
        let xDessin = x
        let y = (-1 * (mathY * diminution)) + 400

        ctx.lineTo(xDessin, y)
        /*if ( x === c) {
            ctx.moveTo(0, c)
        } else if (!(x <= 1)) {
            ctx.lineTo(xDessin, y)
        }
            */
    }
    ctx.stroke()
}
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
function drawScene(){
       ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canWid, canHei)
    ctx.strokeStyle = "rgba(255,255,255,0.1)"
    ctx.lineWidth = 1
 for (let j = 0; j <= griCol; j++) {
        ctx.beginPath()
        ctx.moveTo(j * celWid, 0)
        ctx.lineTo(j * celHei, canHei)
        ctx.stroke()
    }
    for (let i = 0; i <= gridRow; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * celHei)
        ctx.lineTo(canWid, i * celHei)
        ctx.stroke()
    }
function drawTrail(path, currentPos) {
    if (path.length < 2) return
    ctx.beginPath()
    ctx.strokeStyle = "rgba(100, 180, 255, 0.9)"
    ctx.lineWidth = 2
    ctx.moveTo(path[0].px, path[0].py)
    for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].px, path[i].py)
    }
        ctx.stroke()
    ctx.beginPath()
    ctx.arc(currentPos.px, currentPos.py, 5, 0, Math.PI * 2)
    ctx.fillStyle = "#fff"
    ctx.fill()
}
    let t = 0
    let path = []
    let tire = false
    if (tire == false){return}
    
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)

    if (isNaN(a) || isNaN(b)|| isNaN(c)){
        t=0
        path=[]
        tire = true
    function step(){
        let worldX = randomPositionPlayerX + t
        let worldY = randomPositionPlayerY + (a*t*t + b*t)
        let pos = griToPix(worldX,worldY)
        path.push(pos)
        drawScene()
        drawTrail(path)
        drawDot(pos)
        finishShot()
        t += 0.05;
        requestAhimationFrame(step);
        }
        step();
    }
    function isNearEnemy(px, py) {
    var e = gridToPixel(randomPositionEnemyX, randomPositionEnemyY);
    var dx = px - e.px;
    var dy = py - e.py;
    return 
    Math.sqrt(dx*dx + dy*dy) < 14; 
}
function finishShot(hit, hitPx, hitPy) {
    isShooting = false
    if (hit) {
        document.getElementById("divAffiche").innerText = "HIT!"
        drawScene()
        ctx.beginPath()
    } else {
        document.getElementById("divAffiche").innerText = "Miss"
        drawScene()
    }
}




//source : https://www.sitepoint.com/generate-random-numbers-javascript/ 
function randomPositionPlayerX(minX, maxX) {
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);
  return Math.floor(Math.random() * (maxX - minX + 1)) + minX;
}
function randomPositionPlayerY(minY, maxY) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  return Math.floor(Math.random() * (maxY - minY + 1)) + minY;
}

//source : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
function drawTank(){


    const imgPlayerTank = new Image();
    imgPlayerTank.src = "https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png"

    imgPlayerTank.onload = function() {
        // Basic drawing: ctx.drawImage(image, x, y, width, height)
        ctx.drawImage(imgPlayerTank, 10, 10, 150, 150);
    };
}

//source : https://www.sitepoint.com/generate-random-numbers-javascript/ 
function randomPositionEnemyX(minX, maxX) {
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);
  return Math.floor(Math.random() * (maxX - minX + 1)) + minX;
}
function randomPositionEnemyY(minY, maxY) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  return Math.floor(Math.random() * (maxY - minY + 1)) + minY;
}

//source : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
function drawEnemyTank(){


const imgEnemyTank = new Image();
imgEnemyTank.src = "https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png"

imgEnemyTank.onload = function() {
    // Basic drawing: ctx.drawImage(image, x, y, width, height)
    ctx.drawImage(imgEnemyTank, 500, 30, 150, 150);
};
}
