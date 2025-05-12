# # # # # import streamlit as st
# # # # # import numpy as np
# # # # # import tensorflow as tf
# # # # # from PIL import Image
# # # # # import matplotlib.pyplot as plt

# # # # # # Load trained model
# # # # # model = tf.keras.models.load_model("final_model.keras")

# # # # # # Class labels
# # # # # class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # # # # # Streamlit UI setup
# # # # # st.set_page_config(page_title="Diabetic Retinopathy Detector", layout="centered")
# # # # # st.title("🩺 Diabetic Retinopathy Detection")
# # # # # st.write("Upload a **retina image** to predict the stage of Diabetic Retinopathy.")

# # # # # uploaded_file = st.file_uploader("📤 Upload Retina Image", type=["jpg", "jpeg", "png"])

# # # # # if uploaded_file is not None:
# # # # #     image = Image.open(uploaded_file)
# # # # #     st.image(image, caption="Uploaded Retina Image", use_container_width=True)

# # # # #     # Preprocess image
# # # # #     img = np.array(image.resize((224, 224)))
# # # # #     if img.shape[-1] == 4:
# # # # #         img = img[..., :3]
# # # # #     img = img / 255.0
# # # # #     img = np.expand_dims(img, axis=0)

# # # # #     # Model prediction
# # # # #     prediction = model.predict(img)[0]
# # # # #     predicted_index = np.argmax(prediction)
# # # # #     confidence = float(np.max(prediction)) * 100

# # # # #     # Display prediction
# # # # #     st.markdown("### 🧠 Prediction")
# # # # #     st.success(f"**Class**: {class_names[predicted_index]}")
# # # # #     st.info(f"**Confidence**: {confidence:.2f}%")

# # # # #     # Visualization - Bar Chart
# # # # #     st.markdown("### 📊 Class-wise Confidence")

# # # # #     fig, ax = plt.subplots()
# # # # #     bars = ax.bar(class_names, prediction * 100, color='skyblue', edgecolor='black')
# # # # #     ax.set_ylim([0, 100])
# # # # #     ax.set_ylabel('Confidence (%)')
# # # # #     ax.set_title('Prediction Confidence by Class')

# # # # #     # Annotate each bar with percentage
# # # # #     for bar, prob in zip(bars, prediction):
# # # # #         height = bar.get_height()
# # # # #         ax.annotate(f'{prob * 100:.2f}%', 
# # # # #                     xy=(bar.get_x() + bar.get_width() / 2, height),
# # # # #                     xytext=(0, 3), 
# # # # #                     textcoords="offset points",
# # # # #                     ha='center', va='bottom', fontsize=9, fontweight='bold')

# # # # #     st.pyplot(fig)

# # # # # else:
# # # # #     st.warning("📌 Please upload a retina image to continue.")
# # # # from fastapi import FastAPI, File, UploadFile
# # # # from fastapi.middleware.cors import CORSMiddleware
# # # # from tensorflow.keras.models import load_model
# # # # from PIL import Image
# # # # import numpy as np
# # # # import uvicorn
# # # # import io

# # # # # Load your trained model
# # # # model = load_model("final_model.keras")

# # # # # Define class names
# # # # class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # # # # Initialize FastAPI app
# # # # app = FastAPI()

# # # # # CORS setup for React frontend
# # # # app.add_middleware(
# # # #     CORSMiddleware,
# # # #     allow_origins=["http://localhost:3000"],  # Adjust based on your React server port
# # # #     allow_credentials=True,
# # # #     allow_methods=["*"],
# # # #     allow_headers=["*"],
# # # # )

# # # # @app.post("/predict")
# # # # async def predict(file: UploadFile = File(...)):
# # # #     try:
# # # #         contents = await file.read()
# # # #         image = Image.open(io.BytesIO(contents)).convert("RGB")
# # # #         image = image.resize((224, 224))
# # # #         img_array = np.array(image) / 255.0
# # # #         img_array = np.expand_dims(img_array, axis=0)

# # # #         prediction = model.predict(img_array)[0]
# # # #         predicted_index = int(np.argmax(prediction))
# # # #         confidence = float(np.max(prediction)) * 100

# # # #         return {
# # # #             "class": class_names[predicted_index],
# # # #             "confidence": confidence,
# # # #             "all_confidences": prediction.tolist(),
# # # #             "class_names": class_names
# # # #         }
# # # #     except Exception as e:
# # # #         return {"error": str(e)}

# # # # if __name__ == "__main__":
# # # #     uvicorn.run(app, host="0.0.0.0", port=8000)









# # # from fastapi import FastAPI, File, UploadFile
# # # from fastapi.middleware.cors import CORSMiddleware
# # # from tensorflow.keras.models import load_model
# # # from PIL import Image
# # # import numpy as np
# # # import uvicorn
# # # import io
# # # import os
# # # import google.generativeai as genai

# # # # Load the trained model
# # # model = load_model("final_model.keras")

# # # # Class labels
# # # class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # # # Configure Gemini
# # # genai.configure(api_key=os.getenv("AIzaSyBCzRLZDZjwhZu-XiY7xGtDQpXGwJKIkbA"))
# # # gemini_model = genai.GenerativeModel("gemini-pro")

# # # # Create FastAPI app
# # # app = FastAPI()

# # # # CORS setup for React frontend
# # # app.add_middleware(
# # #     CORSMiddleware,
# # #     allow_origins=["http://localhost:3000"],  # React dev server
# # #     allow_credentials=True,
# # #     allow_methods=["*"],
# # #     allow_headers=["*"],
# # # )

