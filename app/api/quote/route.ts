import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // 1. Log to console
    console.log('Quote request received:', {
      route: `${data.originCity}, ${data.originCountry} → ${data.destinationCity}, ${data.destinationCountry}`,
      cargo: `${data.cargoType} — ${data.weight} kg`,
      contact: `${data.name} (${data.phone} / ${data.email})`,
      timestamp: new Date().toISOString(),
    })

    // 2. Send to Google Sheet
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz6tg1hXT86MKafiVTbLRlriFohjqnsJU_mkxznfuh_g1Ib1UqITZobDKD7ljMUNj3N6w/exec'; 

    // 3. Send to Formspree (Email Alert)
    const FORMSPREE_URL = 'https://formspree.io/f/mzdavqon';

    const payload = {
      Form: 'Quote Request',
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company || 'N/A',
      Origin: `${data.originCity}, ${data.originCountry}`,
      Destination: `${data.destinationCity}, ${data.destinationCountry}`,
      Cargo: data.cargoType,
      Weight: `${data.weight} kg`,
      Volume: data.volume ? `${data.volume} m³` : 'N/A',
      Requirements: data.specialRequirements || 'None',
      Preferred_Contact: data.contactMethod
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
      { success: true, message: 'Quote request received. We will contact you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote. Please call us directly.' },
      { status: 500 }
    )
  }
}
