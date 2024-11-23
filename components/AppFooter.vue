<template>
  <div>
    <footer style="padding: 10px; background-color: orange">
      <input
        type="text"
        :value="firstName"
        @input="updateFirestName"
        style="border: 1px solid red"
      />

      <input
        type="text"
        :value="LastName"
        @input="$emit('update:LastName', $event.target.value)"
        style="border: 1px solid red"
      />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>

      <div id="serverX" class="bg-blue-500">serverX</div>
      <client-only>
        <div id="clientX">clientX</div>
      </client-only>
      <!-- <div v-for="Item in results">{{ Item }}</div> -->

      <!-- <c-container>
        <input type="text" v-model="name" style="border: 2px solid green" />
        <input
          type="text"
          v-model="fatherName"
          style="border: 2px solid green"
        />
        <div v-if="loading">loading...</div>
        <v-row v-else>
          <v-col cols="4" v-for="item in results" :key="item.id">
            <v-card class="d-flex justify-center flex-column">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>{{ item.body }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </c-container> -->
    </footer>
    {{ firstNameXX }}
    {{ lastNameXX }}
    {{ fullNameXX }}
  </div>
</template>
<script>
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onBeforeMount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  watch,
  watchEffect,
} from "vue";
import useAPI from "@/use/api";
export default {
  setup() {
    const name = ref("mahmoudX");
    const fatherName = ref("mostafa");

    watch(
      [name, fatherName],
      ([nameNew, nameOld], [fatherNameNew, fatherNameOld]) => {
        console.log(nameNew, nameOld, fatherNameNew, fatherNameOld);
      }
    );
    onMounted(() => {
      console.log("onMounted");
    });
    const { results, loading, errors, call } = useAPI();
    call("https://jsonplaceholder.typicode.com/posts");

    const userInfo = reactive({
      firstNameXX: ref("mahmoudXX"),
      lastNameXX: ref("mahmoudXX"),
      fullNameXX: computed(() => {
        return userInfo.firstNameXX + "--" + userInfo.lastNameXX;
      }),
    });

    const firstNameX = ref("mahmoudX");
    const lastNameX = ref("mahmoudX");
    const fullName = computed(() => {
      return firstNameX.value + " " + lastNameX.value;
    });

    return {
      firstNameX,
      lastNameX,
      fullName,
      ...toRefs(userInfo),
      results,
      loading,
      name,
      fatherName,
    };
  },

  props: {
    firstName: String,
    firstNameModifiers: { default: () => ({}) },
    LastName: String,
  },
  methods: {
    updateFirestName(event) {
      let value = event.target.value;
      if (this.firstNameModifiers.uppercase) {
        value = value.toUpperCase();
      }
      this.$emit("update:firstName", value);
    },
  },
};
</script>
