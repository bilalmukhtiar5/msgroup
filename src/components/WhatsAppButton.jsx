import whatsapp from "../assets/brand-icons/whatsapp.png"
import React from 'react'

const WhatsAppButton = () => {
  const phoneNumber = "923450757518" // country code ke sath, bina + ya spaces ke
  const message = "Hello! I'm interested in your services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <img src={whatsapp} />
      
    </a>
  )
}

export default WhatsAppButton