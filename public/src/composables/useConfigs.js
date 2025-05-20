// composables/useConfigs.js
const env = Vue.ref({});

export const useConfigs = () => {
  // Key Messages grouped by category
  const getConfigs = async () => {
    try {
      let results = await axios.get("/api/configs");
      console.log("Configs:", results)
      if(results?.data?.payload)
      {
        env.value = results.data.payload;
      }

      if (env.value.data?.payload?.models)
        models.value = env.value.data.payload.models;

    } catch (error) {
      console.log("Error", error);
      env.value = null;
    }
  };

  return {
    env,
    getConfigs,
    models,
  };
};