// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
    modules: [
      '@nuxtjs/tailwindcss'
    ], 
    // end modules

    app: {
      head: {
        title: 'Mary Sennello',
        meta: [
          { name: 'description', content: 'Portfolio'}
        ],
        link: [
          //material symbols
          {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'},
           
         //google fonts
        { rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Aboreto&family=Fraunces:ital,wght@0,400;0,700;1,400;1,700&family=Gotu&family=Poppins:wght@400;600&family=Sacramento&display=swap' 
       },
          
        ]
      }
    } //end app
    //end export
  
})
