# Portfolio Builder Template

This portfolio builder template allows users to generate a complete portfolio website by simply editing the configuration file located at `config/site.tsx`.

## Customization

Users can personalize their portfolio by modifying just the data in the `site.tsx` file, such as:

- Personal information
- Project details
- Skills
- Other relevant content

The template will automatically generate the site based on the provided data, ensuring a seamless and efficient portfolio creation process.

## Key Features

- **Easy-to-edit configuration file**: `src/config/site.tsx`
- **Automatic generation**: Creates a fully functional portfolio website
- **No coding required**: No need for additional coding or manual adjustments

## Usage

1. Open the `config/site.tsx` file.
2. Update the file with your personal and professional details.
3. Save the changes, and the template will generate the portfolio site accordingly.

## Getting Started

To get started with this portfolio builder template:

1. **Fork the Repository**:
    - Go to the [GitHub repository](https://github.com/anuja-rahul/portfolio-builder) for this project.
    - Click the **"Fork"** button in the top-right corner to create a copy of the repository under your GitHub account.

2. **Clone the Repository**:
    - Open a terminal on your computer.
    - Run the following command to clone the forked repository to your local machine:

      ```bash
      git clone https://github.com/anuja-rahul/portfolio-builder.git
      ```

3. **Navigate to the Project Directory**:
    - Change into the project directory by running:

      ```bash
      cd portfolio-builder
      ```

4. **Install Dependencies**:
    - Run the following command to install the required dependencies:

      ```bash
      npm install --legacy-peer-deps
      ```

    > **Note**: Always use the `--legacy-peer-deps` flag when installing dependencies to avoid potential errors with peer dependencies.

You are now ready to customize and build your portfolio!

## Running the Development Build

To preview your portfolio during development:

1. Ensure you have Node.js installed on your system.
2. Open a terminal and navigate to the project directory.
3. Run the following commands:

    ```bash
    npm install
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to view your portfolio.

## Building for Production

To build the portfolio for production:

1. Open a terminal and navigate to the project directory.
2. Run the following command:

    ```bash
    npm run build
    ```

3. After the build process completes, the static files will be available in the `out` directory.
4. Deploy the contents of the `out` directory to your preferred hosting platform.

## Deploying to Vercel

<details>
<summary>How to connect your GitHub repository to Vercel and deploy</summary>

1. Push your project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in or create an account.
3. Click on the **"New Project"** button.
4. Select **"Import Git Repository"** and connect your GitHub account if not already connected.
5. Choose your repository from the list and click **"Import"**.
6. Configure the project settings if needed, then click **"Deploy"**.
7. Vercel will build and deploy your portfolio. Once completed, you will receive a live URL for your site.

</details>

Start building your portfolio effortlessly today!

## Contributions and Feedback

We welcome contributions to improve this portfolio builder template! If you have suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/anuja-rahul/portfolio-builder).

If you find this project helpful, consider giving it a ⭐ on GitHub. Your support is greatly appreciated!
