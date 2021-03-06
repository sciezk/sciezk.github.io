var torreForma = new THREE.CylinderBufferGeometry(5, 5, 20, 32);
var esferaForma = new THREE.SphereGeometry(.65);
esferaForma.translate(0,1,0);

var torreMalla = new THREE.Mesh(torreForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

var hongo = new THREE.Geometry();
hongoForma.merge(torreMalla.geometry, troncoMalla.matrix);
hongoForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var hongoMalla = new THREE.Mesh(hongoForma, material);
var escena = new THREE.Scene();
escena.add(hongoMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
