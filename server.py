
import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin

import pickle

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

model = pickle.load(open('model.pkl', 'rb'))


@app.route('/autocorrect',methods=['POST'])
@cross_origin()
def results():

    # model.predict([np.array(list(data.values()))])
    # model.correction("srve")
    data = request.get_json()
    # print("Data is: " + data['input'])
    # lines = "this is a cate"
    lines = data['input']
    words = lines.split()

    correct_words = []
    for word in words:
        corrected = model.spell_correct(word)
        correct_words.append(corrected['spell_corrected_text'])
    corrected_sentence = " ".join(correct_words)
    # print("Corrected Sentence : ",corrected_sentence)

    # output = prediction[0]
    return jsonify(corrected_sentence)



# @app.route('/autocorrect',methods=['GET'])
# def results():

#     # model.predict([np.array(list(data.values()))])
#     # model.correction("srve")
#     lines = "this is a cate"
#     words = lines.split()

#     correct_words = []
#     for word in words:
#         corrected = model.spell_correct(word)
#         correct_words.append(corrected['spell_corrected_text'])
#     corrected_sentence = " ".join(correct_words)
#     print("Corrected Sentence : ",corrected_sentence)

#     # output = prediction[0]
#     return jsonify(corrected_sentence)





# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/predict',methods=['POST'])
# def predict():

#     int_features = [int(x) for x in request.form.values()]
#     final_features = [np.array(int_features)]
#     prediction = model.predict(final_features)

#     output = round(prediction[0], 2)

#     return render_template('index.html', prediction_text='Sales should be $ {}'.format(output))

# @app.route('/results',methods=['POST'])
# def results():

#     data = request.get_json(force=True)
#     prediction = model.predict([np.array(list(data.values()))])

#     output = prediction[0]
#     return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)