# # # def generate_ai_explanation(stage: str, confidence: float):
# # #     prompt = (
# # #         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
# # #         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
# # #         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips. in 30 words"
# # #     )
# # #     try:
# # #         response = gemini_model.generate_content(prompt)
# # #         print(response.text)
# # #         return response.text
       
# # #     except Exception as e:
# # #         return f"AI explanation failed: {str(e)}"


    

# # # @app.post("/predict")
# # # async def predict(file: UploadFile = File(...)):
# # #     try:
# # #         contents = await file.read()
# # #         image = Image.open(io.BytesIO(contents)).convert("RGB")
# # #         image = image.resize((224, 224))
# # #         img_array = np.array(image) / 255.0
# # #         img_array = np.expand_dims(img_array, axis=0)

# # #         prediction = model.predict(img_array)[0]
# # #         predicted_index = int(np.argmax(prediction))
# # #         confidence = float(np.max(prediction)) * 100
# # #         predicted_class = class_names[predicted_index]

# # #         # Generate AI explanation
# # #         explanation_text = generate_ai_explanation(predicted_class, confidence)

# # #         # Simple way to extract sections (or you can do better parsing with regex)
# # #         def get_section(keyword):
# # #             lower = explanation_text.lower()
# # #             if keyword.lower() in lower:
# # #                 start = lower.find(keyword.lower())
# # #                 end = lower.find("\n", start)
# # #                 return explanation_text[start:end].replace("\n", "").strip()
# # #             return "Not available."

# # #         return {
# # #             "class": predicted_class,
# # #             "confidence": confidence,
# # #             "all_confidences": prediction.tolist(),
# # #             "class_names": class_names,
# # #             "details": {
# # #                 "explanation": get_section("explanation"),
# # #                 "care": get_section("care"),
# # #                 "diet": get_section("diet"),
# # #                 "tips": get_section("tips"),
# # #             }
# # #         }

# # #     except Exception as e:
# # #         return {"error": str(e)}
   
# # # if __name__ == "__main__":
# # #     uvicorn.run(app, host="0.0.0.0", port=8000)











# # # from fastapi import FastAPI, File, UploadFile, Form
# # # from fastapi.middleware.cors import CORSMiddleware
# # # from tensorflow.keras.models import load_model
# # # from PIL import Image
# # # import numpy as np
# # # import uvicorn
# # # import io
# # # import os
# # # import google.generativeai as genai
# # # import mysql.connector

# # # # Load the trained model
# # # model = load_model("final_model.keras")

# # # # Class labels
# # # class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # # # Configure Gemini
# # # genai.configure(api_key=os.getenv("GEMINI_API_KEY") or "AIzaSyBCzRLZDZjwhZu-XiY7xGtDQpXGwJKIkbA")
# # # gemini_model = genai.GenerativeModel("gemini-pro")

# # # # Initialize FastAPI app
# # # app = FastAPI()

# # # # Enable CORS
# # # app.add_middleware(
# # #     CORSMiddleware,
# # #     allow_origins=["http://localhost:8000","http://localhost:3000", "http://localhost:3001"],
# # #     allow_credentials=True,
# # #     allow_methods=["*"],
# # #     allow_headers=["*"],
# # # )

# # # # Connect to MySQL
# # # def get_db_connection():
# # #     return mysql.connector.connect(
# # #         host="localhost",
# # #         user="root",
# # #         password="Sanjay4679@",
# # #         database="predict_app"
# # #     )

# # # # AI explanation from Gemini
# # # def generate_ai_explanation(stage: str, confidence: float):
# # #     prompt = (
# # #         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
# # #         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
# # #         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips. (in 30 words)"
# # #     )
# # #     try:
# # #         response = gemini_model.generate_content(prompt)
# # #         return response.text
# # #     except Exception as e:
# # #         return f"AI explanation failed: {str(e)}"

# # # # ----------------------------
# # # # 📝 Signup Endpoint
# # # # ----------------------------
# # # @app.post("/signup")
# # # async def signup(
# # #     full_name: str = Form(...),
# # #     age: int = Form(...),
# # #     mobile_number: str = Form(...),
# # #     blood_group: str = Form(...),
# # #     email: str = Form(...),
# # #     password: str = Form(...)
# # # ):
# # #     conn = get_db_connection()
# # #     cursor = conn.cursor(dictionary=True)
# # #     cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
# # #     if cursor.fetchone():
# # #         conn.close()
# # #         return {"message": "User already exists"}

# # #     cursor.execute("""
# # #         INSERT INTO users (full_name, age, mobile_number, blood_group, email, password)
# # #         VALUES (%s, %s, %s, %s, %s, %s)
# # #     """, (full_name, age, mobile_number, blood_group, email, password))
# # #     conn.commit()
# # #     conn.close()
# # #     return {"message": "Signup successful"}

# # # # ----------------------------
# # # # 🔐 Signin Endpoint
# # # # ----------------------------
# # # @app.post("/signin")
# # # async def signin(email: str = Form(...), password: str = Form(...)):
# # #     conn = get_db_connection()
# # #     cursor = conn.cursor(dictionary=True)
# # #     cursor.execute("SELECT id, password FROM users WHERE email = %s", (email,))
# # #     user = cursor.fetchone()
# # #     conn.close()

# # #     if user and user["password"] == password:
# # #         return {"message": "Signin successful", "user_id": user["id"]}
# # #     return {"message": "Invalid credentials"}

