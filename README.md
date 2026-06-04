# AI DSA Mentor

An AI-powered command-line programming tutor built using **Node.js** and **Google Gemini API**. The assistant answers coding and Data Structures & Algorithms (DSA) questions while restricting non-programming discussions.

## Features

* AI-powered coding assistance
* DSA and algorithm explanations
* Interactive command-line chat interface
* Custom system prompt for programming-focused responses
* Environment variable support using dotenv
* Secure API key management

## Tech Stack

* Node.js
* Google Gemini API
* JavaScript (ES Modules)
* readline-sync
* dotenv

## Project Structure

```text
AI-DSA-Mentor/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ai-dsa-mentor.git
cd ai-dsa-mentor
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key
```

## Running the Project

```bash
node index.js
```

## Example

```text
You: What is Binary Search?

AI: Binary Search is an efficient searching algorithm that works on sorted arrays...
```

## Future Improvements

* Web-based user interface
* Chat history storage
* Code syntax highlighting
* Multiple AI model support
* Interview preparation mode

## Author

Khushi Yadav
