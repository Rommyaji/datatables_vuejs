const express = require("express")
const router = express.Router()
const suratModel = require("../models/surat")
const { Op } = require('sequelize')


router.post('/create', async (req, res) => {
    
    const { No, Tanggal, Surat, IsiSurat } = req.body

    try {

        const surat = await suratModel.create({
            No, Tanggal, Surat, IsiSurat
        })
        res.status(200).json({
            data: surat,
            metadata: "Berhasil ditambahkan!"
        })
    } catch(err) {
        numberCounter.decrement()
        console.error('error', err)
        res.status(403).json({
            error: err.message
        })
    }
})



router.get('/', async (req, res) => {
    const surat = await suratModel.findAll()

    res.status(200).json({
        data: surat
    })
})


router.get('/:id', async (req, res) => {

    const { id } = req.params

    try {
        const surat = await suratModel.findOne({
            where: {id: id}
        })
    
        res.status(200).json({
            data: surat
        })
    } catch(err) {
        res.status(403).json({
            error: err.message
        })
        console.log(err.message);
    }
})


router.get('/search/:surat', async (req, res) => {
    const { surat } = req.params

    try {
        const letter = await suratModel.findAll({
            where: {Surat: {[Op.like]: `%${surat}%` }}
        })
        res.status(200).json({
            data: letter
        })
    } catch(err) {
        res.status(500).json({
            err
        })
    }
})


// router.get('/', async (req, res) => {
//     const { page, limit } = req.query

//     console.log(limit)
//     // const limit = 4
//     try {
//         const count = await suratModel.count()
//         const totalPage = Math.ceil(count / limit)

//         const surat = await suratModel.findAll({
//             limit: limit,
//             offset: (page - 1) * limit
//         })
//         res.status(200).json({
//             totalPages: totalPage,
//             currentPage: page,
//             data: surat
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err.message
//         })
//     }
// })


router.put('/edit/:id', async (req, res) => {


    const { id } = req.params
    const { Tanggal, Surat, IsiSurat } = req.body

    try {
        const surat = await suratModel.update(
            { Tanggal, Surat, IsiSurat},
            {where : {id: id}}
        )
        res.status(200).json({
            data: surat,
            metadata: 'update success'
        })
    } catch (err) {
        res.status(403).json({
            error: err.message,
            data: `try again`
        })
    }
})


router.delete('/:id', async (req, res) => {

    const { id } = req.params
    
    try {
        const surat = await suratModel.destroy(
            {where : { id: id}}
        )
        res.status(200).json({
            data: `successfully delete ${id}`
        })
    } catch (err) {
        res.status(403).json({
            error : err.message
        })
    }
})



module.exports = router