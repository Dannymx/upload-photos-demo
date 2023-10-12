This a demo to showcase uploading, storing, and retriving images using different technologies.

## Tech stack used

The following tools were used in this application:

- Next.js 13 with App routing and API route handler
- Fully typed with Typescript
- Supabase for image storage and image search
- React-Query for data-fetching
- Radix UI and Tailwind CSS for styling
- ESlint, Husky, lint-staged to enforce valid syntax, formatting and types

## API Endpoints

The following API endpoints are available in this application:

`GET: /api/photos`

This endpoint will display all the images or filter by images if a search paramaters is provided.

`PUT: /api/photos`

This endpoint will store one image and append a unique ID to the name to allow multiple images with the same name to be uploaded.

`DELETE: /api/photos`

This endpoint will delete one image if a `name` parameter is provided

## Getting Started

To start the application you run any of the following commands:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```
