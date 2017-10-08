<template lang="pug">
#app
  section.hero.is-medium
    .hero-head
      header.nav
        .container
          .navbar-item
            a.nav-item
              router-link(to='/', tag='h1', title='cine-kids')
                a(href='') CINE KIDS
          .nav-right.nav-menu
            a.nav-item.is-active
              router-view(name='gnb')
              router-link(to='/sign-in')
                a(href)
                  span.nav-item
                    a.button.is-inverted
                      span.icon
                        i.fa.fa-sign-in
                      span Sign In
    .hero-body
      transition(name='fade', mode='out-in')
        router-view
    .hero-foot
      //- carousel(:index="0")
        //- carousel-item(v-for="(item, index) in items" :index="index" key="index")
          //- img(:src="item.src", :alt="item.alt")


</template>

<script>
import Carousel from './components/Carousel/Carousel.vue'
import CarouselItem from './components/Carousel/CarouselItem.vue'
import SignIn from './components/Signs/SignIn.vue'

export default {
  name: 'app',
  components: {
    Carousel,
    CarouselItem,
    SignIn
  },
  data () {
    return {
      items: [
        { src: 'http://lorempicsum.com/up/1920/1080/1', alt: 'Up Screenshot 1' },
        { src: 'http://lorempicsum.com/up/1920/1080/2', alt: 'Up Screenshot 2' },
        { src: 'http://lorempicsum.com/up/1920/1080/3', alt: 'Up Screenshot 3' },
        { src: 'http://lorempicsum.com/up/1920/1080/4', alt: 'Up Screenshot 4' },
        { src: 'http://lorempicsum.com/up/1920/1080/5', alt: 'Up Screenshot 5' }
      ]
    }
  }
}
</script>


<style>

 html {
     font-size: 100%;
     background: #fff;  
 }
  body {
    margin: 0;
  }
.container {
  width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.router-link-active,
.currnent-page a
 {
  text-decoration: none;
  color: #fff;
}

.fade-enter-active {animation: fade-in 0.3s}
.fade-leave-active {animation: fade-out 0.3s}

@keyframes fade-in {
  from {}
  to {opacity: 1}
}

@keyframes fade-out {
  from {}
  to {opacity: 0}
}


// slide animation
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.4s;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  animation: slide-out 0.4s;
}

@keyframes slide-in {
  from {
    transform: translateX(-200px);}
  to {
    transform: translateX(-0x);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(200px);
    opacity: 0;
    }
  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.hero-head {
  position: fixed;
  width: 100%;
  z-index: 999;
}

.movie-trailer {
  position: absolute;
  padding: 0;
  top: 0;
  left: 0;
  display: inline-block;
}



</style>
