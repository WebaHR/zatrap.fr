export async function POST(request) {
  const { password } = await request.json();
  const valid = password === process.env.VIDEO_PASSWORD;
  return Response.json({ valid });
}
