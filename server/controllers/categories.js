const {Categories} = require("../models/index");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Categories.findAll({})
            res.status(200).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (req, res) => {
        try {
            console.log(req.params.id);
            const result = await Categories.findOne({ where: { id: req.params.id } })
            res.status(200).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    create: async (req, res) => {
        try {
            const result = await Categories.create(req.body)
            res.status(201).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOne: async (req, res) => {
        try {
            const result = await Categories.destroy({ where: { id: req.params.del } })
            res.status(203).json(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (req, res) => {
        try {
            const result = await Categories.update(req.body, { where: { id: req.params.upd } })
            res.status(201).send(result)
        } catch (error) {
            throw new Error(error)
        }
    }
}