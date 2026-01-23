# Frontend Integration Guide

## Morgan AI Chat Widget Integration

### 1. Add Morgan Chat Widget Component

Copy `MorganChatWidget.tsx` to `components/` directory in your Next.js project.

### 2. Update Root Layout

Add Morgan widget to your main layout file (`app/layout.tsx`):

```tsx
import MorganChatWidget from "@/components/MorganChatWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <MorganChatWidget />
      </body>
    </html>
  );
}
```

### 3. Environment Variables

Create `.env.local` in your Next.js project:

```bash
NEXT_PUBLIC_MORGAN_API_URL=https://your-backend.railway.app
```

### 4. Update AI Maturity Assessment Page

Replace `app/ai-maturity-assessment/page.tsx` with the provided assessment file.

## Deployment Checklist

### Frontend (Vercel)

1. Push code to GitHub
2. Vercel auto-deploys from main branch
3. Set environment variable in Vercel:
   - `NEXT_PUBLIC_MORGAN_API_URL`

### Backend (Railway)

1. Create new Railway project
2. Connect GitHub repo
3. Set environment variables:
   - `ANTHROPIC_API_KEY`
   - `N8N_WEBHOOK_URL` (optional)
4. Deploy automatically via Procfile

### CORS Configuration

The backend is configured with open CORS (`allow_origins=["*"]`). For production, update this in `morgan_backend.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://trapiermanagement.com", "https://www.trapiermanagement.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Testing

1. **Test Backend**: Visit `https://your-backend.railway.app/health`
2. **Test Chat**: Open your deployed site and click the Morgan chat bubble
3. **Test Assessment**: Navigate to `/ai-maturity-assessment` and complete the form

## Troubleshooting

### Chat not connecting
- Check browser console for errors
- Verify `NEXT_PUBLIC_MORGAN_API_URL` is set correctly
- Ensure backend is deployed and healthy

### Backend errors
- Check Railway logs
- Verify `ANTHROPIC_API_KEY` is set
- Test health endpoint

### CORS errors
- Update CORS configuration in `morgan_backend.py`
- Redeploy backend after changes