# # # # ----------------------------
# # # # 🔍 Prediction Endpoint
# # # # ----------------------------
# # # @app.post("/predict")
# # # async def predict(user_id: str = Form(...), file: UploadFile = File(...)):
# # #     try:
# # #         contents = await file.read()
# # #         image = Image.open(io.BytesIO(contents)).convert("RGB")
# # #         image = image.resize((224, 224))
# # #         img_array = np.array(image) / 255.0
# # #         img_array = np.expand_dims(img_array, axis=0)

# # #         prediction = model.predict(img_array)[0]
# # #         predicted_index = int(np.argmax(prediction))
# # #         confidence = float(np.max(prediction)) * 100
# # #         predicted_class = class_names[predicted_index]
# # #         explanation = generate_ai_explanation(predicted_class, confidence)

# # #         # Save prediction to DB
# # #         conn = get_db_connection()
# # #         cursor = conn.cursor(dictionary=True)
# # #         cursor.execute("""
# # #             INSERT INTO predictions (user_id, image_name, prediction_value, ai_explanation)
# # #             VALUES (%s, %s, %s, %s)
# # #         """, (user_id, file.filename, predicted_class, explanation))
# # #         conn.commit()
# # #         conn.close()

# # #         return {
# # #             "class": predicted_class,
# # #             "confidence": confidence,
# # #             "details": explanation
# # #         }

# # #     except Exception as e:
# # #         return {"error": str(e)}

# # # # ----------------------------
# # # # 🔁 Run the server
# # # # ----------------------------
# # # if __name__ == "__main__":
# # #     uvicorn.run(app, host="0.0.0.0", port=8000)














# # # from fastapi import FastAPI, File, UploadFile
# # # from fastapi.middleware.cors import CORSMiddleware
# # # from tensorflow.keras.models import load_model
# # # from PIL import Image
# # # import numpy as np
# # # import uvicorn
# # # import io
# # # import os
# # # import google.generativeai as genai

# # # # Load the trained model
# # # model = load_model("final_model.keras")

# # # # Class labels
# # # class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # # # Configure Gemini
# # # genai.configure(api_key=os.getenv("AIzaSyBCzRLZDZjwhZu-XiY7xGtDQpXGwJKIkbA"))
# # # gemini_model = genai.GenerativeModel("gemini-pro")

# # # # Create FastAPI app
# # # app = FastAPI()

# # # # CORS setup for React frontend
# # # app.add_middleware(
# # #     CORSMiddleware,
# # #     allow_origins=["http://localhost:3000"],  # React dev server
# # #     allow_credentials=True,
# # #     allow_methods=["*"],
# # #     allow_headers=["*"],
# # # )

# # # def generate_ai_explanation(stage: str, confidence: float):
# # #     prompt = (
# # #         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
# # #         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
# # #         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips. in 30 words"
# # #     )
# # #     try:
# # #         response = gemini_model.generate_content(prompt)
# # #         print(response.text)
# # #         return response.text
# # #     except Exception as e:
# # #         return f"AI explanation failed: {str(e)}"

# # # @app.post("/predict")
# # # async def predict(file: UploadFile = File(...)):
# # #     try:
# # #         contents = await file.read()
# # #         image = Image.open(io.BytesIO(contents)).convert("RGB")
# # #         image = image.resize((224, 224))
# # #         img_array = np.array(image) / 255.0
# # #         img_array = np.expand_dims(img_array, axis=0)

# # #         prediction = model.predict(img_array)[0]
# # #         predicted_index = int(np.argmax(prediction))
# # #         confidence = float(np.max(prediction)) * 100
# # #         predicted_class = class_names[predicted_index]

# # #         # Generate AI explanation
# # #         explanation_text = generate_ai_explanation(predicted_class, confidence)

# # #         # Simple way to extract sections (or you can do better parsing with regex)
# # #         def get_section(keyword):
# # #             lower = explanation_text.lower()
# # #             if keyword.lower() in lower:
# # #                 start = lower.find(keyword.lower())
# # #                 end = lower.find("\n", start)
# # #                 return explanation_text[start:end].replace("\n", "").strip()
# # #             return "Not available."

# # #         return {
# # #             "class": predicted_class,
# # #             "confidence": confidence,
# # #             "all_confidences": prediction.tolist(),
# # #             "class_names": class_names,
# # #             "details": {
# # #                 "explanation": get_section("explanation"),
# # #                 "care": get_section("care"),
# # #                 "diet": get_section("diet"),
# # #                 "tips": get_section("tips"),
# # #             }
# # #         }

# # #     except Exception as e:
# # #         return {"error": str(e)}

# # # if __name__ == "__main__":
# # #     uvicorn.run(app, host="0.0.0.0", port=8000)


















# # from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
# # from fastapi.middleware.cors import CORSMiddleware
# # from pydantic import BaseModel
# # import mysql.connector
# # import os
# # import google.generativeai as genai
# # import io
# # from tensorflow.keras.models import load_model
# # from PIL import Image
# # import numpy as np
# # from hashlib import sha256
# # import bcrypt
# # import logging

# # # Set up logging
# # logging.basicConfig(level=logging.INFO)

# # # Load the trained model
# # model = load_model("final_model.keras")

# # # Class labels
# # class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # # Configure Gemini
# # genai.configure(api_key=os.getenv("AI_API_KEY"))
# # gemini_model = genai.GenerativeModel("gemini-pro")

# # # Create FastAPI app
# # app = FastAPI()

