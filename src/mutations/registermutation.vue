<script>
import { defineComponent } from 'vue';
import { useMutation, gql } from '@vue/apollo-composable';

const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($registerInput: RegisterInput!) {
    registerUser(registerInput: $registerInput) {
      id
      username
      email
      // Include other fields you want to return after registration
    }
  }
`;

export default defineComponent({
  setup() {
    const { mutate: registerUser } = useMutation(REGISTER_USER_MUTATION);

    const registerUserHandler = async () => {
      try {
        const response = await registerUser({
          variables: {
            registerInput: {
              username: 'exampleUsername',
              email: 'example@email.com',
              password: 'examplePassword'
            }
          }
        });
        console.log('User registered:', response);
        // Handle success
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle error
      }
    };

    return {
      registerUserHandler
    };
  }
});
</script>
