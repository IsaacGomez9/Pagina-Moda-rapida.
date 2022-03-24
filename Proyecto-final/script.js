
 const altura = document.body.scrollHeight - window.innerHeight;
 const fondo = document.getElementById('fondo');
 
 window.onscroll = () => {
	 const anchoFondo = (window.pageYOffset / altura) * 700;
	 if(anchoFondo <= 100){
		 fondo.style.width = anchoFondo + '%';
	 }
 } 
 
window.addEventListener("DOMContentLoaded",()=>{
	let inyectarCont = document.getElementById('inyectar')

	inyectarCont.innerHTML =`<div class="row acerca-de justify-content-around">
	<article class="col-10 col-sm-5">
		<figure class="text-center">
			<img src="http://marrefashion.com/wp-content/uploads/2020/05/0-1-4-1050x591.jpg" alt="" width="250px">
			<figcaption>
				<p>
					<strong class="mb-2">lugares de compra segura</strong>
					<div class="w-100"></div>
					Esta iniciativa hace parte de la estrategia ‘Last but not LĒAST’ (lo último, pero no menos importante) de ventas outlet al detal y que entra a completar las acciones para impulsar los negocios. 
				</p>
			</figcaption>
		</figure>
	</article>
	
	<article class="col-10 col-sm-5">
		<figure class="text-center">
			<img src="https://cdn.shopify.com/s/files/1/0091/4476/2449/files/Componente_3_1.svg?v=371391244026765010" alt="" width="250px">
			<figcaption>
				<p>
					<strong class="mb-2">lugares de compra segura</strong>
					<div class="w-100"></div>
					La alianza de dos amigos de infancia, Catalina Huertas y Juan Baquero, dio vida a esta concept store que crea una conversación desde las diferentes disciplinas creativas: la moda, la cultura y el arte. 
				</p>
			</figcaption>
		</figure>
	</article>
	<article class="col-10 col-sm-5">
		<figure class="text-center">
			<img src="https://www.ccb.org.co/var/ccb/storage/images/ccb/fortalezca-su-empresa/conozca-el-abc-de-bazzarbog/2746552-1-esl-CO/Conozca-el-ABC-de-BazzarBog.png" alt="" width="250px">
			<figcaption>
				<p>
					<strong class="mb-2">lugares de compra segura</strong>
					<div class="w-100"></div>
					Llegamos para exhibir el trabajo de los emprendedores de Bogotá y la región, guiándolos en el mundo digital para que sigan creciendo, descubre productos y servicios diferentes, compra directamente a emprendedores locales, apoya su talento y la cultura del emprendimiento.
				</p>
			</figcaption>
		</figure>
	</article>
	</div>`
	
	let inyectarCont_1 = document.getElementById('inyectar_dd')
	
	inyectarCont_1.innerHTML = `<article class="col-12 text-center">
	<h2 class="subtitulo"><span>¿Cuál es el impacto de la moda rápida?</span></h2>
	<p class="titulo">Esta es la triste realidad</p>
	<p>El impacto ambiental es quizás la mayor consecuencia del fast fashion, el modelo de producción se fundamenta en la cantidad; para cumplir con sus objetivos se emplean materiales e insumos que pueden resultar altamente tóxicos. Estos terminan en los ríos y demás ecosistemas naturales, afectando la vida en todas sus formas. Además el  mal uso de  recursos como el agua es de cifras exorbitantes, únicamente  para cumplir con los requerimientos absurdos de la industria del fast fashion. </p>
	<br>
	</article>
	
	<div class="col-12">
	<div class="row justify-content-center">
		<article class="col-6 col-lg-3 py-1">
			<figure class="producto">
				<img src="http://partidosain.es/wp-content/uploads/2017/04/Maquila.jpg" class="img-fluid" alt="">
				<figcaption class="overlay">
					<p class="overlay-texto">58% de fibras del petroleo</p>
				</figcaption>
			</figure>
		</article>
	
		<article class="col-6 col-lg-3 py-1">
			<figure class="producto">
				<img src="https://www.contreebute.com/hs-fs/hubfs/photo-1512436991641-6745cdb1723f.jpeg?width=800&name=photo-1512436991641-6745cdb1723f.jpeg" class="img-fluid" alt="">
				<figcaption class="overlay">
					<p class="overlay-texto">10% de emisiones de CO2</p>
				</figcaption>
			</figure>
		</article>
	
		<article class="col-6 col-lg-3 py-1">
			<figure class="producto">
				<img src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/VKWLZDNNLZEVJLCCEKDWUJ7QMQ.jpg" class="img-fluid" alt="">
				<figcaption class="overlay">
					<p class="overlay-texto">2,700 litros de agua</p>
				</figcaption>
			</figure>
		</article>
	
		<article class="col-6 col-lg-3 py-1">
			<figure class="producto">
				<img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/11/fast-fashion-atacama-desert-2527027.jpg?itok=swkvPupQ" class="img-fluid" alt="">
				<figcaption class="overlay">
					<p class="overlay-texto">387,000 M de personas</p>
				</figcaption>
			</figure>
		</article>
	
	<a href="https://www.semana.com/agenda/articulo/fast-fashion-y-violencia-de-genero-una-relacion-estrecha/72348/" class="enlace">Informate: Mira la magnitud de esto</a>     
	
	</div>
	</div>`
})

let boton_1 = document.getElementById("boton_1");

let datosUsuario;

if (JSON.parse(localStorage.getItem("list")) == null || undefined) {
  datosUsuario = [];
} else {
  datosUsuario = JSON.parse(localStorage.getItem("list"));
}

boton_1.addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("correo").value;
  let datos = {
    nombre: nombre,
    apellido: apellido,
    correo: correo,
  };
  datosUsuario.push(datos);
  localStorage.setItem("list", JSON.stringify(datosUsuario));
  console.log(nombre, apellido, correo);
});



