# # # CORS setup for React frontend
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["http://localhost:3000"],  # React dev server
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # Database connection function
# # def get_db_connection():
# #     return mysql.connector.connect(
# #         host="localhost",
# #         user="root",
# #         password="your_password",  # Replace with your DB password
# #         database="dr_app"
# #     )

# # # Pydantic model for signup request
# # class SignupRequest(BaseModel):
# #     email: str
# #     password: str
# #     full_name: str
# #     age: int
# #     mobile_number: str
# #     blood_group: str
# #     address: str

# # # Pydantic model for profile update request
# # class ProfileUpdateRequest(BaseModel):
# #     full_name: str
# #     age: int
# #     mobile_number: str
# #     blood_group: str
# #     address: str

# # # Generate AI explanation function
# # def generate_ai_explanation(stage: str, confidence: float):
# #     prompt = (
# #         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
# #         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
# #         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips. in 30 words"
# #     )
# #     try:
# #         response = gemini_model.generate_content(prompt)
# #         return response.text
# #     except Exception as e:
# #         return f"AI explanation failed: {str(e)}"

# # # Signup endpoint
# # @app.post("/api/patients/signup")
# # async def signup(request: SignupRequest):
# #     conn = get_db_connection()
# #     cursor = conn.cursor()

# #     # Check if user with same email already exists
# #     cursor.execute("SELECT * FROM users WHERE email = %s", (request.email,))
# #     existing_user = cursor.fetchone()
# #     if existing_user:
# #         cursor.close()
# #         conn.close()
# #         raise HTTPException(status_code=409, detail="Email already registered")

# #     # Hash the password with bcrypt
# #     hashed_password = bcrypt.hashpw(request.password.encode(), bcrypt.gensalt())

# #     cursor.execute(""" 
# #         INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address)
# #         VALUES (%s, %s, %s, %s, %s, %s, %s)
# #     """, (request.email, hashed_password, request.full_name, request.age, request.mobile_number, request.blood_group, request.address))
# #     conn.commit()

# #     cursor.close()
# #     conn.close()

# #     return {"message": "User registered successfully"}

# # # Profile endpoint to view and update user profile
# # @app.get("/profile/{email}")
# # async def get_profile(email: str):
# #     conn = get_db_connection()
# #     cursor = conn.cursor()

# #     cursor.execute("SELECT full_name, age, mobile_number, blood_group, address FROM users WHERE email = %s", (email,))
# #     user = cursor.fetchone()
# #     cursor.close()
# #     conn.close()

# #     if not user:
# #         raise HTTPException(status_code=404, detail="User not found")

# #     return {
# #         "full_name": user[0],
# #         "age": user[1],
# #         "mobile_number": user[2],
# #         "blood_group": user[3],
# #         "address": user[4]
# #     }

# # @app.put("/profile/{email}")
# # async def update_profile(email: str, request: ProfileUpdateRequest):
# #     conn = get_db_connection()
# #     cursor = conn.cursor()

# #     cursor.execute(""" 
# #         UPDATE users 
# #         SET full_name = %s, age = %s, mobile_number = %s, blood_group = %s, address = %s 
# #         WHERE email = %s
# #     """, (request.full_name, request.age, request.mobile_number, request.blood_group, request.address, email))

# #     conn.commit()
# #     cursor.close()
# #     conn.close()

# #     return {"message": "Profile updated successfully"}

# # # Prediction endpoint
# # @app.post("/predict")
# # async def predict(file: UploadFile = File(...)):
# #     try:
# #         contents = await file.read()
# #         image = Image.open(io.BytesIO(contents)).convert("RGB")
# #         image = image.resize((224, 224))
# #         img_array = np.array(image) / 255.0
# #         img_array = np.expand_dims(img_array, axis=0)

# #         prediction = model.predict(img_array)[0]
# #         predicted_index = int(np.argmax(prediction))
# #         confidence = float(np.max(prediction)) * 100
# #         predicted_class = class_names[predicted_index]

# #         # Generate AI explanation
# #         explanation_text = generate_ai_explanation(predicted_class, confidence)

# #         # Simple way to extract sections (or you can do better parsing with regex)
# #         def get_section(keyword):
# #             lower = explanation_text.lower()
# #             if keyword.lower() in lower:
# #                 start = lower.find(keyword.lower())
# #                 end = lower.find("\n", start)
# #                 return explanation_text[start:end].replace("\n", "").strip()
# #             return "Not available."

# #         return {
# #             "class": predicted_class,
# #             "confidence": confidence,
# #             "all_confidences": prediction.tolist(),
# #             "class_names": class_names,
# #             "details": {
# #                 "explanation": get_section("explanation"),
# #                 "care": get_section("care"),
# #                 "diet": get_section("diet"),
# #                 "tips": get_section("tips"),
# #             }
# #         }

# #     except Exception as e:
# #         logging.error(f"Error during prediction: {str(e)}")
# #         return {"error": str(e)}

# # if __name__ == "__main__":
# #     import uvicorn
# #     uvicorn.run(app, host="0.0.0.0", port=8000)




# from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import mysql.connector
# import os
# import google.generativeai as genai
# import io
# from tensorflow.keras.models import load_model
# from PIL import Image
# import numpy as np
# import bcrypt
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)

# # Load the trained model
# model = load_model("final_model.keras")

# # Class labels
# class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # Configure Gemini
# genai.configure(api_key=os.getenv("AI_API_KEY"))
# gemini_model = genai.GenerativeModel("gemini-pro")

# # Create FastAPI app
# app = FastAPI()

