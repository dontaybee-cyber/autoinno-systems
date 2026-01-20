// path: app/api/lead/route.js
import { NextResponse } from "next/server";

/**
 * AUTOINNO SYSTEMS - Lead Capture Engine
 * Primary Integration: Google Sheets Webhook
 */
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxLkG6Yq__DwePdF4Qh0IMLvaBdjxPFlGE9ma8WloQpntCBEV-u7SAiM3iJ1JkJGnZ45g/exec";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, businessName, website, instagram, event } = body;

    // 1. Validation Logic
    if (!email || !website) {
      return new NextResponse("Missing required fields: Email and Website", { status: 400 });
    }

    // 2. Transmit to Google Sheets
    // We use a background fetch to ensure the user isn't slowed down by the logging process
    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors", // Essential for Google Apps Script cross-origin requests
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          timestamp: new Date().toISOString(),
          leadSource: "AutoInno_Audit_Funnel"
        }),
      });
    } catch (sheetError) {
      console.error("[AutoInno Warning]: Google Sheets transmission failed", sheetError);
      // We don't fail the whole request here so the customer still gets their audit
    }

    // 3. Generate leadId for the Delivery Page
    const leadId = `lead_${Math.random().toString(36).substring(2, 9)}`;

    return NextResponse.json({ 
      success: true, 
      leadId: leadId 
    });

  } catch (error) {
    console.error("[AutoInno Error]:", error);
    return new NextResponse("Internal Infrastructure Error", { status: 500 });
  }
}