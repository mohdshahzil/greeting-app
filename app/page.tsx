"use client" // Enables client-side rendering in Next.js

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { submitName } from "./actions" // Importing server action to handle name submission

export default function Home() {
  // State to store the input name
  const [name, setName] = useState<string>("")
  // State to store the generated greeting message
  const [greeting, setGreeting] = useState<string>("")
  // State to handle submission loading state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return // Prevent empty submissions

    setIsSubmitting(true) // Show loading state
    try {
      const response = await submitName(name) // Call server action to get the greeting
      setGreeting(response) // Set the received greeting
    } finally {
      setIsSubmitting(false) // Reset loading state
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Card for name input and greeting generation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Greeting Generator</CardTitle>
            <CardDescription>Enter your name to receive a personalized greeting</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Generate Greeting"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Display generated greeting if available */}
        {greeting && (
          <Card className="bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-xl font-medium text-center">{greeting}</p>
            </CardContent>
          </Card>
        )}

        {/* Explanation Section */}
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>An explanation of the technologies used in this application</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {/* Accordion Item - Server Actions Explanation */}
              <AccordionItem value="server-actions">
                <AccordionTrigger>Server Actions</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Server Actions are a Next.js feature that allows you to define asynchronous functions that run on
                    the server. In this app, we use a server action to process the name input and return a greeting.
                    The action is defined in <code className="text-xs bg-muted p-1 rounded">app/actions.ts</code> and
                    imported into the client component. When you submit the form, the client component calls this server
                    action, which processes the data on the server and returns a response.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item - Shadcn UI Components Explanation */}
              <AccordionItem value="shadcn-ui">
                <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    This application uses several components from the Shadcn UI library:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        <strong>Input:</strong> For the name input field
                      </li>
                      <li>
                        <strong>Button:</strong> For the submit button
                      </li>
                      <li>
                        <strong>Card:</strong> For containing the form and explanation sections
                      </li>
                      <li>
                        <strong>Accordion:</strong> For the collapsible explanation sections
                      </li>
                    </ul>
                    Shadcn UI provides accessible, customizable components built on Radix UI primitives and styled with
                    Tailwind CSS.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item - Next.js 15.1 Features Explanation */}
              <AccordionItem value="nextjs-features">
                <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    This application leverages several key features from Next.js 15.1:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        <strong>Server Actions:</strong> For processing form submissions on the server
                      </li>
                      <li>
                        <strong>App Router:</strong> For simplified routing and layout management
                      </li>
                      <li>
                        <strong>Client and Server Components:</strong> The page is a client component to manage state,
                        while the server action runs on the server
                      </li>
                      <li>
                        <strong>TypeScript Integration:</strong> For type safety throughout the application
                      </li>
                      <li>
                        <strong>Enhanced Forms:</strong> Using Next.js form handling capabilities
                      </li>
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}