interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ServiceInfo {
  [key: string]: { title: string } | undefined
}

async function formHandler(formData: FormData, service: string) {
  const serviceInfo: ServiceInfo = {
    service1: { title: "Service 1" },
    service2: { title: "Service 2" },
    service3: { title: "Service 3" },
    // Add more services as needed
  }

  try {
    // Using FormSubmit.co service
    const response = await fetch("https://formsubmit.co/ajax/shivayaskp@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        subject: `Discovery Call Request: ${serviceInfo[service as keyof typeof serviceInfo]?.title || "Energy4Life Services"}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        _template: "table",
        _captcha: "true",
      }),
    })

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      console.error("Form submission error:", errorData || response.statusText)
      throw new Error("Form submission failed")
    }

    const data = await response.json()
    console.log("Success:", data)
    // Handle success case
  } catch (error) {
    console.error("Error submitting form:", error)
    // Handle error case
  }
}

