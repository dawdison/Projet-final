

  const testimonials = [
    {
      name: "Marie Dupuis",
      position: "Directrice des Opérations, Entreprise XYZ",
      photo:
        "https://randomuser.me/api/portraits/women/92.jpg",
      text:
        "Grâce à SwiftLine Logistics, nous avons réduit nos délais de livraison de 30 %. Leur équipe est réactive et professionnelle. Je les recommande sans hésitation !"
    },
    {
      name: "Tidjiane Ndiaye",
      position: " PDG, Société ABC",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
      text:
        "Leur plateforme de suivi en temps réel nous a permis de mieux gérer notre chaîne d’approvisionnement. Un vrai partenaire pour notre croissance internationale. "
    },
    {
      name: "Sophie Diop",
      position: "Responsable Logistique, Compagnie DEF",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
      text:
        "En pleine expansion, nous avions besoin d’un partenaire flexible. SwiftLine Logistics a su s’adapter à nos besoins changeants."
    },
    {
      name: "Amadou Fofana",
      position: "Responsable Logistique, KMN EcoStyle",
      photo: "https://randomuser.me/api/portraits/men/59.jpg",
      text:
        "Leur plateforme de suivi en temps réel est un game-changer. Nous savons toujours où en sont nos envois, ce qui nous permet de mieux planifier nos opérations. "
    },
    {
      name: "Alexandre Tremblay",
      position: " Directeur Général, OPQ Solutions",
      photo: "https://randomuser.me/api/portraits/men/21.jpg",
      text:
        "Pour nos expéditions internationales, SwiftLine Logistics est notre partenaire de confiance. Leur expertise douanière nous fait gagner un temps précieux. "
    }
  ];
  
  const testimonialsContainer = document.querySelector(".testimonials-container");
  const testimonial = document.querySelector(".testimonial");
  const userImage = document.querySelector(".user-image");
  const username = document.querySelector(".username");
  const role = document.querySelector(".role");
  
  let idx = 1;
  
  function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerText = text;
    userImage.src = photo;
    username.innerText = name;
    role.innerText = position;
  
    idx++;
    if (idx > testimonials.length - 1) {
      idx = 0;
    }
  }
  
  setInterval(updateTestimonial, 10000);

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
  function formbtn() {
    var x = document.getElementById("formulaire");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
