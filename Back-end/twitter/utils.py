from django.core.mail import EmailMessage


def send_email_function(email, token_id, user_id):
    email_m = EmailMessage(subject='verify email', body=f'to verify your email please go to http://localhost:5173/verfiy/{token_id}/{user_id}', to=(email,))
    email_m.send()