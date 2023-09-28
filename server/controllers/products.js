const { Op } = require("sequelize");
const { Products } = require("../models/index");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Products.findAll({})
            res.status(200).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    searchByName: async (req, res) => {
        try {
            const result = await Products.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            res.status(200).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (req, res) => {
        try {
            console.log(req.params.id);
            const result = await Products.findOne({ where: { id: req.params.id } })
            res.status(200).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    create: async (req, res) => {
        try {
            const result = await Products.create(req.body)
            res.status(201).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteOne: async (req, res) => {
        try {
            const result = await Products.destroy({ where: { id: req.params.del } })
            res.status(203).json(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (req, res) => {
        try {
            const result = await Products.update(req.body, { where: { id: req.params.upd } })
            res.status(201).send(result)
        } catch (error) {
            throw new Error(error)
        }
    }
}