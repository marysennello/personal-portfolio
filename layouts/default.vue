<template>
  <div>
    <header class="h-screen text-[--blackish] 
    gradient-background">
        <div class="px-24 lg:px-36 pt-12 flex flex-col items-center justify-center">
          <h1 class="inline">Hi, I'm <span class="accent">Mary</span></h1>
          
          <img src="../assets/images/mary-sennello-tree.jpg" alt="Mary Sennello" class="rounded-full m-3 object-scale-down overflow-hidden headerimg">

          <!--arrow icon  -->
          <a href="#aboutMe" class=" inline text-[--shell]">
            <span class="material-symbols-outlined             
            m-3 p-3 bg-[--plumish] rounded-full enter-btn 
            transition transform ease-in-out
            hover:bg-[--lavender] shadow hover:shadow-inner
            focus:bg-[--lavender] shadow focus:shadow-inner
            ">
            arrow_downward
            </span>
            <span class="screen-reader-only">skip to main content</span>
          </a>
        </div>
    </header>
   
    <nav id="navbar" class="px-1 md:px-32 flex justify-start items-center shadow-md">

      <div class="pt-5 flex flex-wrap md:flex-nowrap justify-around md:justify-between items-center w-11/12 md:w-2/5">
        <a class="w-full md:w-auto text-center" href="#"><span class="accent">Mary Sennello</span></a>
        <a href="#aboutMe">About Me</a>
        <a href="#myWork">My Work</a>
        <a href="#contactMe">Contact</a>
      </div>
    </nav>

    <div class="flex md:mx-32">
      <slot class=""/>
    </div>

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