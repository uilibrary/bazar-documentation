# Authentication

UKO supports JWT, Auth0, Firebase authentication.

We created authContext and hooks.
So that we can easily access authenticated user and switch between methods.

Uko uses `AuthGuard` component to protect auth protected routes. In `index.tsx` entire application is wrapped by `AuthProvider`

Here `AuthProvider` is imported from `FirebaseAuthContext`. You will find other `authProviders` for JWT & Auth0 in `src/contexts` folder.

```js
import { AuthProvider } from 'contexts/FirebaseAuthContext'
```

### Switching between methods

1. Open index.jsx/index.tsx and update the import path of AuthProvider. By default we're using Firbase. If you want to use JWT method then your import should be like this
   `import { AuthProvider } from "contexts/JWTAuthContext";`
2. Open `src/hooks/useAuth.js` and update the import path of `AuthContext`. By default we are using `FirebaseAuthContext`. For JWT method, your import should be like this
   `import AuthContext from "contexts/JWTAuthContext";`

3. Update api keys, secret keys, etc. of `firebaseConfig`/`auth0Config` in `src/config.js`

### JWT

We created a axios instance in `src/utils/axios.ts`.
This instance is intercepted in `JWTAuthContext.tsx` to attach token to each server call.

```js
const setSession = (accessToken: string | null) => {
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}
```
