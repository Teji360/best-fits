import { PrismaClient } from '@prisma/client'


//You need to do this for development node for nextjs hot reload
declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db //you nee to add types for globalThis


