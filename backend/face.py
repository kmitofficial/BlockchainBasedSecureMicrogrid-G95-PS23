from PIL import Image
import os
import io
import random
import base64
import time
import face_recognition
userImage1 = input()
userImage2 = input() # print(userImage1)
# print(userImage1)
def data(image): 
    # print(image)   
    # print(image)   
    binary_data = base64.b64decode(image)
    image = Image.open(io.BytesIO(binary_data))
    if not os.path.exists('backend'):
        os.makedirs('backend')
    randomText = random.randint(1000000000,9999999999)
    # print(randomText) 

    image.save(f'./images/dam{randomText}.jpeg')
    time.sleep(10)
    return f'./images/dam{randomText}.jpeg'


def compareFace(face_1, face_2):
    face_encoding_1 = face_recognition.face_encodings(face_recognition.load_image_file(face_1))[0]
    face_encoding_2 = face_recognition.face_encodings(face_recognition.load_image_file(face_2))[0]


    results = face_recognition.compare_faces([face_encoding_1], face_encoding_2)
    print(results[0])
    

compareFace(data(userImage1.split(",")[-1]),data(userImage2.split(",")[-1]))