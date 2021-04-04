exports.isAlive = (req, res) => res.status(200).send("Is alive!");

exports.receiveData = (req, res) => {
    res.status(200).send(req.body);
};