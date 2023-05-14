<template>
  <div class="aboutMe page-section
  border-t border-t-8 rounded-t-lg border-[--lilac] 
  lg:border-t-0 lg:border-l lg:border-l-8 lg:rounded-l-lg lg:border-[--lilac]">
   
    <div class="flex flex-wrap lg:flex-nowrap justify-between items-stretch">

      <div class="aboutMeInfo w:full lg:w-3/6 m-5">
        <!-- <h2>About Me</h2> -->
        <p class="md:text-lg mb-5">
          I am a Front End Developer with a record for improving processes, implementing innovative solutions, and delivering optimized, refined projects. I enjoy figuring out the best way to define business vision and translating that into action. My curiosity and desire for efficiency fuel my passion for creating usable, logical content.
        </p>
        <h5>Background</h5>
        <p class="md:text-lg mb-5">
          After working in Commercial Real Estate for over six years, I leveraged my experience in project management, design, and planning to pursue formal technical coursework at the  University of Washington Professional & Continuing Education (UWPCE). I earned Certificates in <span class="font-semibold">Front End Development with HTML, CSS & Javascript</span> (completed April 2023) and <span class="font-semibold">UX & Visual Interface Design</span> (completed August 2022). 
        </p>
        <h5>Technical Skills</h5>
        <div class="ml-5 grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 grid-rows-auto gap-x-2 gap-y-4 auto-cols-min">
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--purple]">HTML</p>
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--purple]">CSS</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--purple]">JavaScript</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--purple]">SASS</p>

          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--lilac]">Tailwind CSS</p>  
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--lilac]">Bootstrap</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--lilac]">jQuery</p> 

          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--periwinkle]">Vue.js</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--periwinkle]">Node.js</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--periwinkle]">Nuxt.js</p> 
          
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--pinkpearl]">Figma</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--pinkpearl]">Adobe Illustrator</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--pinkpearl]">Adobe InDesign</p> 
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--pinkpearl]">Adobe Photoshop</p>
          <p class="md:text-lg mb-3 underline underline-offset-8 decoration-4 decoration-[--pinkpearl]">Microsoft Excel</p> 
          
        </div>
      </div>

      <div class="w-full lg:w-2/5 m-5 hidden md:block">
        <img src="../assets/images/mary-sennello-tree-lg.png" alt="portrait of Mary Sennello" class="object-fill rounded-lg">
      </div>
      

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