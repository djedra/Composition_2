import PropTypes from 'prop-types';

/** Элемент списка новостей с иконкой, текстом и ссылкой */
export const NewsItem = ({ icon, text, link }) => (
  <li className="news-item">
    {icon && <img src={icon} alt="" className="news-icon" />}
    <a href={link} className="news-link">{text}</a>
  </li>
);

NewsItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};