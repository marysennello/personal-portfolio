<template>
  <div>
    <header class="py-3 px-10 mb-5 h-screen">
      <h1>Hi, I'm <span class="accent">Mary</span></h1>
      <a href="#navbar"><span class="material-symbols-outlined">
        arrow_forward
        </span>
      </a>
    </header>
    <nav id="navbar" class="px-5">
      <div class="pt-5 flex flex-nowrap justify-between items-center">
        <a class="navbar-brand" href="#"><span class="accent">Mary Sennello</span></a>
        <a class="nav-link" href="#aboutMe">About Me</a>
        <a class="nav-link" href="#myProjects">My Projects</a>
        <a class="nav-link" href="#contactMe">Contact Me</a>
      </div>
    </nav>
    <slot />

  
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