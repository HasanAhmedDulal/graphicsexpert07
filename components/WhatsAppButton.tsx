'use client';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/01742166271', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(37, 211, 102, 0.3), 0 4px 6px -2px rgba(37, 211, 102, 0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(37, 211, 102, 0.4), 0 10px 10px -5px rgba(37, 211, 102, 0.3);
          }
        }
        .whatsapp-pulse {
          animation: subtle-pulse 3s ease-in-out infinite;
        }
      `}</style>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer group whatsapp-pulse"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <i className="ri-whatsapp-fill w-7 h-7 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"></i>
      </button>
    </>
  );
}
