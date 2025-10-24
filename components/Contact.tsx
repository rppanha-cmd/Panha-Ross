
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section title="ចូលរួម និង ទំនាក់ទំនង" subtitle="សម្លេងរបស់លោកអ្នកមានតម្លៃ">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="font-koulen text-3xl text-primary-blue mb-4">ទំនាក់ទំនងមកខ្ញុំ</h3>
            <p className="mb-6 text-gray-600">
              ខ្ញុំចង់รับฟังពីលោកអ្នក។ សូមចែករំលែកគំនិត សំណួរ ឬចូលរួមជាមួយយុទ្ធនាការរបស់យើង ដើម្បីสร้างការផ្លាស់ប្តូរទាំងអស់គ្នា។
            </p>
             <div className="space-y-4 text-gray-700">
                <p><strong>អ៊ីមែល:</strong> contact@rospanha.com</p>
                <p><strong>ទូរស័ព្ទ:</strong> +855 12 345 678</p>
                <p><strong>អាសយដ្ឋាន:</strong> ផ្ទះលេខ ១២៣, ផ្លូវ ៤៥៦, រាជធានីភ្នំពេញ</p>
            </div>
          </div>
          <form className="md:w-1/2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">ឈ្មោះ</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">អ៊ីមែល</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">សារ</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue transition"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              ផ្ញើសារ
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
