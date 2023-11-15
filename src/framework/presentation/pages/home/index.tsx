import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Button, Container, Image, Loader } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
// import { addPost, removePost } from '../../../../feature/posts/postSlice';
import { GetBooksEvents } from '../../../events/GetBookEvent';
import ListItem from '../../components/listItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './styles.scss';
import { AuthEvents } from '../../../events/AuthEvent';

function Home() {
  const posts = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery('(min-width: 30em)');

  useEffect(() => {
    dispatch(GetBooksEvents().getBooksEvent());   
  }, [dispatch]);

  const images = [
    {
      title: 'First slide',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...',
      cover: 'https://marketplace.canva.com/EAFY7T6tOE0/1/0/1003w/canva-oren-estetik-buku-cerita-pasangan-cinta-romantis-kartun-bagus-laGditSTCv0.jpg',
    },
    {
      title: 'First slide',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      cover: 'https://marketplace.canva.com/EAFW-ETTBSY/1/0/501w/canva-sampul-buku-buka-mata-dan-pikiran-moderen-ilustratif-ceria-penuh-warna-tipografi-besar-zM4PFEiK1m8.jpg',
    },
    {
      title: 'First slide',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      cover: 'https://marketplace.canva.com/EAFLWf4xeVY/1/0/1003w/canva-hitam-ilustrasi-galaksi-sampul-buku-5fLy1GuPvd4.jpg',
    },
    {
      title: 'First slide',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      cover: 'https://marketplace.canva.com/EAFYKzK1P64/1/0/1003w/canva-krem-ilustrasi-novel-book-cover-xqkV8b5rj5k.jpg',
    },
    {
      title: 'First slide',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      cover: 'https://marketplace.canva.com/EAFFD2NqxCs/1/0/1003w/canva-krem-ilustrasi-pasangan-romantis-cover-novel-xtDh96MlbI0.jpg',
    },
    {
      title: 'First slide',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      cover: 'https://marketplace.canva.com/EAFLWf4xeVY/1/0/1003w/canva-hitam-ilustrasi-galaksi-sampul-buku-5fLy1GuPvd4.jpg',
    },
    // "https://marketplace.canva.com/EAFFDGFkcdM/1/0/1003w/canva-hijau-biru-sederhana-ruang-sunyi-sampul-buku-novel-K3WxwPzlPyk.jpg",
    // "https://marketplace.canva.com/EAE6Tyk390o/1/0/501w/canva-hijau-dan-putih-minimalis-pengembangan-diri-sampul-buku-esnfzwNAT2s.jpg",
    // "https://marketplace.canva.com/EAFLWf4xeVY/1/0/1003w/canva-hitam-ilustrasi-galaksi-sampul-buku-5fLy1GuPvd4.jpg",
    // "https://marketplace.canva.com/EAFYKzK1P64/1/0/1003w/canva-krem-ilustrasi-novel-book-cover-xqkV8b5rj5k.jpg",
    // "https://marketplace.canva.com/EAFFD2NqxCs/1/0/1003w/canva-krem-ilustrasi-pasangan-romantis-cover-novel-xtDh96MlbI0.jpg",
  ];

  const post = {
    id: new Date().toISOString(),
    title: 'First Post!',
    body: 'This is the first post in our blog'
  };

  // const handleAddpost = () => {
  //   dispatch(addPost(post));
  // };

  // const handleDeletePost = (post: post) => {
  //   dispatch(removePost(post.id));
  // };

  return (
    <Container size="responsive" className="app">
      {posts.isLoading && <Loader />}
      <div className='containerTop'>
        <h1>Popular Books</h1>
        <div className='content-row'>
          <Carousel
            withIndicators
            height={300}
            slideSize={{ base: '100%', sm: '50%', md: '15%' }}
            slideGap={{ base: 0, sm: 'md' }}
            align={'start'}
            loop={true}
            style={{ width: '90%' }}
          >
            {images.map((image, index) => (
              <Carousel.Slide key={index} style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  radius="md"
                  h={300}
                  w={200}
                  mr={20}
                  src={image.cover}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={matches ? 'containerBottom' : 'containerBottom-mobile'}>
        <div className='row'>
          <h1>Lanjutkan Membaca...</h1>
          <div className='content-row'>
            {images.map((image, index) => (
              index < 3 &&<ListItem item={image} key={index} onPress={() => {() => console.log('hello');}} type='border'/>
            ))}
          </div>
        </div>
        <div className='row'>
          <h1>Komunitas Membaca</h1>
          <div className='content-row'>
            <ListItem item={images[0]} onPress={() => {console.log('hello');}} type='noBorder'/>
            <ListItem item={images[0]} onPress={() => {console.log('hello');}} type='noBorder'/>
            <ListItem item={images[0]} onPress={() => {console.log('hello');}} type='noBorder'/>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
