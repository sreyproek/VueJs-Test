//  # Reusable logic functions (e.g., hooks)

import { ref } from 'vue';

export function useForm(submitFunction) {
  const form = ref({});
  const errors = ref([]);

  const submit = async () => {
    try {
      await submitFunction(form.value);
    } catch (err) {
      errors.value = err.response.data.errors;
    }
  };

  return { form, errors, submit };
}
