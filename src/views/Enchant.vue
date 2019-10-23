<template>
  <div class="enchant">
    <b-container>
      <h1>
        create magic items
      </h1>
      <b-button v-b-modal="'my-modal'">Create Card</b-button>

      <!-- The modal -->
      <b-modal 
        id="my-modal"
        title="create new item card"
      >
        <ItemCard />
      </b-modal>
      <ItemCard 
        name="Adamantine Armor" 
        rarity="uncommon" 
        category="armor" 
        description="This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit."
        icon="shield-alt"
      />
      <ItemCard />
    </b-container>
  </div>
  
</template>

<script>
// @ is an alias to /src
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: "item-card",
  components: {
    ItemCard
  }
};
</script>