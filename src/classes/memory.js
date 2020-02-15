export class Memory {
  constructor({
    id = 0,
    title = '',
    content = '',
    createdAt = '',
    updatedAt = '',
    userId = 0,
    categoryID = 0,
    position = {
      coordinates: [0.0, 0.0],
      type: '',
    },
  }) {
    this.id = id
    this.title = title
    this.content = content
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.userId = userId
    this.categoryID = categoryID
    this.position = position
  }
}
