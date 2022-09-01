<template>
  <AppBar />
  <section flex="~ auto" p="l-13%">
    <section flex="~ auto col" w="20%" border="r-1 slate-600">
      <SubscriptionList></SubscriptionList>
    </section>
    <section flex="auto" w="80%">
      <router-view></router-view>
    </section>
  </section>
</template>

<style scoped>

</style>