# # CORS setup for React frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # React dev server
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Database connection function
# def get_db_connection():
#     return mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="Sanjay4679@",  # Replace with your DB password
#         database="miniproject"
#     )

# # Pydantic model for signup request
# class SignupRequest(BaseModel):
#     email: str
#     password: str
#     full_name: str
#     age: int
#     mobile_number: str
#     blood_group: str
#     address: str

# # Signup endpoint
# @app.post("/api/patients/signup")
# async def signup(request: SignupRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     # Check if user with same email already exists
#     cursor.execute("SELECT * FROM users WHERE email = %s", (request.email,))
#     existing_user = cursor.fetchone()
#     if existing_user:
#         cursor.close()
#         conn.close()
#         raise HTTPException(status_code=409, detail="Email already registered")

#     # Hash the password with bcrypt
#     hashed_password = bcrypt.hashpw(request.password.encode(), bcrypt.gensalt())

#     cursor.execute(""" 
#         INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address)
#         VALUES (%s, %s, %s, %s, %s, %s, %s)
#     """, (request.email, hashed_password, request.full_name, request.age, request.mobile_number, request.blood_group, request.address))
#     conn.commit()

#     cursor.close()
#     conn.close()

#     return {"message": "User registered successfully"}, 200  # Return 200 OK

# # Prediction endpoint (for reference)
# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         contents = await file.read()
#         image = Image.open(io.BytesIO(contents)).convert("RGB")
#         image = image.resize((224, 224))
#         img_array = np.array(image) / 255.0
#         img_array = np.expand_dims(img_array, axis=0)

#         prediction = model.predict(img_array)[0]
#         predicted_index = int(np.argmax(prediction))
#         confidence = float(np.max(prediction)) * 100
#         predicted_class = class_names[predicted_index]

#         return {
#             "class": predicted_class,
#             "confidence": confidence,
#             "all_confidences": prediction.tolist(),
#             "class_names": class_names
#         }

#     except Exception as e:
#         logging.error(f"Error during prediction: {str(e)}")
#         return {"error": str(e)}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)




# from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import mysql.connector
# import os
# import google.generativeai as genai
# import io
# from tensorflow.keras.models import load_model
# from PIL import Image
# import numpy as np
# import bcrypt
# import logging
# import re

# # Set up logging
# logging.basicConfig(level=logging.INFO)

# # Load the trained model
# model = load_model("final_model.keras")

# # Class labels
# class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # Configure Gemini API
# genai.configure(api_key=os.getenv(""))
# gemini_model = genai.GenerativeModel("gemini-pro")

# # Create FastAPI app
# app = FastAPI()

# # CORS setup for React frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # React dev server
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Database connection function
# def get_db_connection():
#     return mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="Sanjay4679@",  # Replace with your DB password
#         database="miniproject"
#     )


# Generate AI explanation function
# def generate_ai_explanation(stage: str, confidence: float):
#     prompt = (
#         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
#         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
#         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips."
#     )
#     try:
#         response = gemini_model.generate_content(prompt)
#         return response.text
#     except Exception as e:
#         return f"AI explanation failed: {str(e)}"


# def generate_ai_explanation(stage: str, confidence: float):
#     prompt = (
#         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
#         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
#         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips."
#     )
#     try:
#         response = gemini_model.generate_content(prompt)
#         explanation_text = response.text
#         print("\n--- AI Explanation ---\n", explanation_text)

#         # Split into structured sections using regex
#         sections = re.split(r'\n?\d+\.\s+', explanation_text)
#         structured = {
#             "explanation": sections[1].strip() if len(sections) > 1 else "",
#             "care": sections[2].strip() if len(sections) > 2 else "",
#             "diet": sections[3].strip() if len(sections) > 3 else "",
#             "tips": sections[4].strip() if len(sections) > 4 else ""
#         }

#         return structured
#     except Exception as e:
#         error_msg = f"AI explanation failed: {str(e)}"
#         print("\n--- AI Explanation Error ---\n", error_msg)
#         return {
#             "explanation": error_msg,
#             "care": "", "diet": "", "tips": ""
#         }

# # Signup endpoint
# @app.post("/api/patients/signup")
# async def signup(request: SignupRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     # Check if user with the same email already exists
#     cursor.execute("SELECT * FROM users WHERE email = %s", (request.email,))
#     existing_user = cursor.fetchone()
#     if existing_user:
#         cursor.close()
#         conn.close()
#         raise HTTPException(status_code=409, detail="Email already registered")

#     # Hash the password with bcrypt
#     hashed_password = bcrypt.hashpw(request.password.encode(), bcrypt.gensalt())

#     cursor.execute(""" 
#         INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address)
#         VALUES (%s, %s, %s, %s, %s, %s, %s)
#     """, (request.email, hashed_password, request.full_name, request.age, request.mobile_number, request.blood_group, request.address))
#     conn.commit()

#     cursor.close()
#     conn.close()

#     return {"message": "User registered successfully"}

# # Signin endpoint
# @app.post("/signin")
# async def signin(request: SigninRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     cursor.execute("SELECT id, password FROM users WHERE email = %s", (request.email,))
#     user = cursor.fetchone()

#     cursor.close()
#     conn.close()

#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")

#     user_id, hashed_password = user

#     # Compare the hashed password
#     if not bcrypt.checkpw(request.password.encode(), hashed_password.encode()):
#         raise HTTPException(status_code=401, detail="Incorrect password")

