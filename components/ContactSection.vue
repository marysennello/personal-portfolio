<template>
  <div class="contactMe page-section
  border-t border-t-8 rounded-t-lg border-[--lilac] 
  lg:border-t-0 lg:border-l lg:border-l-8 lg:rounded-l-lg lg:border-[--lilac]">
      <!-- flex box for contact info + picture -->
      <div class="flex flex-wrap lg:flex-nowrap justify-between">

        <!-- contact links -->
        <div class="w-auto m-5 flex flex-col justify-between text-[--agapanthus]">
          <!-- email -->
          <a href="mailto:marysennello@gmail.com">
            <h4 class="text-3xl inline">Email</h4>
            <span class="material-symbols-outlined inline">
              mail
            </span>
          </a>
          <!-- phone -->
          <a href="tel:+17077755717">
            <h4 class="text-3xl inline">Phone</h4>
            <span class="material-symbols-outlined inline">
              phone_iphone
              </span>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/mary-sennello/">
            <h4 class="text-3xl inline">LinkedIn</h4>
            <span class="material-symbols-outlined inline">
              person_add
              </span>
            </a>
            <!-- GitHub -->
          <a href="https://github.com/marysennello">
            <h4 class="text-3xl inline">GitHub</h4>
            <span class="material-symbols-outlined inline">
              code
              </span>
          </a>
          
          <!-- gradient change let's chat soon -->
          <div>
            <h3 class="text-3xl font-weight-bold ">
              <span class="color-bg">    
              Let's chat soon.
              </span> 
            </h3>
          </div>
        </div>
        <!-- div for headshot -->
        <div class="w-full md:w-2/5 m-5">
          <!-- cropped headshot -->
          <img src="../assets/images/mary-sennello.jpg" alt="Mary Sennello" class="object-fit rounded-lg">
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
a {
  padding: 1em;
  border-radius: 10px;
}
a:hover {
  background-color: var(--pinkpearl);

}

</style>