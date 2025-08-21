# app.py
from flask import Flask, render_template

# Inicializa a aplicação Flask
app = Flask(__name__)

# Define a rota para a página inicial ("/")
@app.route('/')
def home():
    # Renderiza (mostra) o arquivo index.html que está na pasta 'templates'
    return render_template('index.html')

# Permite que o servidor rode quando executamos o script
if __name__ == '__main__':
    app.run(debug=True)