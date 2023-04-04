<template>
  <show-users-component/>
  <div class="row">
    <div class="d-flex flex-column align-items-start justify-content-start gap-2 col">
      <create-workshift/>
      <open-shift-component/>
      <close-shift-component/>
      <add-user-on-shift-component/>
    </div>
    <div class="col">
      <show-order-on-shift-component />
    </div>
  </div>
</template>

<script>
import ShowUsersComponent from "@/components/ShowUsersComponent";
import CreateWorkshift from "@/components/CreateWorkshiftComponent";
import OpenShiftComponent from "@/components/OpenShiftComponent";
import CloseShiftComponent from "@/components/CloseShiftComponent";
import AddUserOnShiftComponent from "@/components/AddUserOnShiftComponent";
import ShowOrderOnShiftComponent from "@/components/ShowOrderOnShiftComponent";

export default {
  name: "AdminView",
  components: {
    ShowUsersComponent,
    CreateWorkshift,
    OpenShiftComponent,
    CloseShiftComponent,
    AddUserOnShiftComponent,
    ShowOrderOnShiftComponent,
  },
  data() {
    return {
      token: localStorage.token ?? false,
    }
  }
}
</script>

<style scoped>

</style>