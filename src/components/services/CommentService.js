export class CommentService {
    url = 'https://jsonplaceholder.typicode.com/posts';
    async getAllComments(){
        return await fetch(this.url)
            .then(value => value.json())

    }
}