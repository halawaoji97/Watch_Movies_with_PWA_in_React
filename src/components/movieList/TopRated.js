import MovieItem from './movieItem/MovieItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import './movieItem/movie-item.css';
import 'swiper/swiper-bundle.min.css';

const TopRated = ({ topRatedMovies }) => {
	return (
		<section className='top-rated-movies'>
			<h2>Top rated</h2>
			<Swiper
				spaceBetween={5}
				slidesPerView={1}
				freeMode={true}
				loop={true}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
			>
				{topRatedMovies &&
					topRatedMovies.map((movie) => {
						return (
							<SwiperSlide key={movie.id}>
								<MovieItem movie={movie} key={movie.id} />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</section>
	);
};

export default TopRated;
