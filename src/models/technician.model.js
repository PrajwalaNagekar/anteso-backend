// import mongoose from 'mongoose';
// import User from './user.model.js';

// const { Schema } = mongoose;

// const technicianSchema = new Schema({
//     status: {
//         type: String,
//         enum: ['active', 'inactive'],
//         default: 'active',
//     },
//     technicianType: {
//         type: String,
//         enum: ['office-staff', 'engineer'],
//         required: true,
//     },
//     tools: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Tool',
//     }],
// });

// const Technician = User.discriminator('Technician', technicianSchema);

// export default Technician;


import mongoose from 'mongoose';
import User from './user.model.js';

const { Schema } = mongoose;

// Define a subdocument schema for tools
const toolSubSchema = new Schema({
    toolName: {
        type: String,
        // required: true,
        // trim: true,
    },
   
    serialNumber: {
        type: String,
        // required: true,
        // trim: true,
    },
    issueDate: {
        type: Date,
        // required: false,
    }
}, { _id: false }); // Prevents automatic _id generation for subdocuments

// Main employee schema extending User
const employeeSchema = new Schema({
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    technicianType: {
        type: String,
        enum: ['office-staff', 'engineer'],
        required: true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfJoining: {
        type: Date,
        required: true,
    },
    workingDays: {
        type: Number,
        required: true,
        min: 0,
    },
    tools: [toolSubSchema], // Embedded tool subdocuments
}, {
    timestamps: true,
});

const Employee = User.discriminator('Employee', employeeSchema);

export default Employee;
