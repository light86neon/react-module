export default class UserService{
    url='https://jsonplaceholder.typicode.com/users'
    async getUser(id) {
        return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(value => value.json())
    }
}