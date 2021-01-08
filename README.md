Usage
=====

Create a new app using this template with:

```
npx create-next-app -e https://github.com/calvium/calvium-nextjs-typescript-tailwind-template my-wonderful-app
```

Run locally:
```
npm run dev
```

Open http://localhost:3000

Azure Web App Deployment via Github Actions
====

- Create a Node 12-based Web App on Azure
- Download the 'deployment profile' XML file from the overview page
- Upload to github - in the repository secrets upload the 'deployment profile' under the key `azureWebAppPublishProfile`
- Edit .github/workflow/web-app-deployment.yml and insert the name of your Web App into the line beginning `app-name`

Styling
====

- Tailwind performs a CSS reset so `<h1>` etc are unstyled by default, so we set some basic styles are set in styles/tailwind.css @apply is used to include tailwind utility styes, e.g. for `<h1>`. Don't put 'app styles' in there.


