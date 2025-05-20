import { ref } from 'vue';
import axios from 'axios';

export function useSignup() {
  const loading = ref(false);
  const error = ref('');

  const signup = async (formData) => {
    loading.value = true;
    error.value = '';
    
    try {
      let url = "";
      process.env.NODE_ENV == 'development' ? url = "http://localhost:3000/api/signup" : url = "/api/signup"
      const response = await axios.post(url, formData);
      loading.value = false;
      return response.data;
    } catch (err) {
      console.error('Signup error:', err);
      error.value = err.response?.data?.message || 'An error occurred during signup. Please try again.';
      loading.value = false;
      throw err;
    }
  };

  return {
    signup,
    loading,
    error
  };
}
