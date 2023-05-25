<template>
    <section>
      <h2>Regular Icons</h2>
      <p class="info">All found on <a href="https://icomoon.io/" target="_blank">Icomoon</a>, using the Vicons set</p>
      <p>
        <!--you can pass in a smaller width and height as props-->
        <icon-base width="12" height="12" icon-name="catalog" viewBox="0 0 256 256"><icon-catalog /></icon-base> 
        <!--or you can use the default, which is 18-->
        <icon-base icon-name="catalog" viewBox="0 0 256 256"><icon-catalog /></icon-base>
        <!--or make it a little bigger too :) -->
        <icon-base width="30" height="30" icon-name="catalog" viewBox="0 0 256 256"><icon-catalog /></icon-base>
        <br>
        You can make inline icons of any size by passing props.
      </p>
      <p style="color:red">
        <!--you can change the color of the text, and the icons will automatically change color as well-->
        <icon-base icon-name="cart"><icon-cart/></icon-base>
        These red inline icons are automatically styled according to the text color.
      </p>
      <p>
        <!--because the base is consistent, you can use multiple icons on the same line and they're all in order-->
        <icon-base icon-name="cart" icon-color="#00ad74"><icon-cart /></icon-base>
        <icon-base icon-name="catalog" viewBox="0 0 256 256"><icon-catalog /></icon-base>
        <icon-base icon-name="menu" icon-color="#00ad74" viewBox="0 0 512 512"><icon-menu /></icon-base>
        <icon-base icon-name="minus" icon-color="#00ad74"><icon-minus /></icon-base>
        <icon-base icon-name="plus" ><icon-plus /></icon-base>
        <br>
        <icon-base viewBox="0 0 256 256"><icon-catalog /></icon-base>
        You can use whatever icon you want and keep the base consistent with slots
      </p>
    </section>
  </template>
  
  <script>
  import IconBase from '@/components/UI/IconBase.vue'
  import IconCart from '@/components/UI/icons/IconCart.vue'
  import IconCatalog from '@/components/UI/icons/IconCatalog.vue'
  import IconMenu from '@/components/UI/icons/IconMenu.vue'
  import IconMinus from '@/components/UI/icons/IconMinus.vue'
  import IconPlus from '@/components/UI/icons/IconPlus.vue'
  
  export default {
    components: {
      IconBase,
      IconCart,
      IconCatalog,
      IconMenu,
      IconMinus,
      IconPlus,
    }
  }
  </script>
  