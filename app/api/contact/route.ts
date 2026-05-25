import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // 1. Log to console
    console.log('New Contact Message:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // 2. Send to Google Sheet
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz6tg1hXT86MKafiVTbLRlriFohjqnsJU_mkxznfuh_g1Ib1UqITZobDKD7ljMUNj3N6w/exec'; 
    
    // 3. Send to Formspree (Email Alert)
    const FORMSPREE_URL = 'https://formspree.io/f/mbdwvaqd';

    const payload = {
      Form: 'Contact Form',
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Message: data.message
    }

    // Run both in parallel
    await Promise.allSettled([
      GOOGLE_SHEET_URL ? fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }) : Promise.resolve(),
      
      fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
    ])

    return NextResponse.json(
      { success: true, message: 'Message received. We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please call us directly.' },
      { status: 500 }
    )
  }
}
