<template>
  <section class="footer-block">
    <div class="footer-block__container">
      <div class="footer-block__logo-group">
        <GuiLogotype
          class="footer-block__main-logo"
          logotype="mainLogo"
        ></GuiLogotype>
        <img src="/logotype/partnersLogo.svg" />
      </div>
      <div class="footer-block__phone-number">8 800 200-47-66</div>
      <div class="footer-block__information">
        <div class="footer-block__menu-navigation">
          <ul class="footer-block__menu-list">
            <router-link
              :to="item.path"
              class="footer-block__menu-item"
              v-for="(item, index) in firstBlock"
              :key="index"
            >
              {{ item.label }}
            </router-link>
          </ul>
          <ul class="footer-block__menu-list">
            <router-link
              :to="item.path"
              class="footer-block__menu-item"
              v-for="(item, index) in secondBlock"
              :key="index"
            >
              {{ item.label }}
            </router-link>
          </ul>
        </div>
        <div class="footer-block__text-bottom">
          © 2009-2019 Южный Банк. Лицензия № 383/2 от 16 июня 2009 года
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiLogotype from "../gui/GuiLogotype.vue";

export default {
  components: { GuiLogotype },
  data() {
    return {
      firstBlock: [
        { label: "На главную", path: "/" },
        { label: "Новости", path: "/news" },
        { label: "О Фонде", path: "/about" },
      ],
      secondBlock: [
        { label: "Для бизнеса", path: "/business" },
        {
          label: "Калькулятор",
          path: "/#calculator-block",
        },
        { label: "Инвестиционная деятельность", path: "/investing" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-block {
  border-top: 1px solid $gray5;
  &__container {
    width: 100%;
    margin: 0 auto;
    padding: 24px;
  }

  &__logo-group {
    display: block;

    @media screen and (min-width: 576px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__main-logo {
    margin-bottom: 24px;
    margin-right: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
    }
  }

  &__phone-number {
    font-size: 18px;
    font-weight: 600;
    margin: 48px 0 24px;
  }

  &__information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 992px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  &__menu-navigation {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__menu-list {
    margin-right: 72px;
  }

  &__menu-item {
    display: block;
    max-width: 360px;
    font-size: 16px;
    line-height: 24px;
    color: $gray2;
    margin-bottom: 12px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $gray4;
    }
  }

  &__text-bottom {
    font-size: 13px;
    line-height: 24px;
    color: $gray2;
    margin-bottom: 12px;
  }
}
</style>
