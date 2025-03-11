import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  showReadMore?: boolean
  imageUrl?: string
}

export default function TestimonialCard({
  quote,
  name,
  location,
  showReadMore = false,
  imageUrl = "/placeholder.svg?height=80&width=80",
}: TestimonialCardProps) {
  return (
    <Card className="bg-gray-50 h-full">
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <div className="mb-4 flex items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 overflow-hidden mr-4">
              <Image src={imageUrl || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
            </div>
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>

          <p className="italic mb-6 flex-grow">"{quote}"</p>

          {showReadMore && (
            <div className="mt-auto">
              <Link href="/testimonials" className="text-teal-600 hover:underline">
                Read more
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

