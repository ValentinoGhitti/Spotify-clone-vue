<template>
  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Escuchado recientemente
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <HomeCard image="https://i.scdn.co/image/ab67616d00001e02d30fcf6340831edbafb45e38" title="Kill 'Em All" subTitle="Metallica" />
      <HomeCard image="https://i.scdn.co/image/ab67616d00001e0242b38cbb710a9685b8fcd8a7" title="Almafuerte" subTitle="Almafuerte" />
      <HomeCard class="md:block hidden" image="https://i.scdn.co/image/ab67616d00001e024d8bab4701cfaff8a745ce2c" title="Selección Privada" subTitle="La Mona Jimenez" />
      <HomeCard class="lg:block hidden" image="https://i.scdn.co/image/ab67616d00001e02810168d54f85d48f07389237" title="Animals" subTitle="Pink Floyd" />
      <HomeCard class="xl:block hidden" image="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f" title="Ultraviolence" subTitle="Lana del Rey" />
    </div>
  </div>

  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Episodios nuevos
    </button>

    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://i.scdn.co/image/763dd9720c8ac8a757db99ee1668412c00dd0987" title="El Sinso Podcast" subTitle="El Sinso" />
      <HomeCard image="https://i.scdn.co/image/ab67656300005f1f5a1a92d594e7ae81aba07735" title="Los Futbolitos" subTitle="Angelo & Vincent"  />
      <HomeCard class="md:block hidden" image="https://i.scdn.co/image/ad6a402ff928f48fc398267fa30dd9b783287548" title="DevTalles" subTitle="Fernando Herrera" />
      <HomeCard class="lg:block hidden" image="https://i.scdn.co/image/ab67656300005f1fb5a4616a8fd7ff18b21e6d30" title="La Venganza Ser..." subTitle="Alejandro Dolina"/>
      <HomeCard class="xl:block hidden" image="https://i.scdn.co/image/5fdf763b01ae3fd2ab6d3c3cae2b323b4a9a6567" title="ALEX AL HABLA ..." subTitle="Alexelcapo" />
    </div>
  </div>

</template>

<script setup>
  import HomeCard from '../components/HomeCard.vue'
</script>