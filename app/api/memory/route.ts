import { memories } from '@/data/memories';
import JsonQuery from 'json-query';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  
  const response = JsonQuery("memories[**][*tags~AllBuffSkillImpactUp]", {
    data: memories,
  }).value;

    return NextResponse.json({ response }, { status: 200 });
  }