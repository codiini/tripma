<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="popularPlace in getPopularPlaces"
      :key="popularPlace.id">
      <v-row>
        <v-col cols="12">
          <PopularPlaceCard :imageSrc="popularPlace.image">
            <template v-slot:placeName>{{ popularPlace.name }}</template>
            <template v-slot:placeDuration>{{popularPlace.duration}}</template>
            <template v-slot:placeRating>{{ popularPlace.rating }}</template>
          </PopularPlaceCard>
        </v-col>
      </v-row>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import PopularPlaceCard from "@/components/PopularPlaceCard";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PopularPlaceCard,
  },
  data() {
    return {
      images: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          315: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          250: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  computed: {
    ...mapState({
      getPopularPlaces: (state) => state.popularplaces,
    }),
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/base.scss";
</style>