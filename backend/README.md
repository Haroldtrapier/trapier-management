# Morgan AI Backend

FastAPI backend for Morgan AI chatbot integration with Claude API.

## Setup

### Environment Variables

Create a `.env` file with:

```bash
ANTHROPIC_API_KEY=your_anthropic_api_key_here
N8N_WEBHOOK_URL=your_n8n_webhook_url (optional)
PORT=8000
```

### Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python morgan_backend.py
```

The API will be available at `http://localhost:8000`

### Deployment to Railway

1. Create a new project on Railway.app
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard:
   - `ANTHROPIC_API_KEY`
   - `N8N_WEBHOOK_URL` (optional)
4. Railway will auto-detect the Procfile and deploy

### Endpoints

- `POST /chat` - Send message to Morgan AI
- `GET /health` - Health check
- `GET /` - API info

### Example Request

```bash
curl -X POST https://your-backend.railway.app/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Tell me about your AI maturity model",
    "conversation_history": []
  }'
```
