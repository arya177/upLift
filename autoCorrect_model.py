from spello.model import SpellCorrectionModel
import pickle

model = SpellCorrectionModel(language="en")


with open ("words.txt") as file:
    data = file.readlines()
data = [i.strip() for i in data]


model.train(data)


model.save("")


# model.load("model.pkl")


# lines  = "aeimie"

# def correction(lines):
#     words = lines.split()

#     correct_words = []
#     for word in words:
#         corrected = model.spell_correct(word)
#         correct_words.append(corrected['spell_corrected_text'])
#     corrected_sentence = " ".join(correct_words)

#     print("Corrected Sentence : ",corrected_sentence)
    

# words = lines.split()


# correct_words = []
# for word in words:
#     corrected = model.spell_correct(word)
#     correct_words.append(corrected['spell_corrected_text'])
# corrected_sentence = " ".join(correct_words)


# print("Corrected Sentence : ",corrected_sentence)

# Loading the model to pickle
pickle.dump(model, open('model.pkl','wb'))

model = pickle.load(open('model.pkl','rb'))