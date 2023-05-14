<template>
  <div class="myWork page-section
  border-t border-t-8 rounded-t-lg border-[--lilac] 
  lg:border-t-0 lg:border-l lg:border-l-8 lg:rounded-l-lg lg:border-[--lilac]
  ">

        <div class="m-5 grid grid-cols-1">

        <!-- cards for all projects -->
        <div class="cards w-full flex flex-wrap justify-center md:justify-start">
        <!--card for Zelda  -->
        <div class="card grid grid-cols-1 w-full lg:w-2/5 border border-[blackish] border-2 rounded-md p-3 my-3 mr-3 shadow-md shadow-[--lavender]/50">
          <!-- screencap of site -->
          <div class="card-img w-full">
            <img src="../assets/images/zelda-astro-clip.png" alt="screen cap of website" class="rounded-md object-fill ">
          </div>
          <!-- list tools used -->
          <div class="card-detail">
            <h5 class="text-center my-2">Zelda Astrology</h5>
            <div class="flex justify-around flex-wrap px-2">
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">HTML</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">CSS</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Javascript</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Vue.js 3</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Nuxt 3</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Tailwind</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Rest API</p>
            </div>
            <!-- button to go to project site -->
            <div class="my-3 flex justify-center">
              <a href="https://master--dynamic-treacle-b3c7d4.netlify.app/" class="p-3  my-1 bg-[--agapanthus] border border-[--agapanthus] text-[--shell] rounded-lg hover:bg-[--plumish]
              flex flex-nowrap justify-center
              ">Explore 
              <span class="material-symbols-outlined">
                arrow_forward
                </span></a>
            </div>
          </div>
        </div>
        <!-- in progress project -->
        <div class="card grid grid-cols-1 
        w-full lg:w-2/5 
        border border-[blackish] border-2 rounded-md 
        p-3 my-3 mr-3 
        shadow-md shadow-[--lavender]/50">
          <div class="card-img   w-full">
            <img src="https://images.pexels.com/photos/4207677/pexels-photo-4207677.jpeg" alt="placeholder img" class="rounded-md object-cover blur-sm ">
          </div>
          <div class="card-detail">
            <h5 class="text-center my-2">Project In Progress</h5>
            <div class="flex justify-around flex-wrap px-2 ">
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">HTML</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">CSS</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Javascript</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Vue.js 3</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Nuxt 3</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Tailwind</p>
              <p class="inline p-3 my-1 mx-1 border border-[--pinkpearl] rounded-lg">Rest API</p>
            </div>
            <!-- button to go to project site -->
            <div class="my-3 flex justify-center">
              <a href="#" class="p-3 my-1 bg-[--agapanthus] border border-[--agapanthus] text-[--shell] rounded-lg hover:bg-[--plumish]
              flex flex-nowrap justify-center
              ">Explore <span class="material-symbols-outlined">
                arrow_forward
                </span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- ^^end of cards -->
      </div>


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