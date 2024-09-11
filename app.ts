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

    // Incrementa ou decrementa o número de likes
    if (this._isLiked) {
      this._numberOfLikes += 1;
    } else {
      this._numberOfLikes -= 1;
    }

    // Atualiza a visualização do número de likes
    this.updateLikesDisplay();
  }

  private updateLikesDisplay() {
    const icon = document.getElementById(`heart-icon-${this._id}`);
    if (icon) {
      icon.classList.toggle("bi-heart-fill", this._isLiked);
      icon.classList.toggle("bi-heart", !this._isLiked);
      icon.classList.toggle("liked", this._isLiked);
    }
  }

  toHTML() {
    const postContainer = document.createElement("div");
    postContainer.className = "post-container";

    postContainer.innerHTML = `
      <div class="post-header">
        <div>
          <img title="Avatar image" src="${this._avatarUrl}">
        </div>
        <span>${this._userName}</span>
      </div>
      <div class="post-image">
        <img title="Post Image" src="${this._imageUrl}">
      </div>
      <div class="post-icons">
        <div id="btn-like-${this._id}">
          <i id="heart-icon-${this._id}" class="fa ${this._isLiked ? 'fa-heart' : 'fa-heart-o'}"></i>
        </div>
        <div>
          <i class="fa fa-comment-o"></i>
        </div>
        <div>
          <i class="fa fa-paper-plane-o"></i>
        </div>            
        <div>
          <i class="fa fa-bookmark-o"></i>
        </div>
      </div>
    `;

    const btnLike = postContainer.querySelector(`#btn-like-${this._id}`);
    btnLike?.addEventListener("click", () => this.like());

    document.body.appendChild(postContainer);
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

console.log("APP.TS INICIADO");
