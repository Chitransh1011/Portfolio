# Portfolio

## Local development

```sh
npm install
npm run dev
```

## EmailJS contact form

1. Connect an email service in the [EmailJS dashboard](https://dashboard.emailjs.com/) and create an email template.
2. Fill in these entries in the root `.env` file (see `.env.example`):
   - `VITE_EMAILJS_SERVICE_ID`: the connected service's ID.
   - `VITE_EMAILJS_TEMPLATE_ID`: the template's ID.
   - `VITE_EMAILJS_PUBLIC_KEY`: your account's public key.
3. Configure the template's **To Email** as your own receiving email address, **From Name** as `{{name}}`, **Reply To** as `{{reply_to}}`, and **Subject** as `{{subject}}`. Keep the sender email set to your connected service's default address. For the body, use:

   ```text
   Name: {{name}}
   Email: {{email}}

   {{message}}
   ```

4. Restart the development server after editing `.env`. For deployment, set the same three environment variables in your hosting provider before building, then rebuild/redeploy.
5. Submit a message through the contact form and check your receiving inbox.

The form preserves its contents on failure and clears them after EmailJS accepts the message. Missing configuration uses the form's error message without sending a request.

`.env` and environment-specific files are ignored by Git; `.env.example` contains only blank placeholders. Vite includes `VITE_*` values in the browser bundle, so these values are not hidden from visitors. Use only the EmailJS **public** key here; private keys and email passwords must never be added to browser configuration. See [Vite environment variables](https://vite.dev/guide/env-and-mode) and the [EmailJS SDK](https://www.emailjs.com/docs/sdk/send/).

## Checks

```sh
npm run lint
npx tsc --noEmit -p tsconfig.app.json
npm run build
```
