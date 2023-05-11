<template>
  <div>
    <header class="h-screen text-[--dark-lilac] bg-gradient-to-b from-[--shell] to-[--dark-lilac]">
        <div class="px-36 pt-12">
          <h1>Hi, I'm <span class="accent">Mary</span></h1>
          <a href="#navbar" class="text-[--shell]"><span class="material-symbols-outlined 
            motion-safe:animate-bounce 
            p-3 bg-[--dark-lilac] rounded-full ">
            arrow_forward
            </span>
          </a>
        </div>
    </header>
   
    <nav id="navbar" class="px-5 flex justify-center">
      <div class="pt-5 flex flex-nowrap justify-between items-center w-3/4">
        <a class="navbar-brand" href="#"><span class="accent">Mary Sennello</span></a>
        <a href="#aboutMe">About Me</a>
        <a href="#myWork">My Work</a>
        <a href="#contactMe">Contact Me</a>
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

<style scoped>
.router-link-exact-active {
  color: var(--agapanthus);
}

</style>