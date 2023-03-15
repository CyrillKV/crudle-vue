<template>
  <header class="header">
    <div class="logo">CRUDle</div>

    <div class="profile header__profile">
      <div class="profile__user">
        <p>Username</p>
      </div>
      <div class="profile__avatar">X</div>
    </div>

    <button class="header__login-button">Login</button>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 $layout-sides;
  background-color: $bg-main;
  box-shadow: $shadow;
}
.header__profile {
  margin-left: auto;
  margin-right: 30px;
}
.profile {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
}
.profile__avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: $accent;
  color: $bg-main;

  &:hover {
    cursor: pointer;
  }
}
.logo {
  color: $btn;
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: -2px;
}
.header__login-button {
  border: none;
  background-color: $btn;
  color: $bg-main;
  border-radius: 20px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
}

@media screen and (max-width: 520px) {
  .header {
    padding: 0 $pd-sm;
  }
  .header__profile {
    margin-right: 20px;
  }
  .profile {
    gap: 10px;
  }
}
</style>
