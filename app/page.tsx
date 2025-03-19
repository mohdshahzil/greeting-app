"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { submitName } from "./actions"

export default function Home() {
  const [name, setName] = useState<string>("")
  const [greeting, setGreeting] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    setIsSubmitting(true)
    try {
      const response = await submitName(name)
      setGreeting(response)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-2xl mx-auto space-y-8">
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

        {greeting && (
          <Card className="bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-xl font-medium text-center">{greeting}</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>An explanation of the technologies used in this application</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="server-actions">
                <AccordionTrigger>Server Actions</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Server Actions are a Next.js feature that allows you to define asynchronous functions that run on
                      the server. In this app, we use a server action to process the name input and return a greeting.
                    </p>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">Server Action Implementation:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`'use server'

export async function submitName(name: string): Promise<string> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Process the name (in a real app, you might do more complex operations here)
  const sanitizedName = name.trim()

  // Return the greeting
  return \`Hello \${sanitizedName}!\`
}`}
                      </pre>
                    </div>

                    <p>
                      The <code className="text-xs bg-muted p-1 rounded">'use server'</code> directive at the top of the
                      file marks all exports as server functions. These functions can be imported directly into client
                      components and called like regular async functions.
                    </p>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">Client-side Usage:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`// Import the server action
import { submitName } from "./actions"

// Use in a client component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!name.trim()) return

  setIsSubmitting(true)
  try {
    const response = await submitName(name)
    setGreeting(response)
  } finally {
    setIsSubmitting(false)
  }
}`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shadcn-ui">
                <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      This application uses several components from the Shadcn UI library, which provides accessible,
                      customizable components built on Radix UI primitives and styled with Tailwind CSS.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Input Component:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`import { Input } from "@/components/ui/input"

<Input
  id="name"
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  disabled={isSubmitting}
/>`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Button Component:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`import { Button } from "@/components/ui/button"

<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Generate Greeting"}
</Button>`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Card Component:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Accordion Component:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section Title</AccordionTrigger>
    <AccordionContent>
      {/* Content */}
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="nextjs-features">
                <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>This application leverages several key features from Next.js 15.1:</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Server Actions:</h4>
                        <p className="mb-2">
                          Next.js 15.1 enhances server actions with improved performance and reliability.
                        </p>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`// app/actions.ts
'use server'

export async function submitName(name: string): Promise<string> {
  // Server-side code here
}`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">App Router Structure:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`app/
├── actions.ts      # Server actions
├── globals.css     # Global styles
├── layout.tsx      # Root layout
└── page.tsx        # Home page component`}
                        </pre>
                        <p className="mt-2">
                          The App Router uses a file-based routing system where folders define routes and special files
                          like page.tsx define UI.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Client and Server Components:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`// Client Component
'use client'
import { useState } from 'react'

// Server Component (default)
// No 'use client' directive needed`}
                        </pre>
                        <p className="mt-2">
                          Next.js 15.1 improves the integration between client and server components, allowing for more
                          efficient rendering and data fetching.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Enhanced Forms:</h4>
                        <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                          {`// Client-side form handling with server action
<form onSubmit={handleSubmit} className="space-y-4">
  {/* Form fields */}
  <Button type="submit">Submit</Button>
</form>

// handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const response = await submitName(name) // Server action
  setGreeting(response)
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="state-management">
                <AccordionTrigger>State Management</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      This application uses React's useState hook for managing component state. Here's how the state is
                      implemented:
                    </p>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">State Initialization:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`import { useState } from "react"

// State for the name input
const [name, setName] = useState<string>("")

// State for the greeting message
const [greeting, setGreeting] = useState<string>("")

// State for tracking submission status
const [isSubmitting, setIsSubmitting] = useState<boolean>(false)`}
                      </pre>
                    </div>

                    <p>The application uses three state variables:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>name:</strong> Stores the current value of the input field
                      </li>
                      <li>
                        <strong>greeting:</strong> Stores the response from the server action
                      </li>
                      <li>
                        <strong>isSubmitting:</strong> Tracks whether a submission is in progress to show loading states
                      </li>
                    </ul>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">State Updates:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`// Update name state when input changes
<Input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// Update greeting and isSubmitting states during form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!name.trim()) return

  setIsSubmitting(true)
  try {
    const response = await submitName(name)
    setGreeting(response)
  } finally {
    setIsSubmitting(false)
  }
}`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="responsive-design">
                <AccordionTrigger>Responsive Design</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      This application uses Tailwind CSS for responsive design. Here are some key responsive design
                      patterns used:
                    </p>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">Responsive Padding:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`<main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
  {/* Content */}
</main>`}
                      </pre>
                      <p className="mt-2">
                        The main container uses <code className="text-xs bg-muted p-1 rounded">p-4</code> (1rem padding)
                        on mobile devices and
                        <code className="text-xs bg-muted p-1 rounded">md:p-24</code> (6rem padding) on medium screens
                        and larger.
                      </p>
                    </div>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">Max Width Container:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`<div className="w-full max-w-2xl mx-auto">
  {/* Content */}
</div>`}
                      </pre>
                      <p className="mt-2">
                        The content container has a maximum width of 42rem (max-w-2xl) to ensure readability on larger
                        screens.
                      </p>
                    </div>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-medium mb-2">Responsive Typography:</p>
                      <pre className="text-xs overflow-x-auto p-2 bg-black text-white rounded">
                        {`<CardTitle className="text-2xl font-bold">Greeting Generator</CardTitle>`}
                      </pre>
                      <p className="mt-2">
                        Text sizes are defined using Tailwind's responsive classes to ensure readability across
                        different device sizes.
                      </p>
                    </div>

                    <p>
                      Tailwind CSS uses a mobile-first approach, where styles are applied to mobile by default, and then
                      modified for larger screens using breakpoint prefixes like{" "}
                      <code className="text-xs bg-muted p-1 rounded">md:</code> and{" "}
                      <code className="text-xs bg-muted p-1 rounded">lg:</code>.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

