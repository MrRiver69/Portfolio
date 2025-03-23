# How to Get Your Web3Forms Access Key

Web3Forms is an easy solution that requires no signup or account creation to start receiving form submissions directly to your email.

## Quick Setup Steps:

1. Visit [Web3Forms website](https://web3forms.com/)

2. On the homepage, click the big blue "Create your Access Key" button

3. That's it! Your access key will be generated and displayed immediately

4. Copy the access key and add it to your `.env.local` file:
   ```
   WEB3FORMS_ACCESS_KEY=your_generated_key_here
   ```

5. Also add it to your Vercel environment variables for deployment

## How Web3Forms Works:

- When a user submits your contact form, the data is sent to Web3Forms API
- Web3Forms processes the submission and forwards it to your email
- Your access key is used to authenticate the request and identify where to send the email
- No data is stored permanently (according to Web3Forms privacy policy)

## Benefits of Web3Forms:

- No account signup required
- No complex verification process
- Works with any static site
- No server-side code needed
- Free for basic usage

## Example API Implementation:

The contact form API integration is already set up in your project at `app/api/contact/route.ts`.

## HTML Form Example (For Reference):

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  
  <button type="submit">Submit Form</button>
</form>
```

That's all you need to know! Web3Forms provides a hassle-free way to make your contact form work without complex setup processes. 