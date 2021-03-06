var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 2,7,0) );
forma.vertices.push( new THREE.Vector3(7,2,0) );
forma.vertices.push( new THREE.Vector3( 12,7,0]) );
forma.vertices.push( new THREE.Vector3(12,17,0) );
forma.vertices.push( new THREE.Vector3(7,12,0) );
forma.vertices.push( new THREE.Vector3(2,17,0) );
forma.vertices.push( new THREE.Vector3(2,7,0) );


forma.faces.push(new THREE.Face4(0, 1, 2, 3));

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render ( escena, camara );