#     return {
#         "message": "Login successful",
#         "user_id": user_id,  # You could also return the email instead
#         "email": request.email
#     }
# # Profile endpoint to view and update user profile
# @app.get("/profile/{email}")
# async def get_profile(email: str):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     cursor.execute("SELECT full_name, age, mobile_number, blood_group, address FROM users WHERE email = %s", (email,))
#     user = cursor.fetchone()
#     cursor.close()
#     conn.close()

#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")

#     return {
#         "full_name": user[0],
#         "age": user[1],
#         "mobile_number": user[2],
#         "blood_group": user[3],
#         "address": user[4]
#     }

# @app.put("/profile/{email}")
# async def update_profile(email: str, request: ProfileUpdateRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     cursor.execute(""" 
#         UPDATE users 
#         SET full_name = %s, age = %s, mobile_number = %s, blood_group = %s, address = %s 
#         WHERE email = %s
#     """, (request.full_name, request.age, request.mobile_number, request.blood_group, request.address, email))

#     conn.commit()
#     cursor.close()
#     conn.close()

#     return {"message": "Profile updated successfully"}

# # # Prediction endpoint
# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         contents = await file.read()
#         image = Image.open(io.BytesIO(contents)).convert("RGB")
#         image = image.resize((224, 224))
#         img_array = np.array(image) / 255.0
#         img_array = np.expand_dims(img_array, axis=0)

#         prediction = model.predict(img_array)[0]
#         predicted_index = int(np.argmax(prediction))
#         confidence = float(np.max(prediction)) * 100
#         predicted_class = class_names[predicted_index]

#         # Generate AI explanation
#         explanation_text = generate_ai_explanation(predicted_class, confidence)

#         # Simple way to extract sections
#         def get_section(keyword):
#             lower = explanation_text.lower()
#             if keyword.lower() in lower:
#                 start = lower.find(keyword.lower())
#                 end = lower.find("\n", start)
#                 return explanation_text[start:end].replace("\n", "").strip()
#             return "Not available."

#         return {
#             "class": predicted_class,
#             "confidence": confidence,
#             "all_confidences": prediction.tolist(),
#             "class_names": class_names,
#             "details": {
#                 "explanation": get_section("explanation"),
#                 "care": get_section("care"),
#                 "diet": get_section("diet"),
#                 "tips": get_section("tips"),
#             }
#         }

#     except Exception as e:
#         logging.error(f"Error during prediction: {str(e)}")
#         return {"error": str(e)}

# # Run the application
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)






# from fastapi import FastAPI, File, UploadFile
# import uvicorn
# import os
# from tensorflow.keras.models import load_model
# from PIL import Image
# import numpy as np
# import google.generativeai as genai
# import re
# import io

# # Initialize FastAPI app
# app = FastAPI()

# # Load your trained model
# model = load_model("final_model.keras")

# # Define your class names
# class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # Configure Gemini API
# genai.configure(api_key="AIzaSyBCzRLZDZjwhZu-XiY7xGtDQpXGwJKIkbA")
# gemini_model = genai.GenerativeModel("gemini-2.0-flash")

# # Function to generate AI explanation for diabetic retinopathy stage prediction
# def generate_ai_explanation(stage: str, confidence: float):
#     prompt = (
#         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
#         f"with a confidence of {confidence:.2f}%. Explain the medical meaning of this prediction in simple terms, "
#         f"and provide:\n1. An explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Useful health tips."
#     )
#     try:
#         response = gemini_model.generate_content(prompt)
#         explanation_text = response.text
#         print("\n--- AI Explanation ---\n", explanation_text)

#         # Split into structured sections using regex
#         sections = re.split(r'\n?\d+\.\s+', explanation_text)
#         structured = {
#             "explanation": sections[1].strip() if len(sections) > 1 else "",
#             "care": sections[2].strip() if len(sections) > 2 else "",
#             "diet": sections[3].strip() if len(sections) > 3 else "",
#             "tips": sections[4].strip() if len(sections) > 4 else ""
#         }

#         return structured
#     except Exception as e:
#         error_msg = f"AI explanation failed: {str(e)}"
#         print("\n--- AI Explanation Error ---\n", error_msg)
#         return {
#             "explanation": error_msg,
#             "care": "", "diet": "", "tips": ""
#         }

# # Your prediction endpoint
# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         contents = await file.read()
#         image = Image.open(io.BytesIO(contents)).convert("RGB")
#         image = image.resize((224, 224))
#         img_array = np.array(image) / 255.0
#         img_array = np.expand_dims(img_array, axis=0)

#         prediction = model.predict(img_array)[0]
#         predicted_index = int(np.argmax(prediction))
#         confidence = float(np.max(prediction)) * 100
#         predicted_class = class_names[predicted_index]

#         # Generate AI explanation
#         explanation_text = generate_ai_explanation(predicted_class, confidence)

#         # Return prediction and explanation
#         return {
#             "class": predicted_class,
#             "confidence": confidence,
#             "all_confidences": prediction.tolist(),
#             "class_names": class_names,
#             "details": explanation_text
#         }
#     except Exception as e:
#         return {"error": str(e)}

# # Run the FastAPI app with SSL
# if __name__ == "__main__":
#     uvicorn.run(
#         app,
#         host="0.0.0.0",
#         port=8000
#     )

# 



# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# import uvicorn
# import os
# from tensorflow.keras.models import load_model
# from PIL import Image
# import numpy as np
# import google.generativeai as genai
# import re
# import io

# # ✅ Initialize FastAPI app
# app = FastAPI()

# # ✅ Enable CORS for frontend integration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Replace "*" with your frontend URL like ["http://localhost:3000"] in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ✅ Load trained model
# model = load_model("final_model.keras")

