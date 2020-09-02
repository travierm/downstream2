
class YouTubeSearchController {
    async postSearch(req, res) {

        const query = req.body.query

        return res.status(200).json({
            results: []
        })
    }
}

export default new YouTubeSearchController()