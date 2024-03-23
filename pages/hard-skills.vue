<script setup>
const hardSkills = [
  "write clean, efficient, and scalable code",
  "object orientated and functional programming",
  "mvc framework knowledge",
  "ci/cd",
  "production application monitoring",
  "containerization",
];

const softwareTools = [
  "git/github/gitlab",
  "vscode",
  "figma",
  "argocd",
  "docker",
  "kubernetes",
  "aws",
];

const languages = [
  "ruby",
  "javascipt",
  "python",
  "java",
  "elixir",
  "sql",
  "c++",
];

const frameworks = ["ruby on rails", "vuejs", "reactjs", "nextjs", "phoenix"];
</script>
<template>
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
</template>
