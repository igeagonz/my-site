<script setup>
import IgnacioPersonalPhoto from "/img/IgnacioPersonalPhoto.jpg";
</script>

<template>
  <section>
    <div class="text-2xl text-center">Hola 👋, mi nombre es Ignacio</div>
    <img
      class="rounded-full mx-auto my-2 h-[300px]"
      :src="IgnacioPersonalPhoto"
      alt="photo of ignacio"
    />
  </section>

  <section
    class="border-2 border-black bg-black rounded-md p-2 w-full md:w-1/2 mx-auto"
  >
    <p class="text-white">
      <span class="text-green-500">~ mini bio:</span> software engineer @{{
        " "
      }}
      <a
        href="https://vantage.sh"
        target="_blank"
        class="hover:underline"
        style="color: #9c25c7"
      >
        Vantage
      </a>
      . based out of nyc 🗽. fluent in both english and spanish. passionate
      about my family, technology, travel, and culture. enjoy music, youtube,
      fitness, good food, beer, occasional cocktail.
    </p>
  </section>

  <section class="flex justify-center mt-12 gap-12">
    <NuxtLink
      to="/soft-skills"
      class="p-4 text-white bg-black hover:bg-gray-700 rounded-md"
    >
      soft skills
    </NuxtLink>
    <NuxtLink
      to="/hard-skills"
      class="p-4 text-white bg-black hover:bg-gray-700 rounded-md"
    >
      hard skills
    </NuxtLink>
  </section>
</template>
