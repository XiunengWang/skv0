"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, MessageCircle, Send } from "lucide-react"

// Define your chatbot responses
const botResponses = {
  greetings: [
    "Hello! How can I help you today?",
    "Hi there! Welcome to Energy4Life. What can I assist you with?",
    "Welcome! I'm here to answer your questions about our services.",
  ],
  services: [
    "We offer various services including personal coaching, energy healing, and wellness consultations. Would you like to know more about any specific service?",
  ],
  booking: [
    "You can book a discovery call by filling out the form on our discovery call page. Would you like me to direct you there?",
  ],
  pricing: [
    "Our pricing varies depending on the service. For detailed pricing information, I recommend scheduling a discovery call where we can discuss your specific needs.",
  ],
  default: [
    "I'm not sure I understand. Could you rephrase your question?",
    "I don't have information on that yet. Would you like to schedule a call with a human expert?",
    "That's a great question for our discovery call. Would you like to schedule one?",
  ],
}

// Function to determine response based on user input
function getResponse(input: string): string {
  const lowerInput = input.toLowerCase()

  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)]
  } else if (lowerInput.includes("service") || lowerInput.includes("offer") || lowerInput.includes("provide")) {
    return botResponses.services[0]
  } else if (lowerInput.includes("book") || lowerInput.includes("appointment") || lowerInput.includes("schedule")) {
    return botResponses.booking[0]
  } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("fee")) {
    return botResponses.pricing[0]
  } else {
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
  }
}

type Message = {
  id: number
  text: string
  isBot: boolean
}

export function SimpleChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! How can I help you today?", isBot: true },
  ])

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate typing delay for bot
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(input),
        isBot: true,
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Energy4Life Chat</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? "bg-gray-100 text-gray-800 self-start rounded-bl-none"
                    : "bg-blue-600 text-white self-end rounded-br-none"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
              <Send size={18} />
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}

