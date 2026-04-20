import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const body = await request.json()
  
  const { data, error } = await supabase
    .from('bookings')
    .insert([{
      name: body.name,
      email: body.email,
      phone: body.phone,
      package_name: body.package_name,
      travel_date: body.travel_date,
      travelers: body.travelers,
      message: body.message,
      total_amount: body.total_amount,
      status: 'pending'
    }])
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ success: true, data }, { status: 200 })
}

export async function GET() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ data }, { status: 200 })
}