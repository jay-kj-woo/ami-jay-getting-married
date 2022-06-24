import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from './Styles';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { images } from '../public/images/gallery';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import {
  bounceUpVariants,
  BouncingUpContainer,
} from './motionDiv/BouncingUpContainer';
import { motion } from 'framer-motion';

const Photos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const imageList = Object.values(images);
  return (
    <Wrapper>
      <BouncingUpContainer>
        <SectionTitle variants={bounceUpVariants}>사진으로 만나요</SectionTitle>
      </BouncingUpContainer>
      <BouncingUpContainer>
        <SwiperContainer variants={bounceUpVariants}>
          <SwiperMain
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {imageList.map((image) => (
              <SwiperSlide key={image.src}>
                {/*might just use regular Img tag since, next/image is not loaed out of viewport  */}
                <Image src={image} objectFit="contain" priority />
              </SwiperSlide>
            ))}
          </SwiperMain>
          <ThumbSlider
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {imageList.map((image) => (
              <SwiperSlide key={image.src}>
                <Image src={image} objectFit="cover" priority />
              </SwiperSlide>
            ))}
          </ThumbSlider>
        </SwiperContainer>
      </BouncingUpContainer>
    </Wrapper>
  );
};

export default Photos;
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 100px 0 100px 0;
`;

const SwiperContainer = styled(motion.div)`
  height: calc(var(--vh, 1vh) * 90);
  max-height: 750px;
`;

const SwiperMain = styled(Swiper)`
  height: 80%;
  padding-bottom: 16px;
  .swiper-button-prev {
    color: #fff;
  }
  .swiper-button-next {
    color: #fff;
  }
  .swiper-slide {
    display: flex;
  }
`;
const ThumbSlider = styled(Swiper)`
  height: 20%;
  .swiper-slide {
    display: flex;
    opacity: 0.4;
  }
  .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

const MainSlide = styled(SwiperSlide)`
  /* display: flex; */
  /* align-items: center; */
`;
