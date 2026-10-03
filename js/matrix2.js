
const state = {
  fps: 30,
  color: "#0f0", 
  charset: "わたしはほんとうにあなたはころす",
  size: 16
};


const gui = new dat.GUI();
gui.add(state, "fps").min(1).max(120).step(1);
gui.addColor(state, "color");
gui.add(state, "charset");
const sizeCtrl = gui.add(state, "size").min(8).max(50).step(1);


const canva = document.getElementById("canva");
const mtx = canva.getContext("2d");

let w, h, columns, drops;


const resize = () => {
  w = canva.width = window.innerWidth;
  h = canva.height = window.innerHeight;
  

  columns = Math.ceil(w / state.size);
  
  
  drops = new Array(columns).fill(0);
};


window.addEventListener("resize", resize);
sizeCtrl.onFinishChange(() => resize());
resize();


let lastTime = 0;

function draw(currentTime) {
  
  const interval = 1000 / state.fps;
  const delta = currentTime - lastTime;

  if (delta > interval) {
    lastTime = currentTime - (delta % interval);

    
    mtx.fillStyle = "rgba(0, 0, 0, 0.05)";
    mtx.fillRect(0, 0, w, h);

    
    mtx.fillStyle = state.color;
    mtx.font = `${state.size}px monospace`;

    
    for (let i = 0; i < drops.length; i++) {
      
      const text = state.charset.charAt(Math.floor(Math.random() * state.charset.length));
      
      const x = i * state.size;
      const y = drops[i] * state.size;

      mtx.fillText(text, x, y);

      
      if (y > h && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  requestAnimationFrame(draw);
}


requestAnimationFrame(draw);
