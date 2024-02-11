import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
 

// export default const getMemory = async () => {
//     return await prisma.memoryInformation.findMany();
// };


export async function GET(request: Request) {
    const response = await prisma.memoryInformation.findMany();
    return NextResponse.json({ response }, { status: 200 });

    // try {
    //   const result =
    //     await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    //   return NextResponse.json({ result }, { status: 200 });
    // } catch (error) {
    //   return NextResponse.json({ error }, { status: 500 });
    // }
  }