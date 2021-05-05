export type task = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string // author_id
}

export type createTaskInput = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}