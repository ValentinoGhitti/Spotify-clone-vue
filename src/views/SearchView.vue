<template>
  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended radio
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/7/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Made for you" image="https://picsum.photos/id/13/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/17/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/7/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Made for you" image="https://picsum.photos/id/13/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/17/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/7/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Made for you" image="https://picsum.photos/id/13/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/17/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/7/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Made for you" image="https://picsum.photos/id/13/300/300" />
    </div>
  </div>
</template>

<script setup>
  import CategorySelect from '../components/CategorySelect.vue';
</script>