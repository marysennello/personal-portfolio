<template>
  <div>
    <main class="mx-1 md:mx-3">
      <div id="aboutMe" class="h-40 flex items-end">
        <h2>About Me</h2>
      </div>
      <AboutSection />

      <div id="myWork" class="h-40 flex items-end">
        <h2>My Work</h2>
      </div>
      <ProjectSection />

      <div id="contactMe" class="h-40 flex items-end">
        <h2>Contact</h2>
      </div>
      <ContactSection />
    </main>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>