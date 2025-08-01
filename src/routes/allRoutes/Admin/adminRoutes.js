import express from 'express'
import { Router } from 'express';
import AuthRouter from '../../allRoutes/authRouter.router.js'
import ToolRoutes from '../Admin/tools.router.js'
import LeaveRoutes from '../Admin/leave.router.js'
import EnquiryRoutes from '../Admin/enquiry.router.js'
import ClientRoutes from '../Admin/clientRoutes.js'
import HospitalRoutes from '../Admin/hospital.router.js'
import InstituteRoutes from '../Admin/institute.router.js'
import RSORoutes from '../Admin/rso.router.js'
import CourierRoutes from '../Admin/courier.router.js'
import TechnicianRoutes from '../Admin/technicianRoutes.js'
import QuotationRoutes from '../Admin/quotation.router.js'
import PDFRouter from '../Admin/pdf.router.js'
import { authenticate } from '../../../middlewares/authMiddleware.js'

// https://anteso-backend.onrender.com
import { verifyAccessToken } from '../../../middlewares/adminAuthMiddleware.js';
import { authorizeRoles } from '../../../middlewares/authorizeRoles.js';
const router = Router();
router.use('/auth', AuthRouter)
router.use(authenticate, authorizeRoles("admin", "Customer", "Technician"))

router.use('/clients', ClientRoutes)
router.use('/hospital', HospitalRoutes)
router.use('/rso', RSORoutes)
router.use('/institute', InstituteRoutes)
router.get('/pdf', PDFRouter)

router.use('/tools', ToolRoutes)
router.use('/leaves', LeaveRoutes)
router.use('/enquiry', EnquiryRoutes)
router.use('/technician', TechnicianRoutes)
router.use('/quotation', QuotationRoutes)
router.use('/courier', CourierRoutes)


export default router