<template>
  <div class="myWork page-section
  border-t border-t-8 rounded-t-lg border-[--lilac] 
  lg:border-t-0 lg:border-l lg:border-l-8 lg:rounded-l-lg lg:border-[--lilac]
  ">

        <div class="m-5 grid grid-cols-1">

        <!-- cards for all projects -->
        <div class="cards w-full flex flex-wrap justify-center md:justify-start">

        <!--card for Zelda  -->
        <ProjectCard>
          <!-- screencap of site -->
          <ProjectCardImg>
            <img src="../assets/images/zelda-astro-clip.png" alt="screen cap of website" class="rounded-md object-fill ">
          </ProjectCardImg>
          <!-- list tools used -->
          <ProjectCardDetail>
            <h5 class="text-center my-2">Zelda Astrology</h5>

            <div class="flex justify-around flex-wrap px-2">
              <ToolsButton>HTML</ToolsButton>
              <ToolsButton>CSS</ToolsButton>
              <ToolsButton>JavaScript</ToolsButton>
              <ToolsButton>Vue.js</ToolsButton>
              <ToolsButton>Nuxt 3</ToolsButton>
              <ToolsButton>Tailwind CSS</ToolsButton>
              <ToolsButton>Rest API</ToolsButton>
            </div>
            <!-- button to go to project site -->
            <ProjectCardButton>
              <a href="https://zelda-astrology.netlify.app">Explore 
              <span class="material-symbols-outlined">
                arrow_forward
                </span> </a>
            </ProjectCardButton>
          </ProjectCardDetail>
        </ProjectCard>

        <ProjectCard>
          <ProjectCardImg>
            <img src="../assets/images/promptopia-clip.png" alt="promptopia clip" class="rounded-md object-fill">
          </ProjectCardImg>
          <ProjectCardDetail>
            <h5 class="text-center my-2">Project In Progress - Promptopia</h5>
            <h6 class="text-sm italic text-center">
              <span>via </span> 
              <a href="https://www.jsmastery.pro/" class="text-[--agapanthus]">JS Mastery Pro</a>
            </h6>

            <div class="flex justify-around flex-wrap px-2 ">
              <ToolsButton>HTML</ToolsButton>
              <ToolsButton>CSS</ToolsButton>
              <ToolsButton>JavaScript</ToolsButton>
              <ToolsButton>React</ToolsButton>
              <ToolsButton>Next.js</ToolsButton>
              <ToolsButton>Tailwind CSS</ToolsButton>
              <ToolsButton>Rest API</ToolsButton>

            </div>
            <!-- button to go to project site -->
            <!-- <ProjectCardButton>
              <a href="#"> Explore 
                <span class="material-symbols-outlined">
                arrow_forward
                </span>
              </a>
            </ProjectCardButton> -->
          </ProjectCardDetail>
        </ProjectCard>

        <!-- in progress project -->
        <ProjectCard>
          <ProjectCardImg>
            <img src="https://images.pexels.com/photos/4207677/pexels-photo-4207677.jpeg" alt="placeholder img" class="rounded-md object-cover blur-sm ">
          </ProjectCardImg>
          <ProjectCardDetail>
            <h5 class="text-center my-2">Project In Progress</h5>
            <div class="flex justify-around flex-wrap px-2 ">
              
            </div>
          </ProjectCardDetail>
        </ProjectCard>
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

<style scoped>

 a:only-child {
  @apply p-3 my-1 bg-[--agapanthus] border border-[--agapanthus] text-[--shell] rounded-lg hover:bg-[--plumish]
  flex flex-nowrap justify-center
}

</style>