import { defineStore } from "pinia";

export const useLeadStore = defineStore({
  id: "lead",
  state: () => ({
    formData: {},
  }),
});
