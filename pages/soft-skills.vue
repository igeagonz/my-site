<script setup>
const softSkills = [
  "communicate often and concisely",
  "strong sense of ownership",
  "technical and non-technical documentation",
  "teamwork > individual work",
  "helping others succeed",
  "agile methodology",
  "prioritization and time management",
  "continuous learner",
  "efficient collaboration with UI/UX desisgner",
];
</script>

<template>
  <div class="text-lg">soft skills</div>
  <ul class="list-dics list-inside">
    <li v-for="skill in softSkills" :key="skill" class="mt-2">{{ skill }}</li>
  </ul>
</template>
