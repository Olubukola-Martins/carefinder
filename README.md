## Carefinder

## Introduction

Accessing healthcare in Nigeria can be a challenging task. CareFinder is a search engine for hospitals, currently available exclusively in Nigeria. It aims to provide users with a convenient and efficient way to find hospitals within their region and access essential information about them. This repository contains the source code for Carefinder, along with documentation on how to set it up and contribute to its development.

![p1](https://github.com/Jennydunix/carefinder/assets/88034429/739e2084-55b9-4404-8719-abebf4a12cb2)

## Features
Hospital Search: Users can search for hospitals within their region by location or selecting from a list of nearby cities. The platform provides a list of hospitals with contact details such as address, phone number, and email.

Export Hospitals: Users can export the list of hospitals to a CSV file for easy storage and sharing of information.

Share Hospitals: The platform allows users to share the list of hospitals via email or by generating a shareable link.

User Authentication: Admin users can create an account to access the platform's admin features. User authentication is implemented using Firebase's authentication feature, supporting multiple authentication methods.
![a1](https://github.com/Jennydunix/carefinder/assets/88034429/00b810ea-6d49-4f64-a3ad-40853c8a71cf)



Markdown Support: Admin users can write content using markdown syntax, enabling easy formatting, adding links, and inserting images.
![b3](https://github.com/Jennydunix/carefinder/assets/88034429/e1061af9-b3af-4e80-8423-d9b498ad83be)


## Technologies Used

Frontend: React, TypeScript
Backend: Firebase, MongoDB (for database, and file storage), NextAuth Library(Authentication)
Additional Tools: Prettier, ESLint, Jest, React Testing Library

## Installation

To run Carefinder locally, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/carefinder.git
2. Install dependencies: npm install
3. Set up Firebase project:
4. Create a new Firebase project on the Firebase Console.
5. Set up Firebase Authentication and Firestore database.
6. Obtain the Firebase configuration details.
7. Set up MongoDB:
8. Install MongoDB and set up a local or remote MongoDB database.
9. Obtain the MongoDB connection details.
10. Configure the environment:
11. Create a .env file based on the provided .env.example file.
12. Fill in the required environment variables, including Firebase and MongoDB configuration details.
13. Start the development server: npm run dev

BaseUrl : http://localhost:3000
## Deployment
Carefinder can be easily deployed to Vercel. To deploy the project, follow these steps:

Create an account on Vercel (https://vercel.com) if you don't have one.
Install the Vercel CLI globally: npm install -g vercel
Log in to your Vercel account using the CLI: vercel login
Deploy the project: vercel
Follow the prompts from the CLI to configure the deployment settings.
Once the deployment is complete, you will receive a URL where your Carefinder application is hosted.

Here's the link to hosted application on vercel: https://carefinder-zeta.vercel.app/

