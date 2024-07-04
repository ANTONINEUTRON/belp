# Documentation for Belp

## Overview

**Belp (Blockchain hELP)** is a web-based decentralized application (dApp) designed to enhance user engagement and knowledge about Solana-based projects. Built with Next.js, TypeScript, and Tailwind CSS, Belp enables users to view Solana projects, get AI-generated insights, and read and write reviews. The application requires wallet connectivity for users to leave reviews and offers the ability to tip reviewers. This document provides a comprehensive overview of the product, its features, and how it integrates with The Grid API.

### 1. Functionalities and Features

#### Viewing Solana Projects
Belp aggregates data from the Solana ecosystem using The Grid API. Users can navigate through various projects, each with detailed descriptions and relevant statistics.

#### AI-Generated Insights
Using Gemini AI, Belp provides users with automatically generated insights on each project. These insights cover various aspects such as project summary, potential risk of the project, goals and vision.

#### User Reviews
Users can read reviews left by others to gauge community sentiment and experiences. To contribute their own reviews, users must connect their Solana wallet.

#### Wallet Connectivity
Wallet connection is facilitated using the Solana Wallet Adapter. This ensures secure and seamless transaction handling, necessary for submitting reviews and tips.

#### Tipping System
Belp allows users to tip reviewers, providing an incentive for high-quality, informative reviews. This is managed through the Solana network.

#### Shareable Reviews
Reviews can be shared on various social media platforms or through direct links, helping to spread information and encourage wider community participation.

### 2. Technical Implementation

#### Next.js
Next.js provides the foundation for the web application, offering server-side rendering and static site generation for improved performance and SEO.

#### TypeScript
TypeScript is used for type safety and to improve code maintainability. It helps in catching errors early in the development process.

#### Tailwind CSS
Tailwind CSS is utilized for styling the application. It offers a utility-first approach to CSS, enabling quick and responsive design implementations.

#### Solana Wallet Adapter
The Solana Wallet Adapter handles wallet connections and transactions. It ensures secure interactions between the user’s wallet and the dApp, enabling functionalities like submitting reviews and tipping.

#### PostgreSQL
Currently, user reviews are stored in a PostgreSQL database. This provides reliable and efficient storage and retrieval of review data. Future plans include migrating to IPFS for decentralized data storage.

#### IPFS Integration (Planned)
To enhance decentralization, work is underway to store user reviews on IPFS. This will ensure data integrity and availability, aligning with the decentralized nature of blockchain applications.

#### Gemini AI
Gemini AI generates insights by analyzing data from The Grid API. This integration ensures that users receive up-to-date and relevant information about Solana projects.

### 3. Installation and Setup

#### Prerequisites
- Node.js
- PostgreSQL
- Solana wallet

#### Installation Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/ANTONINEUTRON/belp
   cd belp
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a copy `.env.local.example` file in the root directory and add the necessary environment variables:
   ```env
   NEXT_PUBLIC_SOLANA_NETWORK=testnet
   DATABASE_URL=your_postgresql_database_url
   GEMINI_AI_API_KEY=your_gemini_ai_api_key
   ```

4. **Run the Application**
   ```sh
   npm run dev
   ```

### 4. Usage

1. **Viewing Projects**
   Navigate to the homepage to see a list of projects. Click on any project to view detailed information and AI-generated insights.

2. **Connecting Wallet**
   Click on the "Connect Wallet" button and follow the prompts to connect your Solana wallet.

3. **Leaving Reviews**
   After connecting your wallet, click on the review floating action button of a project and submit your review.

4. **Tipping Reviewers**
   Use the tipping option under each review to tip the reviewer. This transaction will be processed through your connected wallet.

5. **Sharing Reviews**
   Click on the "Share" button next to any review to share it on social media or via direct link.

### 5. Market Fit Analysis

Belp addresses the need for comprehensive and accessible information on Solana projects. By integrating AI for insights and providing a platform for user reviews, it meets the market demand for reliable and user-generated content. The tipping system incentivizes quality contributions, fostering a community-driven approach to project evaluation.

### 6. Future Enhancements

- **Migration to IPFS**: Complete the transition to IPFS for decentralized storage of reviews.
- **Enhanced AI Insights**: Improve the AI algorithms to provide more detailed and accurate insights.
- **Expanded Features**: Add more interactive features such as rating, discussion flows and project comparison tools.

### Conclusion

Belp - Blockchain hELP is a comprehensive platform that leverages The Grid API to provide valuable insights and community-driven reviews for Solana projects. It combines the power of AI with user interaction to create a robust tool for the Solana ecosystem. With ongoing enhancements and a focus on decentralization, Belp aims to be an essential resource for developers, investors, and enthusiasts in the Solana community.wers for their contributions.