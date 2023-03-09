const MovieModel = require('./MovieModel');

module.exports.getMovie = async (req, res) =>{
    const myMovie = await MovieModel.find();
    res.send(myMovie)
}

module.exports.saveMovie = async (req, res) => {
    const { title } = req.body;
    MovieModel.create({ title })
    .then((data) => { console.log('Movie added')
    res.send(data)
})

}

module.exports.deleteMovie = async (req, res) => {
    const {_id} = req.body
    MovieModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted movie'))
}

module.exports.editMovie = async (req, res) =>{
    const {_id, title } = req.body;
    MovieModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited movie'))
}