# # ✅ Define class names
# class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # ✅ Configure Gemini API
# genai.configure(api_key="AIzaSyBCzRLZDZjwhZu-XiY7xGtDQpXGwJKIkbA")
# gemini_model = genai.GenerativeModel("gemini-2.0-flash")

# # ✅ Function to generate structured explanation
# def generate_ai_explanation(stage: str, confidence: float):
#     prompt = (
#         f"The AI model has predicted the stage of diabetic retinopathy as **'{stage}'** "
#         f"with a confidence of **{confidence:.2f}%**.\n\n"
#         f"Please provide a **clear, structured, and point-wise explanation** under the following headings:\n\n"
#         f"1. **Explanation**: Briefly describe what this stage of diabetic retinopathy means in simple medical terms.\n"
#         f"2. **Care and Treatment Guidance**: Provide detailed steps or advice on how the patient should take care and what treatments may be needed.\n"
#         f"3. **Recommended Diet**: Suggest a healthy and suitable diet for managing diabetic retinopathy.\n"
#         f"4. **Useful Health Tips**: Share additional tips, precautions, or lifestyle advice that will help the patient manage or improve their condition.\n\n"
#         f"✅ Use simple, easy-to-understand language."
#     )
#     try:
#         response = gemini_model.generate_content(prompt)
#         explanation_text = response.text or ""

#         # Use regex to split the generated content
#         sections = re.split(r'\n?\d+\.\s+', explanation_text)
#         structured = {
#             "explanation": sections[1].strip() if len(sections) > 1 else "Explanation not available.",
#             "care": sections[2].strip() if len(sections) > 2 else "Care guidance not available.",
#             "diet": sections[3].strip() if len(sections) > 3 else "Diet recommendation not available.",
#             "tips": sections[4].strip() if len(sections) > 4 else "Health tips not available."
#         }

#         return structured

#     except Exception as e:
#         # Return dummy fallback to avoid crash
#         return {
#             "explanation": f"AI explanation failed: {str(e)}",
#             "care": "Care information not available.",
#             "diet": "Diet information not available.",
#             "tips": "Health tips not available."
#         }

# # ✅ Prediction Endpoint
# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         # Read and preprocess the uploaded image
#         contents = await file.read()
#         image = Image.open(io.BytesIO(contents)).convert("RGB")
#         image = image.resize((224, 224))
#         img_array = np.array(image) / 255.0
#         img_array = np.expand_dims(img_array, axis=0)

#         # Make prediction
#         prediction = model.predict(img_array)[0]
#         predicted_index = int(np.argmax(prediction))
#         confidence = float(np.max(prediction)) * 100
#         predicted_class = class_names[predicted_index]

#         # Get AI Explanation
#         explanation = generate_ai_explanation(predicted_class, confidence)

#         return {
#             "class": predicted_class,
#             "confidence": confidence,
#             "all_confidences": prediction.tolist(),
#             "class_names": class_names,
#             "details": explanation
#         }

#     except Exception as e:
#         return {"error": str(e)}

# # ✅ Run FastAPI app
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)  





# from fastapi import FastAPI, File, UploadFile, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import mysql.connector
# import os
# import google.generativeai as genai
# import io
# from tensorflow.keras.models import load_model
# from PIL import Image
# import numpy as np
# import bcrypt
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)

# # Load the trained model
# model = load_model("final_model.keras")

# # Class labels
# class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# # Configure Gemini API
# genai.configure(api_key=os.getenv("AI_API_KEY"))  # Make sure this env variable is set
# gemini_model = genai.GenerativeModel("gemini-pro")

# # Create FastAPI app
# app = FastAPI()

# # CORS for frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # MySQL connection
# def get_db_connection():
#     return mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="Sanjay4679@",  # ⚠ Replace with your actual password or load from .env
#         database="miniproject"
#     )

# # Pydantic models
# class SignupRequest(BaseModel):
#     email: str
#     password: str
#     full_name: str
#     age: int
#     mobile_number: str
#     blood_group: str
#     address: str

# class SigninRequest(BaseModel):
#     email: str
#     password: str

# class ProfileUpdateRequest(BaseModel):
#     full_name: str
#     age: int
#     mobile_number: str
#     blood_group: str
#     address: str

# # AI Explanation
# def generate_ai_explanation(stage: str, confidence: float):
#     prompt = (
#         f"The AI model has predicted the stage of diabetic retinopathy as '{stage}' "
#         f"with a confidence of {confidence:.2f}%. Explain the medical meaning in simple terms, and provide:\n"
#         "1. Explanation\n2. Care and treatment guidance\n3. Recommended diet\n4. Health tips"
#     )
#     try:
#         response = gemini_model.generate_content(prompt)
#         return response.text
#     except Exception as e:
#         return f"AI explanation failed: {str(e)}"

# # Signup
# @app.post("/api/patients/signup")
# async def signup(request: SignupRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     cursor.execute("SELECT * FROM users WHERE email = %s", (request.email,))
#     if cursor.fetchone():
#         cursor.close()
#         conn.close()
#         raise HTTPException(status_code=409, detail="Email already registered")

#     hashed_password = bcrypt.hashpw(request.password.encode(), bcrypt.gensalt())
#     cursor.execute("""
#         INSERT INTO users (email, password, full_name, age, mobile_number, blood_group, address)
#         VALUES (%s, %s, %s, %s, %s, %s, %s)
#     """, (request.email, hashed_password, request.full_name, request.age,
#           request.mobile_number, request.blood_group, request.address))

