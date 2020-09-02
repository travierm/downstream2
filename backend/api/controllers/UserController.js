
class UserController {
    async test(req, res) {
        return res.status(200).json({
            name: 'travier'
        })
    }
}

export default new UserController()