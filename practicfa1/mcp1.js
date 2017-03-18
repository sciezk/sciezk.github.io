var troncoForma = new THREE.CylinderGeometry(1,2,10,10,6,false);
var cubierta1Forma = new THREE. BoxGeometry(4,3,0.7);
var cubierta2Forma = new THREE.SphereGeometry(3, 32, 32);
var conForma = new THREE.CylinderGeometry(1,2,4,10,6,false);

troncoForma.translate(0,6,0);
conForma.translate(0,8,0);
cubierta1Forma.translate(0,1,0);
cubierta2Forma.translate(0,10,0);

var toncoMalla= new THREE.Mesh(troncoForma);
var conMalla= new THREE.Mesh(conForma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
torreForma.merge(conMalla.geometry, conMalla.matrix);
torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
torreForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);

var material= new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

torreMalla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
