import type { QueryFilter } from "mongoose"
import { Job, type JobType } from "../models/jobModel.js"
import type { CreateJob, UpdateJob } from "../validators/jobValidator.js"

export const jobAdd = async (job: CreateJob) => {
    const newJob = await Job.create(job)

    return newJob
}

export type JobQueryService = {
    location?: string | undefined
    permitSupported?: boolean | undefined
    title?: RegExp
}
export const getJobs = async (query: QueryFilter<JobType>, pageNumber: number, limitNumber: number, sortOrder?: 1 | -1) => {
    let queryData = Job.find(query)
    if(sortOrder !==  undefined){
       queryData = queryData.sort({ salary: sortOrder })
    }

    const data = await queryData.skip((pageNumber - 1) * limitNumber).limit(limitNumber)
    const total = await Job.countDocuments(query)

    return {
        data,
        total
    }
}

export const getJobByIdService = async (id: string) => {
    return await Job.findById(id)
}
export const updateJobByIdService = async (id: string, updateData: UpdateJob) => {
    return await Job.findByIdAndUpdate(id, updateData, { returnDocument: "after", runValidators: true })
}

export const deleteJobServices = async(id: string) => {
    return await Job.findByIdAndDelete(id)
}