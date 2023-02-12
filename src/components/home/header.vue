<template>  
  <div>
    <v-img
      src="@/assets/guitar-shop/bannercopy.jpg"
    >
    <template v-slot:placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
    </v-img>
  </div>
</template>

<script>

export default {
  
}
</script>