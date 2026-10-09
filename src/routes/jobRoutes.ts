import { Router } from "express";
import { getJobList, createJob, updateJob, deleteJob, getJobById } from "../controller/jobController.js";

const router = Router()

router.get('/', getJobList)
router.post('/', createJob)
router.patch('/:id', updateJob)
router.delete('/:id', deleteJob)
router.get('/:id', getJobById)

export default router