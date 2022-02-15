const express = require('express');
const router = express.Router();

//Defining routes
router.get('/', (req,res) => {
    res.status(200).json({success: true, msg: 'show all bootcamp'});
});
router.get('/:id', (req,res) => {
    res.status(200).json({success: true, msg: `show bootcamp ${req.params.id}`});
});
router.post('/', (req,res) => {
    res.status(200).json({success: true, msg: 'created bootcamp'});
});
router.put('/:id', (req,res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
});
router.delete('/:id', (req,res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
});

module.exports = router;