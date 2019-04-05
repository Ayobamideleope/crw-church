<template>
  <div class="app-card__container">
    <v-hover>
      <article
        slot-scope="{ hover }"
        :class="[
          hover ? 'elevation-10' : 'elevation-20',
          'transition-ease-in-out'
        ]"
        style="border-radius: 8px; min-height: 250px; max-height: 310px; width: 220px; overflow: hidden; position: relative;"
      >
        <v-img
          :src="image"
          height="128px"
          width="100%"
          gradient="to top, #0009, #0006 24px, #0000 24px"
          style="background-color: var(--v-secondary-base)"
        />

        <div
          class="caption mb-3 px-2 text-overflow-hidden"
          style="position: absolute; top: 107px; left: 0; width: 100%; color: #fafafa;"
        >
          <v-icon dark small style="margin-bottom: -1px;">access_time</v-icon>
          <span class="">{{ dateTime | extractSimpleTime }}</span
          >,
          <span class="ml-1">{{ dateTime | extractSimpleDate }}</span>
        </div>

        <div class="pt-3 pb-2 px-2 transition-ease-in-out">
          <h4
            class="body-2 font-weight-bold mb-1 text-truncate"
            v-text="title"
          />

          <p
            class="body-1 mb-1"
            style="max-height: 84px; overflow: hidden;"
            v-text="description"
          />

          <v-layout wrap justify-center>
            <v-flex shrink
              ><v-btn
                icon
                outline
                color="secondary"
                class="mb-2"
                :title="ctaSecondaryTitle"
                ><v-icon v-text="ctaSecondaryIcon"/></v-btn
            ></v-flex>
            <v-flex shrink
              ><v-btn
                icon
                color="secondary"
                class="mb-2 elevation-10"
                :title="ctaPrimaryTitle"
                ><v-icon v-text="ctaPrimaryIcon"/></v-btn
            ></v-flex>
          </v-layout>
        </div>
      </article>
    </v-hover>
  </div>
</template>

<script>
export default {
  filters: {
    extractSimpleTime(dateTime) {
      if (!dateTime) return ''

      dateTime = dateTime.toString()

      return '4pm'
    },
    extractSimpleDate(dateTime) {
      return 'April 20, 2019'
    }
  },

  props: {
    title: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: [String, Function]
    },
    dateTime: {
      required: true,
      type: Date
    },
    description: {
      required: true,
      type: String
    },

    ctaPrimaryTitle: {
      type: String,
      default: 'Add to Calender'
    },

    ctaPrimaryIcon: {
      type: String,
      default: 'alarm_add'
    },

    ctaPrimaryAction: {
      type: String,
      required: true
    },

    ctaSecondaryTitle: {
      type: String,
      default: 'More Info'
    },

    ctaSecondaryIcon: {
      type: String,
      default: 'remove_red_eye'
    },

    ctaSecondaryAction: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped></style>
