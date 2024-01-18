<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__inner">
        <div class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item"><router-link class="menu__link" to="/">Home</router-link></li>
            <li class="menu__item"><router-link class="menu__link" to="/about">About</router-link></li>
            <li class="menu__item"><router-link class="menu__link" to="/catalog">Catalog</router-link></li>
            <li class="menu__item"><router-link class="menu__link" to="/faq">FAQ</router-link></li>
          </ul>
        </div>
        <div class="header__burger">
          <Burger @burgerClick="openMobileMenu"></Burger>
        </div>

        <div class="header__mobile-menu mobile-menu">
          <transition name="fade">
            <div class="mobile-menu__overlay" @click="closeMobileMenu" v-if="isMobileMenu"></div>
          </transition>
          <transition name="slide">
            <div class="mobile-menu__list-wrapper" v-if="isMobileMenu">
              <ul class="mobile-menu__list">
                <li class="mobile-menu__item"><router-link to="/" class="mobile-menu__link">Home</router-link></li>
                <li class="mobile-menu__item"><router-link to="/about" class="mobile-menu__link">About</router-link></li>
                <li class="mobile-menu__item"><router-link to="/catalog" class="mobile-menu__link">Catalog</router-link></li>
                <li class="mobile-menu__item"><router-link to="/faq" class="mobile-menu__link">FAQ</router-link></li>
              </ul>
              <div class="mobile-menu__btn-close">
                <ButtonMain :btnTypes="['close', 'close_white']" @clickBtn="closeMobileMenu"></ButtonMain>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from "./ui/Burger.vue";
import ButtonMain from "./ui/ButtonMain.vue";

export default {
  name: "Header",
  components: {
    Burger,
    ButtonMain,
  },
  data() {
    return {
      isMobileMenu: false,
    };
  },
  watch: {
    $route() {
      this.closeMobileMenu();
    },
  },
  methods: {
    openMobileMenu() {
      this.isMobileMenu = true;
    },
    closeMobileMenu() {
      this.isMobileMenu = false;
    },
  },
};
</script>

<style lang="scss">
.header {
  height: 80px;
  color: $color-black;

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  &__list-wrapper {
    width: 80vw;
    height: 100vh;
    background-color: $color-black-background;
    position: relative;
  }

  &__overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: $color-grey-background;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    height: 100%;
  }

  &__link {
    @include font($font, 20px, 400, 1em);
    color: $color-white;
  }

  &__btn-close {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

.menu {
  display: none;

  &__list {
    @include font($font, 14px, 400, 16px);
    color: $color-black;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
  }
}

.mobile-menu,
.menu {
  &__item {
    &:hover {
      & .menu__link {
        color: $color-text-yellow;
      }
    }

    & .router-link-exact-active {
      color: $color-text-yellow;
    }
  }

  &__link {
    transition: color $transition-main;
  }
}

@media screen and (min-width: 576px) {
  .mobile-menu {
    display: none;
  }

  .menu {
    display: block;
  }
}
</style>