#     conn.commit()
#     cursor.close()
#     conn.close()
#     return {"message": "User registered successfully"}

# # Signin
# @app.post("/signin")
# async def signin(request: SigninRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     cursor.execute("SELECT id, password FROM users WHERE email = %s", (request.email,))
#     user = cursor.fetchone()

#     cursor.close()
#     conn.close()

#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")

#     user_id, hashed_password = user
#     if not bcrypt.checkpw(request.password.encode(), hashed_password.encode()):
#         raise HTTPException(status_code=401, detail="Incorrect password")

#     return {"message": "Login successful", "user_id": user_id, "email": request.email}

# # View profile
# @app.get("/profile/{email}")
# async def get_profile(email: str):
#     conn = get_db_connection()
#     cursor = conn.cursor()
#     cursor.execute("SELECT full_name, age, mobile_number, blood_group, address FROM users WHERE email = %s", (email,))
#     user = cursor.fetchone()
#     cursor.close()
#     conn.close()

#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")

#     return {
#         "full_name": user[0],
#         "age": user[1],
#         "mobile_number": user[2],
#         "blood_group": user[3],
#         "address": user[4]
#     }

# # Update profile
# @app.put("/profile/{email}")
# async def update_profile(email: str, request: ProfileUpdateRequest):
#     conn = get_db_connection()
#     cursor = conn.cursor()
#     cursor.execute("""
#         UPDATE users
#         SET full_name = %s, age = %s, mobile_number = %s, blood_group = %s, address = %s
#         WHERE email = %s
#     """, (request.full_name, request.age, request.mobile_number, request.blood_group, request.address, email))
#     conn.commit()
#     cursor.close()
#     conn.close()
#     return {"message": "Profile updated successfully"}

# # Prediction
# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         contents = await file.read()
#         image = Image.open(io.BytesIO(contents)).convert("RGB")
#         image = image.resize((224, 224))
#         img_array = np.array(image) / 255.0
#         img_array = np.expand_dims(img_array, axis=0)

#         prediction = model.predict(img_array)[0]
#         predicted_index = int(np.argmax(prediction))
#         confidence = float(np.max(prediction)) * 100
#         predicted_class = class_names[predicted_index]

#         explanation_text = generate_ai_explanation(predicted_class, confidence)

#         def get_section(keyword):
#             lower = explanation_text.lower()
#             if keyword.lower() in lower:
#                 start = lower.find(keyword.lower())
#                 end = lower.find("\n", start)
#                 return explanation_text[start:end].replace("\n", "").strip()
#             return "Not available."

#         return {
#             "class": predicted_class,
#             "confidence": confidence,
#             "all_confidences": prediction.tolist(),
#             "class_names": class_names,
#             "details": {
#                 "explanation": get_section("explanation"),
#                 "care": get_section("care"),
#                 "diet": get_section("diet"),
#                 "tips": get_section("tips")
#             }
#         }

#     except Exception as e:
#         logging.error(f"Prediction error: {e}")
#         raise HTTPException(status_code=500, detail="Prediction failed")

# # Run the app with: uvicorn main:app --reload















# # ✅ Import libraries

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import google.generativeai as genai
import re
import io

# ✅ Initialize FastAPI app
app = FastAPI()

# ✅ Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all or restrict to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load trained model
model = load_model("final_model.keras")

# ✅ Define class names
class_names = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR']

# ✅ Configure Gemini API
genai.configure(api_key="AIzaSyBCzRLZDZjwhZu-XiY7xGtDQpXGwJKIkbA")
gemini_model = genai.GenerativeModel("gemini-2.0-flash")

# ✅ Updated AI explanation function
def generate_ai_explanation(stage: str, confidence: float):
    prompt = f"""
🔹 *Predicted Stage:* {stage}
🔹 *Confidence:* {confidence:.2f}%

The AI model has classified the retina image as *"{stage}"* with a confidence of *{confidence:.2f}%*.

### 📌 Required Response:
1️⃣ *📚 Scientific Explanation:* Provide a clear explanation of this stage of Diabetic Retinopathy in simple terms.  
2️⃣ *📊 Detailed Medical Analysis:* Explain why this stage is important and what symptoms or changes are visible in the eye.  
3️⃣ *🛡️ Care and Treatment Guidance:* Recommend the best treatments and care plan for patients at this stage.  
4️⃣ *🍎 Recommended Diet and Lifestyle:* Suggest a patient-friendly diet and healthy habits.  
5️⃣ *🌟 Useful Health Tips:* Share tips to prevent worsening of the disease and maintain eye health.
"""
    try:
        response = gemini_model.generate_content(prompt)
        explanation_text = response.text if hasattr(response, "text") else "AI explanation not available."

        return {
            "full_text": explanation_text.strip()
        }
    except Exception as e:
        return {
            "full_text": f"AI explanation failed: {str(e)}"
        }

# ✅ Prediction Endpoint
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        image = image.resize((224, 224))
        img_array = np.array(image) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)[0]
        predicted_index = int(np.argmax(prediction))
        confidence = float(np.max(prediction)) * 100
        predicted_class = class_names[predicted_index]

        # ✅ Generate AI explanation
        explanation = generate_ai_explanation(predicted_class, confidence)

        return {
            "class": predicted_class,
            "confidence": confidence,
            "all_confidences": prediction.tolist(),
            "class_names": class_names,
            "details": explanation
        }

    except Exception as e:
        return {"error": str(e)}

# ✅ Run FastAPI app
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
