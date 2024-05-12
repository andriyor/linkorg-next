import { auth } from "auth"

export const GET = auth(async (req) => {
  if (req.auth) {
    console.log('Protected', req.auth.user);
    return Response.json({ data: "Protected data" })
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any // TODO: Fix `auth()` return type
