import { useTranslations } from 'next-intl';

export const useInsights = () => {
  const t = useTranslations('Insights');

  return [
    {
      category: t('item1.category'),
      categoryColor: 'bg-blue-600',
      timeToRead: t('item1.timeToRead'),
      title: t('item1.title'),
      description: t('item1.description'),
      imageSrc: '/images/insights/1.png',
      date: t('item1.date'),
    },
    {
      category: t('item2.category'),
      categoryColor: 'bg-blue-600',
      timeToRead: t('item2.timeToRead'),
      title: t('item2.title'),
      description: t('item2.description'),
      imageSrc: '/images/insights/2.png',
      date: t('item2.date'),
    },
    {
      category: t('item3.category'),
      categoryColor: 'bg-blue-600',
      timeToRead: t('item3.timeToRead'),
      title: t('item3.title'),
      description: t('item3.description'),
      imageSrc: '/images/insights/3.png',
      date: t('item3.date'),
    },
  ];
};
