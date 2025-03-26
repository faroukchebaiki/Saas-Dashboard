"use client"

import type React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { ModeToggle } from "./themeToggel"

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const fillCredentials = (role: string) => {
    if (role === "admin") {
      setEmail("admin@example.com")
      setPassword("admin123")
    } else if (role === "modirator") {
      setEmail("modirator@example.com")
      setPassword("super123")
    } else if (role === "viewer") {
      setEmail("viewer@example.com")
      setPassword("viewer123")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      <Link
        href="/"
        className=" p-2 rounded-full hover:bg-gray-100 hover:text-black transition-colors w-9 h-9"
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-2 mb-2">
                For testing purposes, select one of these roles:
              </p>
              <div className="grid grid-cols-3 gap-2">
                <Button type="button" variant="outline" onClick={() => fillCredentials("admin")}>
                  Admin
                </Button>
                <Button type="button" variant="outline" onClick={() => fillCredentials("modirator")}>
                  modirator
                </Button>
                <Button type="button" variant="outline" onClick={() => fillCredentials("viewer")}>
                  Viewer
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
              <ModeToggle />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}