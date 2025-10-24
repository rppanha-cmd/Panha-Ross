
import React from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-95 animate-modal-pop-in font-battambang"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Close donation modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div className="text-center">
          <h2 className="font-koulen text-3xl text-primary-blue mb-2">ចូលរួមสนับสนุนការផ្លាស់ប្តូរ</h2>
          <p className="text-gray-600 mb-6">
            ការបរិច្ចាគរបស់លោកអ្នក គឺជាកម្លាំងចលករដ៏សំខាន់សម្រាប់យុទ្ធនាការរបស់យើង។ សូមអរគុណសម្រាប់ការគាំទ្រ!
          </p>
          <div className="flex justify-center mb-4">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=DonationForRosPanhaCampaign&bgcolor=ffffff&color=0D2470" 
              alt="QR Code for Donation" 
              className="rounded-md border-4 border-primary-blue p-1"
            />
          </div>
          <p className="font-bold text-lg text-primary-blue">គណនី ABA: <span className="font-sans">000 123 456</span></p>
          <p className="text-gray-700">ឈ្មោះគណនី: ROS PANHA</p>
        </div>
      </div>
      <style>{`
        @keyframes modal-pop-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-pop-in {
          animation: modal-pop-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DonationModal;
