# 🤖 Chat-CV: AI-Powered Conversational CV

An intelligent chatbot application that lets users interact with your CV through natural language conversations. Built with **Next.js**, **LangChain**, and **Clerk authentication**, this modern web application provides a seamless way to explore CV information through AI-powered chat.

---

## ✨ Features

- 💬 **Conversational AI**: Chat interface powered by LangChain for intelligent responses about your CV
- 🔐 **Secure Authentication**: Built-in user authentication with Clerk
- 🎨 **Modern UI**: Beautiful Material-UI components with Tailwind CSS styling
- ⚡ **Real-time Feedback**: Toast notifications for user interactions
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔄 **Reactive State Management**: RxJS for efficient state management

---

## 🏗️ Architecture

### System Overview

```mermaid
graph TB
    subgraph Client["🖥️ Client Layer"]
        UI["React Components<br/>Page.tsx + Chat Interface"]
        Store["State Management<br/>RxJS + Zod"]
    end
    
    subgraph NextApp["Next.js Application"]
        API["API Routes<br/>/api/chat"]
        Auth["Clerk Authentication<br/>Middleware"]
    end
    
    subgraph LLM["🤖 AI Processing"]
        LC["LangChain<br/>Chain orchestration"]
        Memory["Conversation Memory<br/>Context management"]
    end
    
    subgraph External["External Services"]
        LLMProvider["LLM Provider<br/>OpenAI / etc"]
    end
    
    UI -->|HTTP/WebSocket| API
    API -->|Validates| Auth
    Auth -->|Authenticated Request| LC
    LC -->|Manages| Memory
    LC -->|API Call| LLMProvider
    LLMProvider -->|Response| LC
    LC -->|JSON Response| API
    API -->|Real-time Update| Store
    Store -->|Updates UI| UI