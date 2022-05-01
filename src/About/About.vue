<template>
  <div class = "row">
    <div class = "col-12">
      <v-card
      >
        <v-img
            height="255"
            src="../assets/images/others/background.jpg"
        ></v-img>

        <div class = "row">
          <div class = "col-12 me">
            <v-list-item-avatar size = "150px" style = "box-shadow: rgb(135 135 135 / 61%) 0px 0px 7px 2px">
              <v-img
                  class = "elevation-6"
                  alt = "profile.jpg"
                  src = "../assets/images/others/profile2.jpg"
                  min-height = "100"
              ></v-img>
            </v-list-item-avatar>
          </div>
          <div class = "col-12">
            <v-card-title>
              <v-icon
                  large
                  left
              >
                mdi-account
              </v-icon>
              <span class = "text-h4 font-weight-light">Yoyal Limbu</span>
            </v-card-title>

            <v-card-text class = "text-h2 font-weight-bold">
              Namaste
              <v-img max-width = "100px" style = "display: inline-block" src = "../assets/images/others/namaste.png"></v-img>
              .<br>
              I am a Software Engineer/Backend Developer.<br>
            </v-card-text>

            <v-card-actions>
              <v-list-item class = "grow">
                <v-list-item-content>

                  <v-list-item-title>
                    <v-icon class = "mr-1">
                      mdi-crosshairs-gps
                    </v-icon>
                    Nepal, Kathmandu ,Budhanilkantha 10
                  </v-list-item-title>
                </v-list-item-content>
                <v-row
                    align = "center"
                    justify = "end"
                >
                  <a href = "https://www.facebook.com/thamsuhang.yoel/" target = "_blank">
                    <v-icon class = "mr-1">
                      mdi-facebook
                    </v-icon>
                  </a>
                  <a href = "https://codepen.io/y0000el" target = "_blank">
                    <v-icon class = "mr-1">
                      mdi-codepen
                    </v-icon>
                  </a>
                  <a href = "https://www.linkedin.com/in/yoyal-limbu/" target = "_blank">
                    <v-icon class = "mr-1">
                      mdi-linkedin
                    </v-icon>
                  </a>
                  <a href = "https://github.com/y000yal" target = "_blank">
                    <v-icon class = "mr-1">
                      mdi-github
                    </v-icon>
                  </a>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </div>
        </div>

      </v-card>
    </div>

  </div>
</template>

<script>
import about from './about.json'

export default {
  name: "About",
  data() {
    return {
      carousel: about.carousel
    }
  }
}
</script>

<style scoped>
.me {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: -65px;
  transition: flex-end 1s ease-in-out;
}

.v-image {
  transition: .3s ease-in-out;
}

.me .v-image:hover {
  cursor: pointer;
  transform: scale(2);
  transition: .3s ease-in-out;
}

.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0 !important;
}

@media only screen and (max-width: 768px) {
  .me {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    transition: flex-end 1s ease-in-out;
  }
}

@media only screen and (max-width: 465px) {
  .me {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    margin-top: -55px;
    transition: flex-end 1s ease-in-out;
  }

  .v-avatar {
    min-width: 80px !important;
    width: 80px !important;
    height: 80px !important;
  }
}

.v-avatar {
  transition: .3s ease-in-out;
}

.v-card__text, .v-card__title {
  text-align: left;
}
</style>