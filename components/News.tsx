
import React from 'react';
import Section from './Section';

interface NewsArticle {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const newsArticles: NewsArticle[] = [
  {
    image: 'https://picsum.photos/600/400?random=3',
    date: '២៥ សីហា ២០២៤',
    title: 'លោក រស់ បញ្ញា ជួបសំណេះសំណាលជាមួយប្រជាពលរដ្ឋនៅខេត្តបាត់ដំបង',
    excerpt: 'ក្នុងដំណើរទស្សនកិច្ចនៅខេត្តបាត់ដំបង លោក រស់ បញ្ញា បានรับฟังនូវកង្វល់ និងសំណូមពររបស់ប្រជាពលរដ្ឋ...',
  },
  {
    image: 'https://picsum.photos/600/400?random=4',
    date: '១៨ សីហា ២០២៤',
    title: 'ដាក់សម្ពោធគម្រោងទឹកស្អាតសម្រាប់សហគមន៍ជនបទ',
    excerpt: 'គម្រោងថ្មីនេះនឹងផ្តល់អត្ថប្រយោជន៍ដល់គ្រួសារជាង ៥០០ គ្រួសារ ដោយធានាបាននូវការទទួលបានទឹកស្អាត និងអនាម័យ។',
  },
  {
    image: 'https://picsum.photos/600/400?random=5',
    date: '១០ សីហា ២០២៤',
    title: 'វេទិកាពិភាក្សាជាមួយយុវជនស្តីពី "អនាគតនៃបច្ចេកវិទ្យានៅកម្ពុជា"',
    excerpt: 'លោក រស់ បញ្ញា បានចូលរួមជាវាគ្មិនកិត្តិយស ដើម្បីចែករំលែកចក្ខុវិស័យ និងលើកទឹកចិត្តយុវជនឱ្យចាប់យកឱកាសក្នុងយុគសម័យឌីជីថល។',
  },
];

const NewsCard: React.FC<NewsArticle> = ({ image, date, title, excerpt }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-primary-red mb-2">{date}</p>
      <h3 className="font-koulen text-xl text-primary-blue mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm">{excerpt}</p>
      <a href="#" className="text-primary-blue hover:text-primary-red font-bold mt-4 inline-block">
        អានបន្ថែម &rarr;
      </a>
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <Section title="ព័ត៌មាន & សកម្មភាព" subtitle="បច្ចុប្បន្នភាពล่าสุด">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <NewsCard key={article.title} {...article} />
        ))}
      </div>
    </Section>
  );
};

export default News;
