import { serve } from 'https://deno.fresh.dev/std@0.168.0/http/server.ts'
import { SmtpClient } from 'https://deno.land/x/smtp/mod.ts'

const client = new SmtpClient()

serve(async (req) => {
  try {
    const { subscribers, content, subject } = await req.json()

    await client.connect({
      hostname: Deno.env.get('SMTP_HOSTNAME'),
      port: Number(Deno.env.get('SMTP_PORT')),
      username: Deno.env.get('SMTP_USERNAME'),
      password: Deno.env.get('SMTP_PASSWORD'),
    })

    for (const email of subscribers) {
      await client.send({
        from: Deno.env.get('SMTP_FROM_EMAIL'),
        to: email,
        subject,
        content,
      })
    }

    await client.close()

    return new Response(
      JSON.stringify({ message: 'Newsletter sent successfully' }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})