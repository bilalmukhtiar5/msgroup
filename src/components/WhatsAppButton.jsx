import whatsapp from "./../../dist/brand-icons/whatsapp.png"
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
      {/* <svg
        viewBox="0 0 24 24"
        fill="white"
        className="h-7 w-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.886.523 3.649 1.432 5.153L2 22l4.955-1.404A9.947 9.947 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.001a7.94 7.94 0 0 1-4.267-1.238l-.306-.183-3.158.895.905-3.076-.2-.318A7.94 7.94 0 0 1 4.002 12c0-4.412 3.588-8 7.999-8 4.412 0 8 3.588 8 8s-3.588 8.001-8 8.001z" />
      </svg> */}
    </a>
  )
}

export default WhatsAppButton