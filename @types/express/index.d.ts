import { Express } from 'express';

declare global {
    namespace Express {
        interface Request {
            user_id: string;
            rol: string;
            session_id: string;
        }
    }
}