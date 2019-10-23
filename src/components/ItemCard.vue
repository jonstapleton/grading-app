<template>
  <div class="item-card">
    <b-card>
      <!-- <b-container> -->
      <b-row>
        <b-col cols="10">
          <b-card-title title-tag="h3">{{name}}</b-card-title>
          <b-card-sub-title><i>{{category}}, {{rarity}}</i></b-card-sub-title>
        </b-col>
        <b-col cols="2" class="mx-auto">
          <!-- <b-button variant="outline-secondary"> -->
            <fa-icon :icon="icon" size="3x"></fa-icon>
          <!-- </b-button> -->
        </b-col>
      </b-row>

      <!-- </b-container> -->
      <hr>
      <b-card-text>
        {{description}}
      </b-card-text>

      <b-container>
        <b-form-row>
          <b-col>
            <b-form inline>
              <label for="spell-name">Spell:</label>
              <b-input
                id="spell-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="ex. Fireball"
              ></b-input>
              <b-button variant="primary">c</b-button>
            </b-form>
          </b-col>
          <b-col cols="2">
            <label for="spell-level">Level</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-input id="spell-level"></b-input>
            </b-input-group>
          </b-col>



        </b-form-row>
      </b-container>

      <b-table-simple>
        <tbody>
          <tr>
            <th scope="row">Total Cost</th>
            <td>Sentinel at Death's Door</td>
          </tr>
          <tr>
            <th scope="row">Time Required</th>
            <td>000</td>
          </tr>
          <tr>
            <th scope="row">Cost/Day</th>
            <td>000</td>
          </tr>
        </tbody>
      </b-table-simple>

    </b-card>
  </div>

</template>

<script>
export default {
  name: "ItemCard",
  props: {
    name: String,
    type: Number,
    category: String,
    rarity: String,
    attunement: Boolean,
    price: Number,
    description: String,
    buffs: Array,
    spell: Array,
    icon: String,
  },
};
</script>
