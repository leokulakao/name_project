const NameRu = require('../models/nameRuModel');
const errorHandler = require('../utils/errorHandler');

module.exports.getAllNames = async (req, res) => {
    try {
        console.log(req.query);
        const keyword = req.query ? req.query.keyword !== '' ? req.query.keyword : '' : '';
        const offset = req.query ? req.query.offset !== '' ? ++req.query.offset - 1 : null : null;
        const limit = req.query ? req.query.limit !== '' ? ++req.query.limit - 1 : null : null;
        const popilation = req.query ? req.query.popilation !== '' ? req.query.popilation : '' : '';
        console.log('Limit', limit);
        console.log('Offset', offset);
        const names = await NameRu.find({name: {$regex: keyword || '', $options: 'si'}}, (err) => {
            if (err) {
                console.log(err);
            }
        }).skip(offset).limit(limit);
        res.status(200).json({
            status: 200,
            message: 'Finded all items',
            data: names,
        });
        
    } catch (e) {
        errorHandler(req, e);
    }
};

module.exports.addName = async (req, res) => {
    try {
        const nameCandidate = await NameRu.findOne({
            name: req.body.name
        })

        if (nameCandidate) {
            res.status(409).json({
                status: 409,
                message: 'Conflict',
                data: {},
            });
        } else {
            const newName = await new NameRu({
                oldId: req.body.oldId,
                name: req.body.name,
                sex: req.body.sex,
                quantity: req.body.quantity,
                quantityDate: req.body.quantityDate
            }).save();

            console.log(newName);

            res.status(201).json({
                status: 201,
                message: 'Created',
                data: newName,
            });
        }
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.deleteName = async (req, res) => {
    try {
        await NameRu.remove({_id: req.body.id});
        res.status(200).json({
            status: 200,
            message: 'Deleted',
            data: req.body.id
        })
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.getNamesByLetter = (req, res) => {
    res.status(200).json({
        names: 'get names by letter',
    });
};
