<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__inner">
        <div class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item"><a href="" class="menu__link">Home</a></li>
            <li class="menu__item"><a href="" class="menu__link">About</a></li>
            <li class="menu__item"><a href="" class="menu__link">Catalog</a></li>
            <li class="menu__item"><a href="" class="menu__link"></a>FAQ</li>
          </ul>
        </div>
        <div class="header__burger">
          <Burger @burgerClick="openMobileMenu"></Burger>
        </div>
        <div class="header__mobile-menu mobile-menu" v-if="isMobileMenu">
          <div class="mobile-menu__wrapper">
            <ul class="mobile-menu__list">
              <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Home</a></li>
              <li class="mobile-menu__item"><a href="" class="mobile-menu__link">About</a></li>
              <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Catalog</a></li>
              <li class="mobile-menu__item"><a href="" class="mobile-menu__link"></a>FAQ</li>
            </ul>
            <div class="mobile-menu__btn-close">
              <ButtonMain :btnTypes="['close', 'close_white']" @clickBtn="closeMobileMenu"></ButtonMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from "./ui/Burger.vue";
import ButtonMain from "./ui/ButtonMain.vue";

export default {
  components: {
    Burger,
    ButtonMain,
  },
  data() {
    return {
      isMobileMenu: false,
    };
  },
  methods: {
    openMobileMenu() {
        this.isMobileMenu = true;
    },
    closeMobileMenu() {
        this.isMobileMenu = false;
    }
  },
};
</script>

<style lang="scss">
.header {
  height: 80px;
  background-color: $color-white;
  color: $color-black;

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.menu {
  &__list {
    @include font($font, 14px, 400, 16px);
    color: $color-black;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    display: none;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $color-grey-background;

  &__wrapper {
    width: 80vw;
    height: 100%;
    background-color: $color-black-background;
    position: relative;
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
</style>
