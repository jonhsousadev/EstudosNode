const fs = require('fs')
const path = require('path')


const filePath = path.join(__dirname, 'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath) ?
        fs.readFile(filePath) : {}

    try {
        return JSON.parse(data)
    } catch (error) {
        return {}
    }
}

const saveUser = (user) => fs.writeFileSync(filePath, JSON.stringify(user), null, '\t')

const userRoute = (app) => {
    app.route('/users/:id')
        .get((req, res) => {
            const users = getUsers()
            res.send({ users })
        })
}


module.exports = userRoute