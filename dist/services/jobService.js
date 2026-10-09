import { Job } from "../models/jobModel.js";
export const jobAdd = async (job) => {
    const newJob = await Job.create(job);
    return newJob;
};
export const getJobs = async (query, pageNumber, limitNumber, sortOrder) => {
    let queryData = Job.find(query);
    if (sortOrder !== undefined) {
        queryData = queryData.sort({ salary: sortOrder });
    }
    const data = await queryData.skip((pageNumber - 1) * limitNumber).limit(limitNumber);
    const total = await Job.countDocuments(query);
    return {
        data,
        total
    };
};
export const getJobByIdService = async (id) => {
    return await Job.findById(id);
};
export const updateJobByIdService = async (id, updateData) => {
    return await Job.findByIdAndUpdate(id, updateData, { returnDocument: "after", runValidators: true });
};
export const deleteJobServices = async (id) => {
    return await Job.findByIdAndDelete(id);
};
//# sourceMappingURL=jobService.js.map