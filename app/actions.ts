"use server"

export async function submitName(name: string): Promise<string> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Process the name (in a real app, you might do more complex operations here)
  const sanitizedName = name.trim()

  // Return the greeting
  return `Hello ${sanitizedName}!`
}

