const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// seleziono elemento di output
const cardMember = document.querySelector('.team-member');

// creo una variabile per le card
let items = "";

// output dell'array teamMembers
for (let i = 0; i < teamMembers.length; i++) {
  let membroIesimo = teamMembers[i];

  // estraggo i valori delle proprietà dell'oggetto
  const { name, role, email, img } = membroIesimo;

  // console.log(name, role, email, img);

  // riempio variabile i dati dell'oggetto
  items += `
            <div class="contenitore-2">
               <div class="immagine">
                  <img src="${img}" class="img-fluid rounded-start" alt="...">
                </div>
                
                <div class="descrizione">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
                    <p class="card-text"><small class="text-muted">${email}</small></p>
                </div>
                
            </div>`
}

// output
cardMember.innerHTML = items;






