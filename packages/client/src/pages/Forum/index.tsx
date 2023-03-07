import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../../components/Button/index.scss';
import '../../components/Header/index.scss';
import '../../components/Input/index.scss';
import '../StartScreen/index.scss';
import './index.scss';
const mockData = [
  {
    id: 1,
    title: 'как играть',
  },
  {
    id: 2,
    title: 'как перестать проигрывать',
  },
  {
    id: 3,
    title: 'как бросить играть',
  },
  {
    id: 4,
    title: 'как найти девушку',
  },
];
const Forum = () => {
  // TODO: Удалить неиспользуемую переменную
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  return (
    <>
      <div className='main-page-wrapper'>
        <div
          className='main-wrapper'
          style={{
            backgroundImage: `url(https://mobimg.b-cdn.net/v3/fetch/1d/1da7e32dc534959fa6a4f5aedc7e5729.jpeg)`,
          }}>
          <div className='form-login'>
            {mockData.map((data) => (
              <Link className='navigation-link profile-navigation-link' to={`./${data.id}`}>
                {data.title}
              </Link>
            ))}
            {/* <Title className='form-login-title' text='Форум' />
            <Link className='navigation-link profile-navigation-link' to={'/theme1'}>
              Тема 1
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Forum;
