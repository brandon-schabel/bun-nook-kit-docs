# Bun Nook Kit

![Bun Nook Kit Logo](https://user-images.githubusercontent.com/18100375/231109092-34bdc552-dd37-413d-8eec-b9b668340b65.png)

Bun Nook Kit (BNK) is a comprehensive toolkit for software development, leveraging the power of Bun and TypeScript. With zero third-party dependencies, strong TypeScript inferencing, and a focus on Web API standards, BNK offers a modular, type-safe, and efficient way to build robust applications.

## Getting Started


Server Starter Template: 
`bun create github.com/brandon-schabel/bnk-server-starter`

Starter Server:
`cd bun-server-starter & bun run dev`

Visit `http://localhost:3000` for a demo.

## Key Features

- **Zero Third-Party Dependencies**: BNK relies solely on Bun, ensuring lightweight and efficient operation.
- **Strong TypeScript Type Inferencing**: Enhances code reliability and eases development with powerful type support.
- **Modular Design**: Provides flexibility to use only what you need for your project.
- **Web API Standards**: Ensures broad compatibility and future-proofing.

## Stop Analysis Paralysis and Start Building
The goal of BNK is to provide a set of tools in which a developer can rapidly develop full-stack interactive JavaScript application with no additional dependencies, BNK relies on nothing but the APIs provided by Bun. Bun is now on >1.0 and is stable and as such BNK is focusing on providing a stable 1.0 release to lock in the APIs.


### Use What You need
#### Build a full stack server with templating:
Example of how you use the following modules to build out a full stack server
- [Server Module](readmes/server.md)   handle the application business logic - generate webpages on the server with...
- [HTMLody Module](readmes/htmlody.md) HTML templating with JSON object syntax. With a Tailwind-like CSS utility library!
- [SQLite Module](readmes/sqlite.md) store permanent data!
- [Auth Module](readmes/auth.md) - If your application requires it!


### Extensive Documentation

There is a plethoria of documentation to follow, and you can find a complete list of the available modules below.

#### [View All Module Docs](modules.md)

## Community

Join our [Discord Server](https://discord.gg/rQyWN7V6) for support, discussions, and updates.

## Screenshots

An HTMLody component, as well the TypeScript inference abilities as all the types shown in the in intellisense were inferred from the SQLite schema configured for the user subscription.

<img width="656" alt="Xnapper-2023-11-15-00 26 10" src="https://github.com/brandon-schabel/bun-nook-kit-docs/assets/18100375/70dc6060-4897-4603-b027-e3f81076738d">

The next two screenshots show how easy it can be to create and start a server - even with middleware with great type inference.

<img width="555" alt="Xnapper-2023-11-14-19 43 47" src="https://github.com/brandon-schabel/bun-nook-kit/assets/18100375/0d66c9ec-0f3a-487c-98f8-8c14faeaa82d">

<img width="582" alt="Xnapper-2023-11-14-19 47 14" src="https://github.com/brandon-schabel/bun-nook-kit/assets/18100375/78afc0e7-46c0-4269-8072-e8622f111b08">

Lastly, an example showing direct importing from the htmlody module.

<img width="478" alt="Xnapper-2023-11-14-19 51 14" src="https://github.com/brandon-schabel/bun-nook-kit/assets/18100375/9a70c8fa-a88a-48fc-95de-6c8dbadcb047">

## License

BNK is available under the MIT License - free for personal and commercial use.

---

Bun Nook Kit - An attempt at keeping developers out of dependency hell.

