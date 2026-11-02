from flask import Flask, render_template, request, jsonify
import jinja2

app = Flask(__name__) 
app.jinja_env.undefined = jinja2.StrictUndefined
trabalho = []

@app.route("/")
def index():
    return render_template("index.html", lista=trabalho)

@app.route("/submeter")
def submeter():
    return render_template("submeter.html")

@app.route("/novo_trabalho", methods=['POST'])
def novo_trabalho():
    novo_trabalho = request.get_json()

    trabalho.append(novo_trabalho)

    return jsonify({"status": "sucesso"}), 201



def trabalhos():
    trabalho.append({"autor":"Guilherme Bianchi da Silva", "titulo":"Observação do movimento do Sol", "modalidade":"Extensão"})
    trabalho.append({"autor":"Maurício Fabiano Freitas da Silva", "titulo":"Função Harmônica e suas aplicações", "modalidade":"Ensino"})
    trabalho.append({"autor":"Pedro Henrique Rodrigues Paz da Costa", "titulo":"Análise aprofundada de livros", "modalidade":"Pesquisa"})

if __name__ == "__main__":
    trabalhos()

    app.run(debug=True)
