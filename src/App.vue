<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand to="/">min-d&d</b-navbar-brand>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/enchant">enchant</b-nav-item>
            <b-nav-item to="/fight">fight</b-nav-item>
            <b-nav-item to="/monster">monster</b-nav-item>
            <b-nav-item to="/treasure">treasure</b-nav-item>
            <b-nav-item to="/dungeon">dungeon</b-nav-item>
            <b-nav-item to="/spell">spell</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        
        
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
