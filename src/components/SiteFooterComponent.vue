<template>
  <footer>
    <div class="footer-top py-4">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="social">
              <div class="logo">
                <img src="@/assets/img/logo-200x34.png" alt="logo" />
              </div>
              <p class="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                sunt iure similique suscipit quasi. Et, recusandae.
                Voluptatibus, perferendis ab aperiam.
              </p>
              <div class="social-action">
                <font-awesome-icon
                  class="icon"
                  icon="fa-brands fa-facebook-f"
                />
                <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <font-awesome-icon
                  class="icon"
                  icon="fa-brands fa-linkedin-in"
                />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="recent-posts">
              <h4>Recent Posts</h4>
              <ul>
                <li v-for="(recentPost, index) in recentPosts" :key="index">
                  <a href="#">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    {{ recentPost }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4">
            <div class="contacts">
              <h4>Contact Information</h4>
              <p class="address">4746 Tippòe Rpad Michigan 48449</p>
              <div class="mobile">Mobile: 1.800.000.0000</div>
              <div class="email">Email: info@your-company.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-2">
      <font-awesome-icon icon="fa-regular fa-copyright" /> Copyright 2012 - 2020
      | Avada Theme by <span>ThemeFusion</span> | All rights reserved | Powered
      by <span>WordPress</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooterComponent",
  data() {
    return {
      recentPosts: [
        "The best protein shake",
        "Ultimate cardio workout",
        "New juices available now",
        "Tips to find training parteners",
        "20 best healthy recipes",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $darkestColor;
  .footer-top {
    text-align: center;
    color: $lightestColor;
    border-bottom: 1px solid #0d0d10;
    .social {
      p {
        line-height: 1.5rem;
        color: $footerPalelightColor;
      }
      .social-action {
        color: $liteAlertColor;
        .icon {
          margin: 0 0.25rem;
          padding: 0 0.25rem;
        }
      }
    }
    h4 {
      text-transform: uppercase;
      line-height: 40px;
    }
    .recent-posts {
      li {
        margin: 0.5rem 0;
        padding: 0.5rem 0;
      }
    }
    .contacts {
      .address {
        color: $footerPalelightColor;
        padding: 1rem 0;
      }
      .mobile,
      .email {
        margin: 0.5rem;
      }
    }
  }
  .footer-bottom {
    color: $footerLightDarkColor;
    text-align: center;
    .fa-copyright {
      font-size: 0.75rem;
      vertical-align: super;
    }
    span {
      color: $lightestColor;
    }
  }
}
</style>