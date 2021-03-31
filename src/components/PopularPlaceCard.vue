<template>
  <v-card elevation="0" height="100px" class="rounded-lg cursor-pointer">
    <v-img :src="imageSrc" height="200px" width="150px">
      <div
        class="relative top-36 flex flex-col items-center bg-gray-900 bg-opacity-70 pb-2">
        <h2 class="text-white font-bold">
          <slot name="placeName"></slot>
        </h2>
        <div class="flex items-center justify-center">
          <div class="flex items-center justify-center text-white mr-2">
            <v-icon color="white" small>mdi-calendar-blank</v-icon>
            <small>
              <slot name="placeDuration"></slot>
            </small>
          </div>
          <div class="text-white">
            <v-icon color="white" small>mdi-star</v-icon>
            <small>
              <slot name="placeRating"></slot>
            </small>
          </div>
        </div>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
    },
  },
};
</script>

<style>
</style>