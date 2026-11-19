const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now - entry.start > WINDOW_MS) {
    attempts.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json(
      { valid: false, error: "Trop de tentatives, réessayez plus tard." },
      { status: 429 }
    );
  }

  const { password } = await request.json();
  const valid = password === process.env.VIDEO_PASSWORD;
  return Response.json({ valid });
}
