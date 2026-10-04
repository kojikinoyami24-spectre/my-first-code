function hebat() {
 let nilai = 100;
const ujian = 24;
  
if (nilai >= 100) {
 console.log("nilai sempurna") 
}
 else if ( nilai >= 75 ) {
  console.log("nilai kkm") 
}
 else {
  console.log("gagal") 
}
}
// memanggil
hebat();

  let x = 50, y = 25;
  let vx = 2, vy = 3;
  const r = 10
  const canva = document.getElementById("GUI");
  const ctx = canva.getContext("2d");

function animation() {

  ctx.clearRect(0,0,canva.width,canva.height);
  ctx.beginPath();
  ctx.arc(x,y,r,0,Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();

  x += vx ;
  y += vy ;
  
  if ( x + r > canva.width || x - r < 0) {
    vx = -vx;
  }
  if ( y + r > canva.height || y - r < 0) {
    vy = -vy;
  }

  requestAnimationFrame(animation);
  
}

animation();