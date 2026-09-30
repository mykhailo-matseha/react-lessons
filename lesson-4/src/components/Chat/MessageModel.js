export default class MessageModel {
  constructor({ id, text, likes = 0, dislikes = 0 }) {
    this.id = id;
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
  }
  addLike() {
    return this.getUpdated({ likes: this.likes + 1 });
  }
  addDislike() {
    return this.getUpdated({ dislikes: this.dislikes + 1 });
  }
  getUpdated(updated) {
    return new MessageModel({ ...this, ...updated });
  }
}
