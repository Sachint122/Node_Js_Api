import express from 'express'
import { AddContact, ById, deleteById, update } from '../Controlar/contactControl.js';

const router =express.Router();

// add contact
router.post('/add',AddContact)

// author by id
router.get('/:id',ById)

// update 
router.put('/update/:phone',update)


// delete by phone
router.delete('/delete/:id',deleteById)

export default router;