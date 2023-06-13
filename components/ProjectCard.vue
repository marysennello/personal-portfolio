<template>
  <div class="card grid grid-cols-1 
  justify-start
  w-full lg:w-5/12 
  border border-[blackish] border-2 rounded-md 
  p-3 my-3 mr-3 
  shadow-md shadow-[--lilac]/90
   hover:shadow-[--lilac]">
    <slot />

  </div>
              <!-- hover overlay -->
              <!-- <div class="absolute inset-0 bg-zinc-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-zinc-50 text-2xl font-bold">test</h3>
              </div> -->
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