
import React from 'react';
import Section from './Section';
import { EconomyIcon, EducationIcon, HealthIcon, AgricultureIcon } from './Icons';

interface PlatformItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const platformItems: PlatformItem[] = [
  {
    icon: <EconomyIcon />,
    title: 'សេដ្ឋកិច្ចរឹងមាំ',
    description: 'ជំរុញសហគ្រាសធុនតូច និងមធ្យម បង្កើតការងារ និងទាក់ទាញការវិនិយោគ ដើម្បីកំណើនសេដ្ឋកិច្ចប្រកបដោយចីរភាព។',
  },
  {
    icon: <EducationIcon />,
    title: 'ពង្រឹងការអប់រំ',
    description: 'វិនិយោគលើធនធានគ្រូបង្រៀន ធ្វើទំនើបកម្មកម្មវិធីសិក្សា និងធានាឱ្យសិស្សគ្រប់រូបទទួលបានការអប់រំប្រកបដោយគុណភាព។',
  },
  {
    icon: <HealthIcon />,
    title: 'សុខភាពសាធារណៈ',
    description: 'ពង្រីកលទ្ធភាពទទួលបានសេវាសុខាភិបាលល្អនៅគ្រប់ទីកន្លែង លើកកម្ពស់មន្ទីរពេទ្យបង្អែក និងសុខភាពសហគមន៍។',
  },
  {
    icon: <AgricultureIcon />,
    title: 'ទំនើបកម្មកសិកម្ម',
    description: 'គាំទ្រកសិករតាមរយៈបច្ចេកទេសថ្មីៗ ស្វែងរកទីផ្សារ និងធានាតម្លៃកសិផល ដើម្បីលើកកម្ពស់ជីវភាពប្រជាកសិករ។',
  },
];

const PlatformCard: React.FC<PlatformItem> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
    <div className="mb-4 text-primary-red">{icon}</div>
    <h3 className="font-koulen text-3xl text-primary-blue mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Platform: React.FC = () => {
  return (
    <Section title="គោលនយោបាយ" subtitle="ចក្ខុវិស័យរបស់ខ្ញុំដើម្បីកម្ពុជា" className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {platformItems.map((item) => (
          <PlatformCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Platform;
