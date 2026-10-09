import { deleteJobServices, getJobByIdService, getJobs, jobAdd, updateJobByIdService } from "../services/jobService.js";
import mongoose, { isObjectIdOrHexString } from "mongoose";
import { createJobSchema, getJobByIdSchema, jobQuerySchema, updateJobSchema } from "../validators/jobValidator.js";
const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
export const getJobList = async (req, res) => {
    const result = jobQuerySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(400).send({
            message: "Invalid query parameters",
        });
    }
    const { sort, permitSupported, page, limit, location, title } = result.data;
    const filter = {
        ...(location && {
            location: location
        }),
        ...(permitSupported !== undefined && {
            permitSupported: permitSupported
        }),
        ...(title && {
            title: new RegExp(escapeRegex(title.trim()), "i")
        }),
    };
    let sortOrder = undefined;
    if (sort === 'salary_asc') {
        sortOrder = 1;
    }
    else if (sort === 'salary_desc') {
        sortOrder = -1;
    }
    const results = await getJobs(filter, page, limit, sortOrder);
    res.status(200).send({
        message: 'success',
        data: results.data,
        total: results.total
    });
};
export const createJob = async (req, res) => {
    const result = createJobSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).send({
            message: "Invalid job data"
        });
    }
    const newJob = await jobAdd(result.data);
    res.status(201).send({
        message: "Job created",
        data: newJob
    });
};
export const updateJob = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isObjectIdOrHexString(id)) {
        return res.status(400).send({
            message: "Invalid job id"
        });
    }
    const result = updateJobSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).send({
            message: "Invalid job data"
        });
    }
    const updatedJob = await updateJobByIdService(id, result.data);
    if (!updatedJob) {
        return res.status(404).send({
            message: "Job not found"
        });
    }
    return res.status(200).send({
        message: 'success',
        data: updatedJob
    });
};
export const deleteJob = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isObjectIdOrHexString(id)) {
        return res.status(400).send({
            message: "Invalid job id"
        });
    }
    const deleteid = await deleteJobServices(id);
    if (!deleteid) {
        return res.status(404).send({
            message: "Job not found"
        });
    }
    res.status(200).send({
        message: 'success',
        data: deleteid
    });
};
export const getJobById = async (req, res) => {
    const result = getJobByIdSchema.safeParse(req.params);
    if (!result.success) {
        return res.status(400).send({
            message: 'Invalid params'
        });
    }
    const { id } = result.data;
    if (!mongoose.isObjectIdOrHexString(id)) {
        return res.status(400).send({
            message: 'Invalid id'
        });
    }
    const job = await getJobByIdService(id);
    if (!job) {
        return res.status(404).send({
            message: 'Job not found'
        });
    }
    return res.status(200).send({
        message: 'success',
        data: job
    });
};
//# sourceMappingURL=jobController.js.map