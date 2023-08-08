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
      <CategorySelect category="Pódcasts" image="https://picsum.photos/id/7/300/300" />
      <CategorySelect category="Eventos en directo" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Especialmente para ti" image="https://picsum.photos/id/13/300/300" />
      <CategorySelect category="Novedades" image="https://picsum.photos/id/17/300/300" />
      <CategorySelect category="Rock" image="https://picsum.photos/id/100/300/300" />
      <CategorySelect category="Jazz" image="https://picsum.photos/id/21/300/300" />
      <CategorySelect category="Clásica" image="https://picsum.photos/id/29/300/300" />
      <CategorySelect category="Ambiente" image="https://picsum.photos/id/49/300/300" />
      <CategorySelect category="Blues" image="https://picsum.photos/id/47/300/300" />
      <CategorySelect category="Soul" image="https://picsum.photos/id/120/300/300" />
      <CategorySelect category="Metal" image="https://picsum.photos/id/113/300/300" />
      <CategorySelect category="Glam" image="https://picsum.photos/id/117/300/300" />
      <CategorySelect category="Tango" image="https://picsum.photos/id/327/300/300" />
      <CategorySelect category="Listas de éxitos" image="https://picsum.photos/id/140/300/300" />
      <CategorySelect category="Folklóre Argentino" image="https://picsum.photos/id/413/300/300" />
    </div>
  </div>
</template>

<script setup>
  import CategorySelect from '../components/CategorySelect.vue';
</script>