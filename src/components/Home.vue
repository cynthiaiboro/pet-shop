<template>
  <v-container>
    <v-row class="" justify="center">
      <v-col cols="6" class="mt-8">
        <v-text-field
          variant="outlined"
          label="Search products"
          prepend-inner-icon="mdi-magnify"
          success
        ></v-text-field>
      </v-col>
    </v-row>

    <div class="">
      <div>
        <v-row class="" justify="space-around">
          <v-col cols="8" class="mt-8">
            <v-breadcrumbs
              :items="items"
              class="home-breadcrumbs"
            ></v-breadcrumbs>
          </v-col>
        </v-row>
        <v-row class="" justify="space-around">
          <v-col cols="8" class="mt-8">
            <v-img
              :src="require('@/assets/product.png')"
              class="my-1"
              contain
              height="500"
            />
          </v-col>
          <v-col cols="4" class="mt-8 d-flex align-center">
            <div>
              <h2 class="font-weight-regular">Brit Care</h2>
              <p>Endurance Duck & Rice</p>
              <p>Dry dog food</p>
              <h2 class="mb-5 font-weight-regular">200 kn</h2>
              <v-btn color="primary">
                <v-icon left> mdi-cart</v-icon>ADD TO CART
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row class="mb-10" justify="space-around">
          <v-col cols="8" class="mt-8">
            <div>
              <p class="text--black">
                Hypoallergenic superpremium complete feed for dogs. lamb & rice
                formula for adult dogs of medium breeds (10 – 25 kg).
              </p>
              <br />
              <br />
              <p>
                <span class="text--black">Composition:</span>
                <br />
                <br />

                lamb meat meal (38%), rice (37%), chicken fat, dried apple pulp,
                salmon oil (2%), chicken liver hydrolyzed, brewer´s yeast,
                glucosamine sulphate (260 mg/kg), chondroitine sulphate (160
                mg/kg), mannan-oligosaccharides (150 mg/kg),
                fructo-oligosaccharides (100 mg/kg), yucca Mojave (100 mg/kg),
                inulin (90 mg/kg), dried milk thistle (75 mg/kg), dried rosemary
                (50 mg/kg), dried cloves (50 mg/kg), dried citrus (50mg/kg),
                dried curcuma (50 mg/kg).
                <br />
                <br />
                <span class="text--black">Analytical ingredients:</span>
                <br />
                <br />

                crude protein 26.0%, crude fat 16.0%, moisture 10.0%, crude ash
                7.0%, crude fibre 2.9%, calcium 1.6%, phosphorus 1.3%, sodium
                0.2%.
                <br />
                <br />
                <span class="text--black">Nutritional composition:</span>
                <br />
                <br />
                vitamin A (3a672a) 20,000 I.U., vitamin D3 (3a671) 1,500 I.U.,
                vitamin E (3a700) 500 mg, vitamin C (3a312) 200 mg, choline
                chloride (3a890) 1,800 mg, biotin (3a880) 0.6 mg, vitamin B1
                (3a821) 5 mg, vitamin B2 (3a825i) 6 mg, niacinamide (3a315) 22
                mg, calcium-D-pantothenate (3a841) 15 mg, vitamin B6 (3a831) 5
                mg, folic acid (3a316) 0.6 mg, vitamin B12 0.05 mg, zinc (3b606)
                80 mg, iron (3b106) 70 mg, manganese (3b504) 35 mg, iodine
                (3b201) 0.65 mg, copper (3b406) 15 mg, selenium (3b810) 0.2 mg.
                Contains natural antioxidants: tocopherol extracts from
                vegetable oil (1b306(i)), ascorbyl palmitate (1b304) & rosemary
                extract.
                <br />
                <br />
                <span class="text--black">Metabolizable energy:</span>
                <br />
                <br />
                3,820 kcal/kg. Omega 3: 0.36 %, Omega 6: 1.90 %.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      items: [
        {
          text: "Homepage",
          disabled: true,
          href: "#",
        },
        {
          text: "Dogs",
          disabled: true,
          href: "#",
        },
        {
          text: "Dog food",
          disabled: true,
          href: "#",
        },
        {
          text: "Dry dog food",
          disabled: true,
          href: "#",
        },
        {
          text: "Brit Care Endurance",
          disabled: false,
          href: "#",
        },
      ],
    };
  },
};
</script>

<style></style>
