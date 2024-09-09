import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string;
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _isLiked: boolean;
  private _description: string;
  private _createdAt: Date;
  private _numberOfLikes: number;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._id = randomUUID();
    this._userName = userName.toLowerCase();
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._isLiked = false;
    this._description = description;
    this._createdAt = new Date();
    this._numberOfLikes = 0;
  }

  like() {
    this._isLiked = !this._isLiked;

    // Incrementa o número de likes
    if (this._isLiked) {
      this._numberOfLikes += 1;
    } else {
      // Descrementa o número de likes
      this._numberOfLikes -= 1;
    }
  }
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const userName = faker.person.firstName();
  const avatarUrl = faker.image.avatarGitHub();
  const imageUrl = faker.image.urlLoremFlickr();
  const description = faker.lorem.paragraph();

  const post = new Post(userName, avatarUrl, imageUrl, description);

  posts.push(post);
}

posts[0].like();
posts[0].like();
console.log(posts[0]);

console.log("APP.TS INICIADO")


// Inicialização da variável isLiked
let isLiked = false;

function like() {

    // Seleciona o ícone de coração
    const icon = document.getElementById("heart-icon");

    // Se o ícone não existir, retorna
    if (!icon) return;

    // Atualiza as classes do ícone com base no estado de isLiked
    if (isLiked) {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
        icon.classList.remove("liked");
    } else {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
        icon.classList.add("liked");
    }

    isLiked = !isLiked;
}


// function exibirTextoNaTela(id, texto) {
//     let campo = document.getElementById(id);
//     campo.innerHTML = texto;
// }
// function exibirMensagemInicial() {
//     exibirTextoNaTela("descricaoSpan'", "Lorem ipsum dolor sit amet consectetur adipisicing elit.!");
// }

toHTML(){
    const div = document.createElement("div");
    div.innerHTML =
     `<div class="post-container">
        <div class="post-header">
            <div></div>
            <span>${this.userName}</span>
            </div>
        </div>
      </div>`;
    document.body.appendChild(div);
    
}

