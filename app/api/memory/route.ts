import { memories } from '@/data/memories';
import JsonQuery from 'json-query';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const tags =  request.nextUrl.searchParams.get("tags")
  const searchParams = tags?.split(",").map(tag => `[*tags~${tag}]`).join("")
  
  const response = JsonQuery(`memories[**]${searchParams}`, {
    data: memories,
  }).value;

    return NextResponse.json({ response }, { status: 200 });
  }