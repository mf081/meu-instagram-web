"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imageUrl, description) {
        this._id = (0, uuid_1.v4)();
        this._userName = userName.toLowerCase();
        this._avatarUrl = avatarUrl;
        this._imageUrl = imageUrl;
        this._isLiked = false;
        this._description = description;
        this._createdAt = new Date();
        this._numberOfLikes = 0;
    }
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        // Incrementa o número de likes
        if (this._isLiked) {
            this._numberOfLikes += 1;
        }
        else {
            // Descrementa o número de likes
            this._numberOfLikes -= 1;
        }
    };
    return Post;
}());
var posts = [];
for (var index = 0; index < 15; index++) {
    var userName = faker_1.faker.person.firstName();
    var avatarUrl = faker_1.faker.image.avatarGitHub();
    var imageUrl = faker_1.faker.image.urlLoremFlickr();
    var description = faker_1.faker.lorem.paragraph();
    var post = new Post(userName, avatarUrl, imageUrl, description);
    posts.push(post);
}
posts[0].like();
posts[0].like();
console.log(posts[0]);
console.log("APP.TS INICIADO");
// Inicialização da variável isLiked
var isLiked = false;
function like() {
    // Seleciona o ícone de coração
    var icon = document.getElementById("heart-icon");
    // Se o ícone não existir, retorna
    if (!icon)
        return;
    // Atualiza as classes do ícone com base no estado de isLiked
    if (isLiked) {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
        icon.classList.remove("liked");
    }
    else {
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
toHTML();
{
    var div = document.createElement("div");
    div.innerHTML =
        "<div class=\"post-container\">\n        <div class=\"post-header\">\n            <div></div>\n            <span>".concat(this.userName, "</span>\n            </div>\n        </div>\n      </div>");
    document.body.appendChild(div);
}
