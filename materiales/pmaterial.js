function setup(){
var forma= new THREE.BoxGeometry(100,100,300);
var material = new THREE.MeshDeptMaterial();
malla= new THREE.Mesh(forma, material);

escena= new THREE.scene();
escena.add(malla);

camara= new THREE.Pespectivecamera();
camara.position.z=250;

renderer =new THREE.WebGLRenderer();
renderer.setsize(Window.innerHeight*.95,window.innerHeight*.95);
document.body.appendchild(renderer.domElement);
}
function loop(){

 requestAnimationFrame(loop);
 
 malla.rotation.x+=0.01;
 mallla.rotation.y +=0.01;
 
 renderer.render(escena,camara);
}

var camara, escena, renderer, malla;
setup();
loop();



