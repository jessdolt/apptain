import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"
export default withAuth(
  async function middleware(req) {
    console.log("test")
    console.log(req)
  },
  {
    pages: {
      signIn: "/", // Your sign-in page
    },
  }
)

export const config = {
  matcher: ["/"],
}
