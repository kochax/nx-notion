# Contribution Guidelines

We would love for you to contribute to this project. As a contributor, here are the guidelines we would like you to follow:

## Tools and Setup

This project uses several tools to streamline development and ensure code quality:

- **Commitizen**: To standardize commit messages.
- **Conventional Changelog**: To generate changelogs based on commit messages.
- **Husky**: To run git hooks.

### Prerequisites

Make sure you have the following installed:

- Node.js (>=18.x)
- npm (>=9.x) or yarn (>=1.x)

### Installation

1. Fork the repository and clone it to your local machine.
2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Commit Messages

We use Commitizen to help format commit messages. To make a commit, run:

```bash
npx cz
# or
yarn cz
```

Follow the prompts to create a standardized commit message.

### Pre-commit Hooks

Husky is used to run pre-commit hooks. These hooks will automatically run linting and tests before you can commit your changes. This ensures that only high-quality code is committed to the repository.


### Running Tests

To run tests, use:

```bash
npm test
# or
yarn test
```

Make sure all tests pass before submitting a pull request.

## Submitting a Pull Request

1. Ensure your code follows the project's coding standards.
2. Make sure all tests pass.
3. Submit your pull request with a clear description of your changes.

Thank you for contributing!

## Release