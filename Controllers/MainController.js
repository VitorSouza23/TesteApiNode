exports.isAlive = (req, res) => res.status(200).send("Is alive!");

exports.receiveData = (req, res) => {
    console.log(req.body);
    res.status(200).send("success");
};