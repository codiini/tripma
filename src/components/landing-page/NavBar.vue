<template>
  <div class="navbar">
    <div class="navbar_logo">
      <img
        src="https://res.cloudinary.com/codiini/image/upload/v1616765127/tripma-blue_mausgl.svg"
        alt="Tripma Logo"
      />
    </div>
    <div class="md:hidden cursor-pointer">
      <img src="../../assets/menu.svg" alt="Hamburger menu" />
    </div>
    <div class="navbar_links hidden md:flex">
      <ul class="navbar_link_group flex items-center">
        <li class="navbar_link"><a href="#">Flights</a></li>
        <li class="navbar_link"><a href="#">Hotels</a></li>
        <li class="navbar_link"><a href="#">Packages</a></li>
        <li class="navbar_link">
          <a href="#" elevation="0">Sign in</a>
        </li>
        <li class="navbar_link">
          <v-btn elevation="0" color="#605DEC" class="white--text"
            >Sign up</v-btn
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-application a {
  color: #605dec;
}
.v-btn {
  text-transform: none;
  border-radius: 4px;
  width: 95px;
  height: 48px;
}
.navbar {
  height: 96px;
}
.navbar,
.navbar_link_group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
}
.navbar_link {
  margin: 0 16px;
}
</style>