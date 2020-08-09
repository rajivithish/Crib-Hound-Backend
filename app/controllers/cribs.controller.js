const db = require("../models");
const Cribs = db.cribs;
const Op = db.Sequelize.Op;

// Create and Save a new Cribs
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "name can not be empty!"
        });
        return;
    }

    // Create a Cribs
    const cribs = {
        name: req.body.name,
        img: req.body.img,
        location: req.body.location
    };

    // Save Cribs in the database
    Cribs.create(cribs)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Cribs."
            });
        });
};

// Retrieve all Cribs from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Cribs.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Cribs."
            });
        });
};

// Find a single Crib with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cribs.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Cribs with id=" + id
            });
        });
};

// Update a Crib by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Cribs.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                Cribs.findByPk(id)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error retrieving Cribs after updating with id=" + id
                        });
                    });
            } else {
                res.send({
                    message: `Cannot update Cribs with id=${id}. Maybe Cribs was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Cribs with id=" + id
            });
        });
};

// Delete a Crib with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Cribs.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cribs was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Cribs with id=${id}. Maybe Cribs was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Cribs with id=" + id
            });
        });
};

// Delete all Cribs from the database.
exports.deleteAll = (req, res) => {
    Cribsdestroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Cribs were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};