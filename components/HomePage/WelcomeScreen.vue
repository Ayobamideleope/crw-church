<template>
  <section class="welcome-screen">
    <picture>
      <source
        srcset="~/assets/img/welcome-screen-background-desktop.jpg"
        media="(min-width: 600px)"
      />

      <img
        src="~/assets/img/welcome-screen-background-mobile.jpg"
        class="welcome-screen-background-image"
      />
    </picture>

    <div class="welcome-screen-overlay-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        data-name="welcome-screen-svg--mobile"
        viewBox="0 0 990 1080"
        preserveAspectRatio="xMinYMax slice"
        class="hidden-sm-and-up welcome-screen-svg--mobile"
      >
        <defs>
          <linearGradient
            id="welcome-screen-svg--mobile__a"
            x1="1016.22"
            x2="953.68"
            y1="57.22"
            y2="255.93"
            gradientTransform="matrix(0 1 1 0 -45.5 45.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e53935" />
            <stop offset=".1" stop-color="#e53935" stop-opacity=".96" />
            <stop offset=".27" stop-color="#e53935" stop-opacity=".85" />
            <stop offset=".48" stop-color="#e53935" stop-opacity=".66" />
            <stop offset=".73" stop-color="#e53935" stop-opacity=".41" />
            <stop offset="1" stop-color="#e53935" stop-opacity=".1" />
          </linearGradient>
          <linearGradient
            id="welcome-screen-svg--mobile__b"
            x1="973.85"
            x2="773.99"
            y1="62.37"
            y2="663.2"
            xlink:href="#welcome-screen-svg--mobile__a"
          />
          <linearGradient
            id="welcome-screen-svg--mobile__c"
            x1="628.69"
            x2="-157.75"
            y1="119.83"
            y2="1081"
            gradientTransform="matrix(0 1 1 0 -45.5 45.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e53935" />
            <stop offset=".27" stop-color="#e73d31" />
            <stop offset=".55" stop-color="#ee4a24" />
            <stop offset=".85" stop-color="#f85f0e" />
            <stop offset="1" stop-color="#ff6d00" />
          </linearGradient>
        </defs>
        <path
          fill="url(#welcome-screen-svg--mobile__a)"
          d="M174 1022l25-34-199 65 .27 27.1L174 1022z"
          opacity=".9"
        />
        <path
          fill="url(#welcome-screen-svg--mobile__b)"
          d="M592 843l19.73-33.1L0 1010l.27 27.1L592 843z"
          opacity=".9"
        />
        <path
          class="trapezium"
          fill="url(#welcome-screen-svg--mobile__c)"
          d="M0 0v990l990-330V0H0z"
        />
      </svg>

      <!-- welcome-screen-svg--desktop -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        data-name="welcome-screen-svg--desktop"
        viewBox="0 0 1080 990"
        preserveAspectRatio="xMaxYMin slice"
        class="hidden-xs-only welcome-screen-svg--desktop"
      >
        <defs>
          <linearGradient
            id="welcome-screen-svg--desktop__a"
            x1="640.22"
            x2="577.68"
            y1="433.22"
            y2="631.93"
            gradientTransform="translate(421.5 -421.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e53935" />
            <stop offset=".1" stop-color="#e53935" stop-opacity=".96" />
            <stop offset=".27" stop-color="#e53935" stop-opacity=".85" />
            <stop offset=".48" stop-color="#e53935" stop-opacity=".66" />
            <stop offset=".73" stop-color="#e53935" stop-opacity=".41" />
            <stop offset="1" stop-color="#e53935" stop-opacity=".1" />
          </linearGradient>
          <linearGradient
            id="welcome-screen-svg--desktop__b"
            x1="597.85"
            x2="397.99"
            y1="438.37"
            y2="1039.2"
            xlink:href="#welcome-screen-svg--desktop__a"
          />
          <linearGradient
            id="welcome-screen-svg--desktop__c"
            x1="252.69"
            x2="-533.75"
            y1="495.83"
            y2="1457"
            gradientTransform="translate(421.5 -421.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e53935" />
            <stop offset=".27" stop-color="#e73d31" />
            <stop offset=".55" stop-color="#ee4a24" />
            <stop offset=".85" stop-color="#f85f0e" />
            <stop offset="1" stop-color="#ff6d00" />
          </linearGradient>
        </defs>
        <path
          fill="url(#welcome-screen-svg--desktop__a)"
          d="M1022 174l-34 25 65-199 27.1.27L1022 174z"
          opacity=".9"
        />
        <path
          fill="url(#welcome-screen-svg--desktop__b)"
          d="M843 592l-33.1 19.73L1010 0l27.1.27L843 592z"
          opacity=".9"
        />
        <path
          class="trapezium"
          fill="url(#welcome-screen-svg--desktop__c)"
          d="M0 0h990L660 990H0V0z"
        />
      </svg>

      <v-layout tag="header" align-center class="welcome-screen-header">
        <v-flex xs12>
          <h1 class="display-4 font-weight-bold" style="margin-left: -6px;">
            CRW
          </h1>
          <h3 class="display-1 font-weight-bold" style="margin-top: -10px;">
            CHURCH
          </h3>
          <h4 class="headline mt-3">The place to experience the Love of God</h4>
          <v-btn
            large
            class="app-btn--slope-right mt-4 secondary--text font-weight-bold"
            color="accent"
            style="margin-left: 0;"
            >Join Us</v-btn
          >
        </v-flex>
      </v-layout>
    </div>

    <!-- <v-icon
      dark
      large
      color="primary"
      class="arrow-down"
      style="position: absolute; bottom: 30px; left: 50%;"
      >arrow_downward</v-icon
    > -->
  </section>
</template>

<script>
export default {
  name: 'WelcomeScreen'
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/variables.styl'

.welcome-screen {
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;

  @media $display-breakpoints.sm-and-up {
    min-height: unset ;
  }
}

.welcome-screen-overlay-container {
  position: relative;
  min-height: 70vh;

  @media $display-breakpoints.sm-and-up {
    min-height: unset;
    width: 60vw;
    max-width: 70vw;
  }
}

.welcome-screen-background-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 70vh;
  width: 100%;
  object-fit: cover;

  @media $display-breakpoints.sm-and-up {
    height: 100%;
    /* height: 100vh; */
    width: 80vw;
    left: unset;
    right: 0;
    object-position: center right;
  }
}

.welcome-screen-svg--mobile {
  position: absolute;
  height: calc(100% + 50px);
  width: 100%;
  left: 0;
  top: 0;
}

.welcome-screen-svg--desktop {
  position: absolute;
  /* height: 100vh; */
  height: 100%;
  min-width: 60vw;
  max-width: 80vw;
  left: 0;
  top: 0;
}

.welcome-screen-header {
  padding: 90px 30px 50px 20px;
  position: relative;
  min-height: inherit;

  @media $display-breakpoints.sm-and-up {
    padding-left: 30px;
    padding-right: 120px;
    padding-bottom: 100px;
  }
}

.trapezium {
  transform: translateY(-30px);
  animation: slide-down 2s ease-in forwards;
}

.arrow-down {
  animation: arrow-slide-Down 3s ease-in-out 2s infinite forwards;
}

@keyframes slide-down {
  from {
    transform: initial;
  }
  to {
    transform: translateY(0);
  }
}

@keyframes arrow-slide-Down {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(-50%) translateY(20px);
  }
}
</style>
