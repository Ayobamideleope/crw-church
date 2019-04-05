<template>
  <section class="white pt-5 pb-4 mx-auto">
    <v-container>
      <v-layout wrap justify-space-between>
        <v-flex
          tag="header"
          xs12
          grow
          order-sm2
          sm8
          md7
          lg6
          class="our-programs__header text-xs-center text-sm-right pb-4"
        >
          <h2 class="display-2 font-weight-bold mb-4">OUR PROGRAMS</h2>

          <p class="our-programs__header__description">
            We hold different kinds of programs that helps the lives of many.
            From young to old to people of different backgrounds and
            professions.
          </p>

          <v-layout wrap class="our-programs__header__actions">
            <v-flex shrink>
              <v-btn
                :class="{
                  'app-btn--slope-left': $vuetify.breakpoint.smAndUp,
                  'v-btn--large': $vuetify.breakpoint.mdAndUp
                }"
                color="accent"
                raised
                >Upcoming</v-btn
              >
            </v-flex>
            <v-flex shrink>
              <v-btn
                color="secondary"
                :large="!$vuetify.breakpoint.smAndDown"
                outline
                raised
                >View More</v-btn
              >
            </v-flex>
          </v-layout>

          <v-layout wrap class="our-programs__categories py-4">
            <flex shrink>
              <app-small-card class="primary" title="Counselling" />
            </flex>

            <flex shrink>
              <app-small-card class="success" title="Empowerment" />
            </flex>

            <flex shrink>
              <app-small-card class="secondary" title="Seminars" />
            </flex>

            <flex shrink>
              <app-small-card
                class="info category__reaching-the-disabled"
                title="Reaching the Disabled"
              />
            </flex>
          </v-layout>
        </v-flex>

        <v-flex
          shrink
          tag="content"
          xs12
          order-sm1
          sm4
          md5
          lg6
          class="our-programs__featured mb-4"
        >
          <v-layout wrap class="our-programs__feactured__container">
            <v-flex shrink>
              <h5 class="up-next-text">
                <v-icon small class="font-weight-bold">access_time</v-icon>
                UP NEXT
              </h5>
            </v-flex>

            <v-flex shrink>
              <v-layout>
                <v-flex shrink class="mr-4">
                  <app-program-card
                    :image="
                      require('~/assets/img/categories/cup-of-coffee.jpg')
                    "
                    :date-time="new Date('2019, April 21')"
                    title="Easter Celebration Service"
                    description="Easter Service joined with our gracious Sunday Service"
                    cta-primary-action="go_somewhere"
                    cta-secondary-action="go_somewhere"
                  />
                </v-flex>

                <v-flex shrink class="hidden-md-only hidden-sm-only">
                  <app-program-card
                    :image="
                      require('~/assets/img/categories/cup-of-coffee.jpg')
                    "
                    :date-time="new Date('2019, April 20')"
                    title="Easter Feast with God"
                    description="It's time to enjoy The Bread of Life in His presence as we celebrate easter. Come andy trying to make it overflowing be filled."
                    cta-primary-action="go_somewhere"
                    cta-secondary-action="go_somewhere"
                  />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <nuxt-link tag="article"></nuxt-link> -->
  </section>
</template>

<script>
import AppProgramCard from '@/components/UI/Card/AppProgramCard'
import AppSmallCard from '@/components/UI/Card/AppSmallCard'

export default {
  components: {
    AppProgramCard,
    AppSmallCard
  },

  data() {
    return {
      upcomingPrograms: [],
      programTypes: []
    }
  },

  computed: {
    slicedUpcomingPrograms() {
      return this.upcomingPrograms.slice(0, 2)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/variables.styl'


.our-programs__header {
/*   padding: 0; */

  @media $display-breakpoints.sm-and-up {
    padding-left: 24px;
  }

  &__actions {
    justify-content: center;

    @media $display-breakpoints.sm-and-up {
    justify-content: flex-end;
    }
  }

  &__description {
    @media $display-breakpoints.sm-and-up {
      padding-left: 16px;
    }
  }
}

.our-programs__featured {

  @media $display-breakpoints.sm-only {
    margin-top: 48px;
  }

  @media $display-breakpoints.md-and-up {
    margin-top: 80px;
  }
}

.our-programs__feactured__container {
  @media $display-breakpoints.xs-only {
    justify-content: center;
  }
}

.up-next-text {
  margin-bottom: 16px;
  flex-basis: 100%;
  max-width: 100%;

  @media $display-breakpoints.md-and-up {
    writing-mode: vertical-rl; text-orientation: upright;
    margin-right: 16px !important;
    margin-bottom: unset;
  }
}

.our-programs__categories {
  justify-content: center;

  @media $display-breakpoints.sm-and-up {
    justify-content: flex-end;
  }

  & .title {
    @media $display-breakpoints.sm-only {
      font-size: 16px !important;
    }
  }

  & img {
    @media $display-breakpoints.sm-only {
      height: 32px !important;
      width: 32px !important;
    }
  }
}
</style>

<style>
.category__reaching-the-disabled .title {
  font-size: 16px !important;
}
</style>
