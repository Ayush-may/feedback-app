import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"

export default function ForgotPassword() {
  return (
    <div className="w-screen h-screen bg-stone-100 flex items-center justify-center" >
      <Card>
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          {/* <CardDescription>We’ll send a reset link to your email</CardDescription> */}
        </CardHeader>

        <CardContent className="w-[400px]" >
          <form>
            <div className="flex flex-col gap-6 ">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="link" className="w-full ms-auto">
            Sign up
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}