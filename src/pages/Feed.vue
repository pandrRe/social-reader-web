<template>
  <AppBar />
  <section flex="~ auto">
    <section flex="~ auto col" w="25vw">
      <SubscriptionList></SubscriptionList>
    </section>
    <section flex="~ auto" w="75vw">
      <router-view></router-view>
    </section>
  </section>
</template>

<style scoped>

</style>
