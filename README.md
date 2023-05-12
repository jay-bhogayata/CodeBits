# CodeBits

CodeBits is a web application that allows developers to share code snippets with others. It provides all CRUD (Create, Read, Update, Delete) functions with authentication, and it is built using Next.js, Tailwind CSS, NextAuth.js, and MongoDB.

## Table of Contents

- [CodeBits](#codebits)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)

## Demo

- Check out the live demo of CodeBits at [codebits.jaybhogayata.me/](http://codebits.jaybhogayata.me/)

## Features

- User authentication using NextAuth.js with GitHub provider
- CRUD functionality for code snippets
- Dark mode using Tailwind CSS
- Search functionality for code snippets (coming soon)
- Pagination of code snippets (coming soon)
- Sorting of code snippets by date or popularity (coming soon)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering, static site generation, and more
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication library for Next.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database

## Getting Started

To get started with CodeBits, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/codebits.git
```

2. Install the dependencies:

```
cd codebits
npm install
```

3. Set up the environment variables:

Create a `.env.local` file in the root of the project with the following content:

```
MONGODB_URI=your-mongodb-uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=BnQn9mNe2IsE+gbHBHdn0lzbTbh2l/ZH43Q7eocXFUE=
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

Replace `your-mongodb-uri`, `your-github-client-id`, and `your-github-client-secret` with your own values.

To get the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` values, follow these steps:

1. Go to [https://github.com/settings/applications/new](https://github.com/settings/applications/new).
2. Enter a name for your application (e.g. "CodeBits").
3. Enter the `Homepage URL` as `http://localhost:3000` and `Authorization callback URL` as `https://localhost:3000/api/auth/callback/github`.
4. Click `Register application`.
5. Copy the `Client ID` and `Client Secret` values and use them as the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` values in your `.env.local` file.

6. Run the development server:

```
npm run dev
```

7. Open http://localhost:3000 in your browser to see the app.

## Contributing

Contributions are welcome! To contribute to CodeBits, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-branch`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-branch`.
5. Submit a pull request.

## License

CodeBits is [MIT licensed](LICENSE).