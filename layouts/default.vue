<template>
  <div>
    <header class="h-screen text-[--blackish] 
    gradient-background">
        <div class="px-36 pt-12 flex flex-col items-center justify-center">
          <h1 class="inline">Hi, I'm <span class="accent">Mary</span></h1>
          
          <img src="../assets/images/mary-sennello-tree.jpg" alt="Mary Sennello" class="rounded-full m-3 headerimg">

          <!--arrow icon  -->
          <a href="#navbar" class=" inline text-[--shell]">
            <span class="material-symbols-outlined             
            m-3 p-3 bg-[--plumish] rounded-full enter-btn 
            transition transform ease-in-out
            hover:bg-[--lavender] shadow hover:shadow-inner
            focus:bg-[--lavender] shadow focus:shadow-inner
            ">
            arrow_forward
            </span>
            <span class="screen-reader-only">skip to main content</span>
          </a>
        </div>
    </header>
   
    <nav id="navbar" class="px-5 flex justify-center shadow-md">
      <div class="pt-5 flex flex-nowrap justify-between items-center w-3/4">
        <a class="navbar-brand" href="#"><span class="accent">Mary Sennello</span></a>
        <a href="#aboutMe">About Me</a>
        <a href="#myWork">My Work</a>
        <a href="#contactMe">Contact</a>
      </div>
    </nav>
    <slot />

  <footer class="bg-[--dark-lilac] h-12 rounded-t-3xl"></footer>
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
.headerimg, .enter-btn {
  box-shadow: var(--shadow-hazy-pinkpearl);
}
</style>