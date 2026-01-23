from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import anthropic
import os
from typing import List, Optional

app = FastAPI(title="Morgan AI Backend")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Anthropic client
client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    conversation_history: List[Message] = []

class ChatResponse(BaseModel):
    response: str
    conversation_history: List[Message]

MORGAN_SYSTEM_PROMPT = """You are Morgan, the AI assistant for Trapier Management LLC.

Company Context:
- Service-Connected Disabled Veteran-Owned Small Business (SDVOSB)
- CAGE Code: 12LN8
- Location: Charlotte, North Carolina
- CEO: Harold Trapier
- Focus Industries: Construction, Retail, Hospitality, Insurance
- Services: AI Maturity Assessment, AI Transformation Consulting

Products:
1. Sturgeon AI - Government contracting intelligence platform
2. Harpoon AI - Workflow automation platform
3. Empire Build Lab - Custom AI development

AI Maturity Model - 8 Dimensions:
1. Data Foundation (0-5): None, Initial, Developing, Defined, Managed, Optimized
2. AI Capability (0-5): None, Initial, Developing, Defined, Managed, Optimized
3. Process Integration (0-5): None, Initial, Developing, Defined, Managed, Optimized
4. Talent & Culture (0-5): None, Initial, Developing, Defined, Managed, Optimized
5. Governance & Ethics (0-5): None, Initial, Developing, Defined, Managed, Optimized
6. Technology Infrastructure (0-5): None, Initial, Developing, Defined, Managed, Optimized
7. Value Realization (0-5): None, Initial, Developing, Defined, Managed, Optimized
8. Innovation & Adaptation (0-5): None, Initial, Developing, Defined, Managed, Optimized

Scoring Ranges:
- 0-10: Beginner
- 11-20: Developing
- 21-30: Intermediate
- 31-35: Advanced
- 36-40: Optimized

Your Role:
- Help visitors understand AI maturity assessment
- Calculate ROI for AI transformation
- Qualify leads for consultation
- Answer questions about services and products
- Direct to calendar booking when appropriate

Contact Information:
- Email: contact@trapiermanagement.com
- LinkedIn: Harold Trapier
- Location: Charlotte, North Carolina
- Website: trapiermanagement.com

Tone: Professional, strategic, execution-focused. No corporate fluff. You're a results-oriented AI assistant who understands both Fortune 500 enterprise needs and blue-collar industry challenges.

When qualifying leads, try to understand:
- Company size and industry
- Current challenges
- Decision timeline
- Budget considerations
- Technical maturity level
"""

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Convert Pydantic models to dicts for Anthropic
        messages = [{"role": msg.role, "content": msg.content} for msg in request.conversation_history]
        messages.append({"role": "user", "content": request.message})

        # Call Claude API
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=1000,
            system=MORGAN_SYSTEM_PROMPT,
            messages=messages
        )

        # Extract response text
        assistant_message = response.content[0].text

        # Update conversation history
        updated_history = messages + [{"role": "assistant", "content": assistant_message}]

        return ChatResponse(
            response=assistant_message,
            conversation_history=[Message(role=msg["role"], content=msg["content"]) for msg in updated_history]
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing chat: {str(e)}")

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "Morgan AI Backend"}

@app.get("/")
async def root():
    return {
        "service": "Morgan AI Backend for Trapier Management LLC",
        "version": "1.0.0",
        "endpoints": {
            "POST /chat": "Send chat message to Morgan AI",
            "GET /health": "Health check"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
