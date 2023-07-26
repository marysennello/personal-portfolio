<template>
  <div class="aboutMe page-section
  border-t border-t-8 rounded-t-lg border-[--lilac] 
  lg:border-t-0 lg:border-l lg:border-l-8 lg:rounded-l-lg lg:border-[--lilac]">
   
    <div class="flex flex-wrap lg:flex-nowrap justify-between items-stretch">

      <div class="aboutMeInfo w:full lg:w-3/6 m-5">
        <p class="md:text-xl mb-5">
          Freelance Front-End Developer with a passion for creating beautiful and efficient web designs. I specialize in Vue.js, Tailwind CSS, and implementing logical solutions. I hold certificates in <span class="font-semibold">Front End Development with HTML, CSS & Javascript</span>, as well as <span class="font-semibold">UX & Visual Interface Design</span>, equipping me with a well-rounded skill set.</p>

          <p class="md:text-xl mb-5">I get immense satisfaction from executing visions, problem solving, and writing clean, dynamic code. I'm known for my level head and welcoming a challenge. </p>
          
          <!-- <p class="md:text-xl mb-5">I take pride in my ability to optimize web development processes, enhancing efficiency while delivering visually stunning and user-friendly interfaces. As a dedicated learner, I stay abreast of industry trends and best practices to continuously enhance my skills. I enjoy utilizing my logical thinking and problem-solving abilities to tackle complex challenges, while collaborating seamlessly with cross-functional teams.</p> -->
        <!-- <h5>Background</h5>
        <p class="md:text-xl mb-5">
          After working in Commercial Real Estate for over six years, I leveraged my experience in project management, design, and planning to pursue formal technical coursework at the  University of Washington Professional & Continuing Education (UWPCE). I earned Certificates in <span class="font-semibold">Front End Development with HTML, CSS & Javascript</span> (completed April 2023) and <span class="font-semibold">UX & Visual Interface Design</span> (completed August 2022). 
        </p> -->
        <h5>Technical Skills</h5>
        <div class="ml-0 md:ml-5 grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 grid-rows-auto gap-x-2 gap-y-4">
          <AboutSkill class="lang">HTML</AboutSkill>
          <AboutSkill class="lang">CSS</AboutSkill> 
          <AboutSkill class="lang">JavaScript</AboutSkill> 
          <AboutSkill class="lang">SASS</AboutSkill>

          <AboutSkill class="library">Tailwind CSS</AboutSkill>  
          <AboutSkill class="library">Bootstrap</AboutSkill> 
          <AboutSkill class="library">jQuery</AboutSkill> 

          <AboutSkill class="framework">Vue.js</AboutSkill> 
          <AboutSkill class="framework">React</AboutSkill> 
          <AboutSkill class="framework">Next.js</AboutSkill> 
          <AboutSkill class="framework">Node.js</AboutSkill> 
          <AboutSkill class="framework">Nuxt.js</AboutSkill> 
          
          <AboutSkill class="program">Figma</AboutSkill> 
          <AboutSkill class="program">Adobe Illustrator</AboutSkill> 
          <AboutSkill class="program">Adobe InDesign</AboutSkill> 
          <AboutSkill class="program">Adobe Photoshop</AboutSkill>
          <AboutSkill class="program">Microsoft Excel</AboutSkill> 
          
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

<style scoped>


</style>