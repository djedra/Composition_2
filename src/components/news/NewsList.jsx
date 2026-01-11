import { NewsItem } from './NewsItem';

/** Список новостей, использующий NewsItem */
const NewsList = ({ items }) => (
  <ul className="news-list">
    {items.map((item, index) => (
      <NewsItem key={index} {...item} />
    ))}
  </ul>
);

export default NewsList;