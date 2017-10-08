<template lang="pug" >
div
  video(class="movie-trailer" width='100%', height='auto', autoplay loop)
    source(src='../components/videos/HOLZ_AW17_WEB-TEASER_R02.mp4', type='video/mp4')
</template>

<script>
export default {
  name: 'Home'
}
</script>

