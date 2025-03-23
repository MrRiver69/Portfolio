# Setting Up Contact Form with Web3Forms

This guide will help you set up the contact form to work properly when deployed to Vercel.

## Local Development

1. Create a `.env.local` file in the root of the project with the following variables:

```
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

2. Replace the placeholder value with your actual Web3Forms access key.

## Web3Forms Setup (No Account Required)

1. Go to [Web3Forms](https://web3forms.com/)
2. Click on "Create your Access Key" button on the homepage
3. That's it! Copy the key and use it in your .env.local file

## Vercel Setup

1. Log in to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the following environment variable:
   - `WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key
5. Click "Save"
6. Redeploy your project to apply the changes

## Troubleshooting

If the contact form still doesn't work:

1. Check Vercel logs for any errors
2. Verify that your Web3Forms access key is correct
3. Test with a small, simple message first

## Alternative: EmailJS Setup (Client-Side Solution)

If the server-side solution doesn't work for you, you can use the EmailJS alternative:

1. Sign up for an EmailJS account: https://www.emailjs.com/
2. Create a service:
   - Go to "Email Services" and click "Add New Service"
   - Choose a service provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. Create an email template:
   - Go to "Email Templates" and click "Create New Template"
   - Design your template using the visual editor
   - Use the following template variables:
     - `{{to_name}}`: Recipient name
     - `{{from_name}}`: Sender name
     - `{{reply_to}}`: Sender email
     - `{{message}}`: Message content

4. Get your credentials:
   - Service ID: Found in the "Email Services" section
   - Template ID: Found in the "Email Templates" section
   - Public Key: Found in the account settings

5. Update the EmailJS contact form:
   - Open `components/EmailJSContactForm.tsx`
   - Replace the placeholder credentials with your actual values:
     ```typescript
     const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
     const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
     const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
     ```

6. Update the layout to include the EmailJS script:
   - Open `app/layout.tsx`
   - Add the following script tag to the head section:
     ```jsx
     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
     ```

7. Replace the contact form in `app/contact/page.tsx` with the EmailJS version:
   ```tsx
   import EmailJSContactForm from "@/components/EmailJSContactForm";
   
   // ...existing code...
   
   <EmailJSContactForm />
   ```

## Other Alternative Solutions

If none of the above solutions work for your needs, you can also try:

1. Formspree - Simple form endpoints for static sites (https://formspree.io/)
2. Netlify Forms - Built-in form handling for Netlify sites
3. A serverless function on AWS Lambda with SES 