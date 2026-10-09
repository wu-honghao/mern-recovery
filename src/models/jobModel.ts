import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    permitSupported: {
        type: Boolean,
        default: false
    },
    skills: {
       type: [String],
       default: []
    }
})

export const Job = mongoose.model('Job', jobSchema)
export type JobType =
  mongoose.InferSchemaType<typeof jobSchema>