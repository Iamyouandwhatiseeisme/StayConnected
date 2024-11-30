import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // External API URL to which we are sending the POST request
  const url = "https://stayconnected.pythonanywhere.com/api/auth/signup/";
  const data = await request.json();

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("External API Response Data:", responseData);

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 }
    );
  }
}
