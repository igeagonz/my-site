<script setup>
const hardSkills = [
  "write clean, efficient, and scalable code",
  "object orientated and functional programming",
  "mvc framework knowledge",
  "ci/cd",
  "production application monitoring (Sentry & Datadog)",
  "containerization",
];

const softwareTools = [
  "git/github/gitlab",
  "vscode/rubymine",
  "figma",
  "docker",
  "kubernetes",
  "aws",
];

const languages = [
  "javascipt (experienced)",
  "ruby (experienced)",
  "some experience with: python, java, elixir, c++",
];

const frameworks = [
  "ruby on rails (experienced)",
  "vuejs (experienced)",
  "some experience with: react, nextjs, nuxtjs, express",
];
</script>
<template>
  <div>
    <div class="text-lg">hard skills</div>
    <ul class="list-disc list-inside">
      <li v-for="skill in hardSkills" :key="skill" class="mt-2">{{ skill }}</li>
    </ul>

    <div class="text-lg mt-4">software tools</div>
    <ul class="list-disc list-inside">
      <li v-for="tool in softwareTools" :key="tool" class="mt-2">{{ tool }}</li>
    </ul>

    <div class="text-lg mt-4">languages</div>
    <ul class="list-disc list-inside">
      <li v-for="language in languages" :key="language" class="mt-2">
        {{ language }}
      </li>
    </ul>

    <div class="text-lg mt-4">frameworks</div>
    <ul class="list-disc list-inside">
      <li v-for="framework in frameworks" :key="framework" class="mt-2">
        {{ framework }}
      </li>
    </ul>
  </div>
</template>
