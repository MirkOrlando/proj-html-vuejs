<template>
  <div class="badges">
    <div class="demo">
      <div class="icon">
        <font-awesome-icon icon="fa-regular fa-folder-open" />
      </div>
      <div class="text">Demos</div>
    </div>
    <div class="price">
      <div class="number"><span>$</span>39</div>
      <div class="text">On Sale</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgesComponent",
};
</script>

<style lang="scss" scoped>
.badges {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 8rem;
  right: 0.5rem;
  color: #33475b;
  z-index: 90;
  .text {
    font-size: 0.75rem;
  }
  .demo,
  .price {
    background-color: $lightestColor;
    width: fit-content;
    padding: 0.25rem;
    margin: 0.25rem;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid #33475b;
  }
  .demo {
    .icon {
      font-size: 2rem;
    }
  }
  .price {
    .number {
      color: #65bc7b;
      font-size: 2rem;
      span {
        font-size: 1rem;
        vertical-align: super;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .badges {
    display: none;
  }
}
</style>