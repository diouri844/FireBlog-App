<template>
    <nav class="">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2
              text-[#D5CEA3] hover:bg-gray-700
               hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="#mobile-menu"
              @click="this.showDropDown = !this.showDropDown"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <transition appear>
              <div
                class="flex flex-shrink-0 items-center text-blue-600 font-bold hover:opacity-90
                hover:text-blue-400 transition duration-150 ease-in-out pointer"
              >
                <router-link to="" class="text-[#D5CEA3] cursor:pointer text-sm">
                  <span>
                   <span class="text-[#E5E5CB] font-extrabold">F</span>ire-
                   <span class="text-[#E5E5CB] font-extrabold">B</span>log </span>
                </router-link>
              </div>
            </transition>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link
                  to=""
                  class="text-[#D5CEA3] hover:tex-white 
                  duration-500
                  px-3 py-2 rounded-md text-sm font-medium"
                  @click="SetTo('FolderList')"
                >
                  <i class="fas fa-folder"></i> folders
                </router-link>
                <router-link
                  to=""
                  class="text-[#D5CEA3] hover:text-white 
                  px-3 py-2 rounded-md text-sm font-medium"
                  @click="SetTo('OffersList')"
                >
                  <i class="fas fa-oil-can"></i> Jobs
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  @click="this.showProfileAction = !this.showProfileAction"
                  class="flex rounded-full 
                  text-sm focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
  
              <div
                v-show="showProfileAction"
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <span
                  @click="SetTo('Profile')"
                  class="block px-4 py-2 text-sm hover:font-bold text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  <i class="fas fa-user"></i> My account</span
                >
                <span
                  @click="SetTo('CreateAdmin')"
                  class="block px-4 py-2 text-sm hover:font-bold text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  <i class="fas fa-plus"></i> New Admin</span
                >
                <button
                  @click="LogoutMe()"
                  class="block px-4 py-2 text-sm hover:font-bold text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  <i class="fas fa-right-from-bracket"></i>
                  {{ this.Logout_txt }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" v-show="this.showDropDown" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <router-link
            to=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            @click="SetTo('FolderList')"
          >
            <i class="fas fa-folder"></i> folders
          </router-link>
          <router-link
            to=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            @click="SetTo('OffersList')"
          >
            <i class="fas fa-oil-can"></i> Jobs
          </router-link>
        </div>
      </div>
    </nav>
</template>
<script lang="ts">
  
  export default {
    data() {
      return {
        showProfileAction: false,
        showDropDown: false,
        Logout_txt: "Logout",
        AxiosBaseUrl: import.meta.env.VITE_AXIOS_BASE_URL,
      };
    },
    methods: {
      LogoutMe() {
          return;
      },
      SetTo(target:string) {
        // send a nested event :
        console.log(target);
        return;
      },
    },
  };
  </script>
  
  <style scoped>
  .preferd-text-color {
    color: #962b8d;
  }
  
  .preferd-second-text-color {
    color: #f3502a;
  }
  
  .preferd-bg-color {
    /*background-color: #962B8D;*/
    background-color: #152e4d;
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity 3.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  </style>