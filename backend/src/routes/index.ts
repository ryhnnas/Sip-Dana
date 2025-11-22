import { Router } from 'express';
import authRoutes from './authRoutes';
import kategoriRoutes from './kategoriRoutes';
import transaksiRoutes from './transaksiRoutes';
import rekomendasiRoutes from './rekomendasiRoutes'; 
import userRoutes from './userRoutes';
import laporanRoutes from './laporanRoutes'; 

const router = Router();

router.use('/auth', authRoutes);
router.use('/kategori', kategoriRoutes);
router.use('/transaksi', transaksiRoutes);
router.use('/rekomendasi', rekomendasiRoutes); 
router.use('/users', userRoutes);
router.use('/laporan', laporanRoutes); 

export default router;